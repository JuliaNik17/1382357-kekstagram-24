import { createLoader } from './server.js';
import { renderBigPicture } from './render-big-picture.js';
import { showAlert } from './util.js';
import { debounce } from './utils/debounce.js';
import { renderDiscussedPictureCards } from './render-discussed-picture-cards.js';
import { renderRandomPictureCards } from './render-random-picture-cards.js';

const RERENDER_DELAY = 500;
const pictureLoadedElement = document.querySelector('.picture-loaded');
const pictureTemplate = document.querySelector('#picture').content;
const imgFiltersFormElement = document.querySelector('.img-filters__form');
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');


const clearPictureContainer = () => {
  pictureLoadedElement.innerHTML = '';
};

const renderPictureContainer = (loadedPicture) => {
  const pictureListFragment = document.createDocumentFragment();

  loadedPicture.forEach(({url, likes, comments}) =>{
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });

  pictureLoadedElement.appendChild(pictureListFragment);
}

const renderPictureCards = (loadedPictures) => {
  clearPictureContainer();
  renderPictureContainer(loadedPictures);
  renderBigPicture(loadedPictures);
};

const renderUserPictures = (loadedPictures) => {

  renderPictureCards(loadedPictures);

  const imgFiltersElement = document.querySelector('.img-filters');
  imgFiltersElement.classList.remove('img-filters--inactive');

  const onPicturesFiltersClick = (evt) => {
    if(evt.target.matches('#filter-random')) {
      filterRandomButton.classList.add('img-filters__button--active');
      filterDiscussedButton.classList.remove('img-filters__button--active');
      filterDefaultButton.classList.remove('img-filters__button--active');
      debounce(renderRandomPictureCards(loadedPictures), RERENDER_DELAY);
    } else if(evt.target.matches('#filter-discussed')) {
      filterDiscussedButton.classList.add('img-filters__button--active');
      filterDefaultButton.classList.remove('img-filters__button--active');
      filterRandomButton.classList.remove('img-filters__button--active');
      debounce(renderDiscussedPictureCards(loadedPictures), RERENDER_DELAY);
    } else {
      filterDefaultButton.classList.add('img-filters__button--active');
      filterDiscussedButton.classList.remove('img-filters__button--active');
      filterRandomButton.classList.remove('img-filters__button--active');
      debounce(renderPictureCards(loadedPictures), RERENDER_DELAY);
    }
  };

  imgFiltersFormElement.addEventListener('click', onPicturesFiltersClick);

};

const getAlert = () => {
  showAlert('Произошла ошибка!');
};

const loadPictures = createLoader(renderUserPictures, getAlert);
loadPictures();

export{clearPictureContainer, renderPictureCards, renderPictureContainer};

