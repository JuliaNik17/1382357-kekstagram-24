import {imgElement} from './effect-level-slider-element.js';
import { STEP } from './on-scale-control-smaller-element-click.js';

const MAX_SCALE_VALUE = 100;
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');

const onScaleControlBiggerElementClick = () => {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue < MAX_SCALE_VALUE) {
    const newScaleControlValue = scaleControlValue + STEP;
    document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
    const scaleValue = newScaleControlValue/100;
    imgElement.style.transform = 'scale(' + scaleValue + ')';
  }
};

scaleControlBiggerElement.addEventListener('click', onScaleControlBiggerElementClick);
