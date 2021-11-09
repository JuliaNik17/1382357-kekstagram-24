const uploadPopup = document.querySelector('.img-upload__overlay');
const imgUpload = uploadPopup.querySelector('img');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
let filterType;

imgUpload.style.filter = '';

const createSlider = () => {
  imgUpload.style.filter = '';
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    valueElement.value = unencoded[handle];
    if (filterType === 'invert') {
      imgUpload.style.filter = filterType + '(' + valueElement.value + '%' + ')';
    } else if (filterType === 'blur') {
      imgUpload.style.filter = filterType + '(' + valueElement.value + 'px' + ')';
    } else if(filterType === 'grayscale' || filterType === 'sepia' || filterType === 'brightness') {
      imgUpload.style.filter = filterType + '(' + valueElement.value + ')';
    }
  });
};

const removeSlider = () => {
  sliderElement.noUiSlider.destroy();
  imgUpload.style.removeProperty('filter');
  imgUpload.classList.add('effects__preview--none');
  imgUpload.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--chrome', 'effects__preview--heat');
  sliderElement.classList.add('hidden');
  filterType = null;
};

function onFilterChange (evt) {
  if (evt.target.matches('input[type="radio"]')) {
    if (evt.target.matches('#effect-chrome')) {
      sliderElement.classList.remove('hidden');
      imgUpload.classList.add('effects__preview--chrome');
      imgUpload.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none');
      filterType = 'grayscale';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (evt.target.matches('#effect-sepia')) {
      sliderElement.classList.remove('hidden');
      imgUpload.classList.add('effects__preview--sepia');
      imgUpload.classList.remove('effects__preview--chrome', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none');
      filterType = 'sepia';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else if (evt.target.matches('#effect-marvin')) {
      sliderElement.classList.remove('hidden');
      imgUpload.classList.add('effects__preview--marvin');
      imgUpload.classList.remove('effects__preview--sepia', 'effects__preview--chrome', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none');
      filterType = 'invert';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    } else if (evt.target.matches('#effect-phobos')) {
      sliderElement.classList.remove('hidden');
      imgUpload.classList.add('effects__preview--phobos');
      imgUpload.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--chrome', 'effects__preview--heat', 'effects__preview--none');
      filterType = 'blur';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else if (evt.target.matches('#effect-heat')) {
      sliderElement.classList.remove('hidden');
      imgUpload.classList.add('effects__preview--heat');
      imgUpload.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--chrome', 'effects__preview--none');
      filterType = 'brightness';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else {
      removeSlider();
    }
  }
}

effectsList.addEventListener('change', onFilterChange);

export {createSlider, removeSlider, imgUpload};
