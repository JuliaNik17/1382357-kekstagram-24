import {getPhotoPost} from './data.js';

const userPictures = getPhotoPost();
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureListFragment = document.createDocumentFragment();

userPictures.forEach((userPicture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = userPicture.url;
  pictureElement.querySelector('.picture__likes').textContent = userPicture.likes;
  pictureElement.querySelector('.picture__comments').textContent = userPicture.comments.length;
  pictureListFragment.appendChild(pictureElement);
});

pictureContainer.appendChild(pictureListFragment);


