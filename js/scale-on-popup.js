import {imgUpload} from "./slider.js";

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const step = 25;

scaleControlSmaller.addEventListener('click', function() {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue > 25) {
    const newScaleControlValue = scaleControlValue - step;
    document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
    let scaleValue = newScaleControlValue/100;
    imgUpload.style.transform = 'scale(' + scaleValue + ')';
  }
});

scaleControlBigger.addEventListener('click', function() {
  const scaleControlValue = parseInt(document.querySelector('.scale__control--value').value);
  if(scaleControlValue < 100) {
    const newScaleControlValue = scaleControlValue + step;
  document.querySelector('.scale__control--value').value = newScaleControlValue + '%';
  let scaleValue = newScaleControlValue/100;
  imgUpload.style.transform = 'scale(' + scaleValue + ')';
  }
});
