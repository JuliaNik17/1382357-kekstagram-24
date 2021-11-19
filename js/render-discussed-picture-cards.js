import {clearPictureContainer} from './render-user-pictures.js';
import { renderBigPicture } from './render-big-picture.js';
import { renderPictureContainer } from './render-user-pictures.js';

const renderDiscussedPictureCards = (loadedPictures) => {
  clearPictureContainer();
  const discassedPictures = [...loadedPictures].slice().sort((a, b) => {
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
  renderPictureContainer(discassedPictures);
  renderBigPicture(discassedPictures);
};

export{renderDiscussedPictureCards};
