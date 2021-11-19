import {createRandomIdFromRangeGenerator} from './util.js';
import {clearPictureContainer} from './render-user-pictures.js';
import { renderBigPicture } from './render-big-picture.js';
import { renderPictureContainer } from './render-user-pictures.js';

const renderRandomPictureCards = (loadedPictures) => {
  clearPictureContainer();
  const newPictures = [];
  const generatePhotoId = createRandomIdFromRangeGenerator(0, 24);
  for(let i=0; i < 10; i++) {
    newPictures.push(loadedPictures[generatePhotoId()]);
  }
  renderPictureContainer(newPictures);
  renderBigPicture(newPictures);
};

export{renderRandomPictureCards};

