import {getSocialComments} from './social-comments.js';
import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const bigPicture = document.querySelector('.big-picture');

const renderBigPicture = (loadedPictures) => {
  const pictureCards = document.querySelectorAll('.picture');
  const bigPictureImg = document.querySelector('.big-picture__img');

  pictureCards.forEach((pictureCard) => {
    pictureCard.addEventListener('click', function () {
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      bigPictureImg.querySelector('img').src = pictureCard.querySelector('.picture__img').src;
      bigPicture.querySelector('.likes-count').textContent = pictureCard.querySelector('.picture__likes').textContent;
      bigPicture.querySelector('.comments-count').textContent = pictureCard.querySelector('.picture__comments').textContent;
      loadedPictures.forEach((loadedPicture) => {
        if (bigPictureImg.querySelector('img').src === ('http://localhost:3000/' + loadedPicture.url)) {
          bigPicture.querySelector('.social__caption').textContent = loadedPicture.description;
          getSocialComments(loadedPicture.comments);
        }
      });
    });
  });
};

function closePictureModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

closeBigPicture.addEventListener('click', () => {
  closePictureModal();
});

closeBigPicture.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
});

export {body, renderBigPicture};
