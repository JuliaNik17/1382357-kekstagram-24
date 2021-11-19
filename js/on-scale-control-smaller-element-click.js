import {imgElement} from './effect-level-slider-element.js';

const STEP = 25;
const MIN_SCALE_VALUE = 25;
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');

const onScaleControlSmallerElementClick = () => {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue > MIN_SCALE_VALUE) {
    const newScaleControlValue = scaleControlValue - STEP;
    document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
    const scaleValue = newScaleControlValue/100;
    imgElement.style.transform = 'scale(' + scaleValue + ')';
  }
};

scaleControlSmallerElement.addEventListener('click', onScaleControlSmallerElementClick);

export {STEP};
