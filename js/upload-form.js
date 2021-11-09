import {renderErrorMessage} from './util.js';
import { renderSuccessMessage } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const textDescription = document.querySelector('.text__description');


hashtagInput.addEventListener('input', () => {
  const hashtagArr = hashtagInput.value.toLowerCase().split(' ');
  const hashtagSet = new Set(hashtagArr);
  if (hashtagArr.length > 5) {
    hashtagInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  } else if (hashtagSet.size !== hashtagArr.length) {
    hashtagInput.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  } else {
    hashtagArr.forEach((hashtag) => {
      if (!hashtag.startsWith('#')) {
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

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
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

export {setUploadFormSubmit, uploadForm};
