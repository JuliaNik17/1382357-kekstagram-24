import {createRandomIdFromRangeGenerator} from './util.js';
import {clearPictureContainer} from './upload.js';
import { renderBigPicture } from './big-picture.js';
import { pictureContainer } from './upload.js';
import { pictureTemplate } from './upload.js';

const renderRandomPictureCards = (loadedPicture) => {
  clearPictureContainer();
  const picturesNew = [];
  const generatePhotoId = createRandomIdFromRangeGenerator(0, 24);
  for(let i=0; i < 10; i++) {
    picturesNew.push(loadedPicture[generatePhotoId()]);
  }
  const pictureListFragmentFiltered = document.createDocumentFragment();
  picturesNew.forEach(({url, likes, comments}) =>{
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragmentFiltered.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureListFragmentFiltered);
  renderBigPicture(picturesNew);
};

const renderDiscussedPictureCards = (loadedPicture) => {
  clearPictureContainer();
  const picturesDiscassed = [...loadedPicture].slice().sort((a, b) => {
    const commentA = a.comments.length;
    const commentB = b.comments.length;
    if(commentA < commentB) {
      return -1;
    }
    if(commentA > commentB) {
      return 1;
    }
    return 0;
  }).reverse();
const pictureListFragmentFiltered = document.createDocumentFragment();
picturesDiscassed.forEach(({url, likes, comments}) =>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragmentFiltered.appendChild(pictureElement);
});
pictureContainer.appendChild(pictureListFragmentFiltered);
renderBigPicture(picturesDiscassed);
};

export{renderRandomPictureCards, renderDiscussedPictureCards};

