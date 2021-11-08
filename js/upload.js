import { createLoader } from "./server.js";
import { renderBigPicture } from "./big-picture.js";
import { showAlert } from "./util.js";
import { debounce } from "./utils/debounce.js";
import { renderDiscussedPictureCards } from "./filters.js";
import { renderRandomPictureCards } from "./filters.js";

const pictureContainer = document.querySelector('.picture-loaded');
const pictureTemplate = document.querySelector('#picture').content;
const filtersForm = document.querySelector('.img-filters__form');
const RERENDER_DELAY = 500;
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');


const clearPictureContainer = () => {
  pictureContainer.innerHTML = '';
}

const renderPictureCards = (loadedPicture) => {
  clearPictureContainer();
  const pictureListFragment = document.createDocumentFragment();

  loadedPicture.forEach(({url, likes, comments}) =>{
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.appendChild(pictureElement);
  });

  pictureContainer.appendChild(pictureListFragment);

  renderBigPicture(loadedPicture);
};

const renderUserPictures = (loadedPicture) => {

  renderPictureCards(loadedPicture);

  const imgFilters = document.querySelector('.img-filters');
  imgFilters.classList.remove('img-filters--inactive');

  const getPicturesFilter = (evt) => {
    if(evt.target.matches('#filter-random')) {
      filterRandomButton.classList.add('img-filters__button--active');
      filterDiscussedButton.classList.remove('img-filters__button--active');
      filterDefaultButton.classList.remove('img-filters__button--active');
      debounce(renderRandomPictureCards(loadedPicture), RERENDER_DELAY);
    } else if(evt.target.matches('#filter-discussed')) {
      filterDiscussedButton.classList.add('img-filters__button--active');
      filterDefaultButton.classList.remove('img-filters__button--active');
      filterRandomButton.classList.remove('img-filters__button--active');
      debounce(renderDiscussedPictureCards(loadedPicture), RERENDER_DELAY);
    } else {
      filterDefaultButton.classList.add('img-filters__button--active');
      filterDiscussedButton.classList.remove('img-filters__button--active');
      filterRandomButton.classList.remove('img-filters__button--active');
      debounce(renderPictureCards(loadedPicture), RERENDER_DELAY)
    }
  };

    filtersForm.addEventListener('click', getPicturesFilter);

};

const getAlert = () => {
  showAlert('Произошла ошибка!');
}

const loadPictures = createLoader(renderUserPictures, getAlert);
loadPictures();

export{clearPictureContainer, pictureContainer, pictureTemplate, renderPictureCards};

