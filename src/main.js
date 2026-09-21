import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const getForm = document.querySelector(".form");

getForm.addEventListener("submit", event => {
  event.preventDefault();

  const getQuery = event.target.elements["search-text"].value.trim();

  if (!getQuery) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(getQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: "Something went wrong. Please try again!",
        position: "topRight",
      });

      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});