import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const getForm = document.querySelector(".form");
const getGallery = document.querySelector(".gallery");
const getLoadMoreBtn = document.querySelector(".load-more");

let page = 1;
let searchQuery = "";

getForm.addEventListener("submit", async event => {
  event.preventDefault();

  const getQuery = event.target.elements["search-text"].value.trim();

  if (!getQuery) {
    return;
  }

  searchQuery = getQuery;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });

      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
      position: "topRight",
    });

    console.error(error);
  } finally {
    hideLoader();
  }
});

getLoadMoreBtn.addEventListener("click", async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    }

    const getGalleryItem = document.querySelector(".gallery-item");

    const cardHeight = getGalleryItem.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again!",
      position: "topRight",
    });

    console.error(error);
  } finally {
    hideLoader();
  }
});