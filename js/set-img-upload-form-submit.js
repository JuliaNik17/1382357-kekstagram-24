import {renderErrorMessage} from './util.js';
import { renderSuccessMessage } from './util.js';

const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const HASHTAGS_MAX_LENGTH = 5;
const imgUploadFormElement = document.querySelector('.img-upload__form');
const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');


textHashtagsElement.addEventListener('input', () => {
  const hashtagOptions = textHashtagsElement.value.toLowerCase().split(' ');
  const hashtagSet = new Set(hashtagOptions);
  if (hashtagOptions.length > HASHTAGS_MAX_LENGTH) {
    textHashtagsElement.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  } else if (hashtagSet.size !== hashtagOptions.length) {
    textHashtagsElement.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    hashtagOptions.forEach((hashtag) => {
      if (!hashtag.startsWith('#')) {
        textHashtagsElement.setCustomValidity('Хэш-тег должен начинаться с символа #');
      } else if (!RE.test(hashtag)) {
        textHashtagsElement.setCustomValidity('Не может содержать пробелы, спецсимволы (#, @, $), символы пунктуации, эмодзи');
      }
      else {
        textHashtagsElement.setCustomValidity('');
      }
    });
  }

  textHashtagsElement.reportValidity();
});

textHashtagsElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

textDescriptionElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const setImgUploadFormSubmit = (onSuccess) => {
  imgUploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://24.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          renderSuccessMessage();
        } else {
          renderErrorMessage();
        }
      })
      .catch(() => {
        renderErrorMessage();
      });
  });
};

export {setImgUploadFormSubmit, imgUploadFormElement};
