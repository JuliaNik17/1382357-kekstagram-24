import { body } from './render-big-picture.js';
import {isEscapeKey} from './util.js';
import {imgUploadFormElement } from './set-img-upload-form-submit.js';
import { createSlider, removeSlider } from './effect-level-slider-element.js';

const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');
const imgUploadLableElement = document.querySelector('.img-upload__label');
const imgUploadCancelElement = document.querySelector('.img-upload__cancel');

const onImgUploadEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    onImgUploadCancelElementClick();
  }
};

const onImgUploadLableElementClick = () => {
  imgUploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  createSlider();
  document.addEventListener('keydown', onImgUploadEscKeydown);
};

const onImgUploadCancelElementClick = () => {
  imgUploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadFormElement.reset();
  removeSlider();
  document.removeEventListener('keydown', onImgUploadEscKeydown);
};

imgUploadLableElement.addEventListener('click', onImgUploadLableElementClick);

imgUploadCancelElement.addEventListener('click', onImgUploadCancelElementClick);

export{imgUploadOverlayElement, onImgUploadCancelElementClick, onImgUploadLableElementClick};
