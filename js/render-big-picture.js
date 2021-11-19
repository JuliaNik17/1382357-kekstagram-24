import {getSocialComments} from './get-social-comments.js';
import {isEscapeKey} from './util.js';
import { socialCommentsContainer } from './get-social-comments.js';
import { commentsLoaderElement } from './get-social-comments.js';
import {commentsShownElement} from './get-social-comments.js';

const COMMENTS_STEP = 5;
const body = document.querySelector('body');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const bigPictureElement = document.querySelector('.big-picture');

const renderBigPicture = (loadedPictures) => {
  const pictureCards = document.querySelectorAll('.picture');
  const bigPictureImgElement = document.querySelector('.big-picture__img');


  commentsLoaderElement.addEventListener('click', () => {
    const counter = parseInt(commentsShownElement.textContent);
    const socialCommentElements = document.querySelectorAll('.social__comment');
    for(let i = counter; (i < counter + COMMENTS_STEP) && (i < socialCommentElements.length); i++) {
      const comment = socialCommentElements[i];
      comment.classList.remove('hidden');
      commentsShownElement.textContent = (i + 1);
      if(i === socialCommentElements.length - 1) {
        commentsLoaderElement.classList.add('hidden');
      }
    }
  });
  pictureCards.forEach((pictureCard) => {
    pictureCard.addEventListener('click', () => {
      bigPictureElement.classList.remove('hidden');
      document.addEventListener('keydown', onBigPictureEscKeydown);
      body.classList.add('modal-open');
      bigPictureImgElement.querySelector('img').src = pictureCard.querySelector('.picture__img').src;
      bigPictureElement.querySelector('.likes-count').textContent = pictureCard.querySelector('.picture__likes').textContent;
      bigPictureElement.querySelector('.comments-count').textContent = pictureCard.querySelector('.picture__comments').textContent;
      loadedPictures.forEach((loadedPicture) => {
        if (bigPictureImgElement.querySelector('img').src === ('http://localhost:3000/' + loadedPicture.url)) {
          bigPictureElement.querySelector('.social__caption').textContent = loadedPicture.description;
          getSocialComments(loadedPicture.comments);
        }
      });
    });
  });
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePictureModal();
  }
}

const closePictureModal = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  socialCommentsContainer.innerHTML = '';
}

bigPictureCancelElement.addEventListener('click', () => {
  closePictureModal();
});

export {body, renderBigPicture};
