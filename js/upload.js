import { createLoader } from "./server.js";
import { renderBigPicture } from "./big-picture.js";
import { showAlert } from "./util.js";

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const renderUserPictures = (loadedPicture) => {
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

const getAlert = () => {
  showAlert('Произошла ошибка!');
}

const loadPictures = createLoader(renderUserPictures, getAlert);
loadPictures();

