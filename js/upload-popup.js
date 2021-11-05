import { body } from "./big-picture.js";
import {isEscapeKey} from './util.js';
import { uploadForm } from "./upload-form.js";
import { createSlider, imgUpload, removeSlider } from "./slider.js";

const uploadPopup = document.querySelector('.img-upload__overlay');
const openUploadPopup = document.querySelector('.img-upload__label');
const closeUploadPopup = document.querySelector('.img-upload__cancel');

function openUploadPicturePopup() {
  uploadPopup.classList.remove('hidden');
  body.classList.add('modal-open');
  createSlider();
}

function closeUploadPicturePopup() {
  uploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  removeSlider();
}

openUploadPopup.addEventListener('click', () => {
  openUploadPicturePopup();
});

closeUploadPopup.addEventListener('click', () => {
  closeUploadPicturePopup();
  console.log(imgUpload.style.filter);
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPicturePopup();
  }
});

export{uploadPopup, closeUploadPicturePopup, openUploadPicturePopup};
