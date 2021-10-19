import {userPictures} from './upload.js';
import {getSocialComments} from './social-comments.js';
import {isEscapeKey} from './util.js';

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');

pictures.forEach((picture) => {
  picture.addEventListener('click', function () {
    bigPicture.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    bigPictureImg.querySelector('img').src = picture.querySelector('.picture__img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
    userPictures.forEach((userPicture) => {
      if (bigPictureImg.querySelector('img').src === ('http://localhost:3000/' + userPicture.url)) {
        bigPicture.querySelector('.social__caption').textContent = userPicture.description;
        getSocialComments(userPicture.comments);
      }
    });
  });
});

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
