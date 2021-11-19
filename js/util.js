const ALERT_SHOW_TIME = 5000;
const PADDING = '10px 3px';
const FONT_SIZE = '30px';
const TEXT_ALIGN = 'center';
const BACKGROUND_COLOR = '#32bfc9';
const COLOR = 'red';
const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

const getRandomInteger = (from, to) => {
  if (from >= 0, to > from) {
    const rand = from + Math.random() * (to + 1 - from);
    return Math.floor(rand);
  }
  return false;
};

// Подсмотрено тут https://learn.javascript.ru/task/random-int-min-max

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const renderSuccessMessage = () => {
  const element = document.createElement('section');
  element.append(successMessageTemplate.cloneNode(true));
  document.body.append(element);

  setTimeout(() => {
    element.remove();
  }, ALERT_SHOW_TIME);
};

const renderErrorMessage = () => {
  const element = document.createElement('section');
  element.append(errorMessageTemplate.cloneNode(true));
  document.body.append(element);

  setTimeout(() => {
    element.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = PADDING;
  alertContainer.style.fontSize = FONT_SIZE;
  alertContainer.style.textAlign = TEXT_ALIGN;
  alertContainer.style.backgroundColor = BACKGROUND_COLOR;
  alertContainer.style.color = COLOR;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, isEnterKey, renderErrorMessage, renderSuccessMessage, showAlert, createRandomIdFromRangeGenerator};
