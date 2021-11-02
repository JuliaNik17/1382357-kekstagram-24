import { body } from "./big-picture.js";
import {isEscapeKey} from './util.js';

const uploadPopup = document.querySelector('.img-upload__overlay');
const openUploadPopup = document.querySelector('.img-upload__label');
const closeUploadPopup = document.querySelector('.img-upload__cancel');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const step = 25;
const imgUpload = uploadPopup.querySelector('img');
const hashtagInput = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const textDescription = document.querySelector('.text__description');

openUploadPopup.addEventListener('click', () => {
  uploadPopup.classList.remove('hidden');
  body.classList.add('modal-open');
});

function closeUploadPicturePopup() {
  uploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadPopup.reset();
}

closeUploadPopup.addEventListener('click', () => {
  closeUploadPicturePopup();
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPicturePopup();
  }
});

hashtagInput.addEventListener('input', () => {
  const hashtagArr = hashtagInput.value.toLowerCase().split(' ');
  const hashtagSet = new Set(hashtagArr);
  console.log(hashtagArr);
  if (hashtagArr.length > 5) {
    hashtagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  } else if (hashtagSet.size != hashtagArr.length) {
    hashtagInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    hashtagArr.forEach((hashtag) => {
      console.log(hashtag);
      if (!hashtag.startsWith("#")) {
        hashtagInput.setCustomValidity('Хэш-тег должен начинаться с символа #');
      } else if (!re.test(hashtag)) {
        hashtagInput.setCustomValidity('Не может содержать пробелы, спецсимволы (#, @, $), символы пунктуации, эмодзи');
      }
      else {
        hashtagInput.setCustomValidity('');
      }
    });
  }

  hashtagInput.reportValidity();
});

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

textDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


scaleControlSmaller.addEventListener('click', function() {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue > 25) {
    const newScaleControlValue = scaleControlValue - step;
    document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
    let scaleValue = newScaleControlValue/100;
    imgUpload.style.transform = 'scale(' + scaleValue + ')';
  }
});

scaleControlBigger.addEventListener('click', function() {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue < 100) {
    const newScaleControlValue = scaleControlValue + step;
  document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
  let scaleValue = newScaleControlValue/100;
  imgUpload.style.transform = 'scale(' + scaleValue + ')';
  }
});

export{imgUpload};
