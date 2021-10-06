const getRandomInteger = function(from, to) {
  if (from >= 0, to > from) {
    let rand = from + Math.random() * (to + 1 - from);
    return Math.floor(rand);
  }
    console.log ('Ошибка: диапазон может быть только положительный, включая ноль.');
    return false;
}

// Подсмотрено тут https://learn.javascript.ru/task/random-int-min-max


const MAX_LENGHT = 140;

const getMaxLenghtOfComment = function(comment) {
  if (comment <= MAX_LENGHT) {
    return true;
  }
  return false;
}

getMaxLenghtOfComment ();

export {getRandomInteger, getMaxLenghtOfComment, MAX_LENGHT};
