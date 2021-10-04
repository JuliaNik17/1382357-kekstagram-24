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

// Задание 4.9

const DESCRIPTIONS = [
  'Пустой пляж',
  'Указатель на пляж',
  'Камни, море, небо',
  'Фотограф на пляже',
  'Рисовые человечки в супе',
  'Дорогая машина',
  'Дисерт из клубники',
  'Натюрморт',
  'Самолет и люди на пляже',
  'Умное хранение обуви',
  'За забором пляж',
  'Белая ауди',
  'Пример сервировки блюд в нашем кафе',
  'Котосуши',
  'Когда тапки - космос',
  'Небо, горы, самолет',
  'Певцы в хоре',
  'Ретро-авто',
  'Умные ночные тапки',
  'Вечерний двор с пальмами',
  'Салат из курицы с лаймом',
  'Закат на море',
  'Местный житель',
  'На концерте',
  'Автомобиль и гиппопотам',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Анна',
  'Эльза',
  'Кристоф',
  'Леопольд',
  'Чебурашка',
  'София',
  'Гена',
  'Галя',
  'Лариса',
  'Анфиса',
  'Макар',
  'Захар',
  'Аристарх',
  'Иннокентий',
  'Антонина',
  'Ева',
  'Олаф',
  'Фёдор',
  'Иван',
  'Джеймс',
  'Маргарита',
  'Михаил',
  'Лев',
  'Лера',
  'Женя',
];

const getPhotoPost = () => {
  const PHOTO_POSTS = [];

  for(let i = 0; i < 25; i++) {
    const COMMENTS = [];
    for (let j = 0; j < 3; j++) {
      let commentPost = {
        id: ((i+1)*100+j),
        avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
        message: MESSAGES[j] + ' ' + MESSAGES[(j+2)],
        name: NAMES[getRandomInteger(0, 24)],
      };
      COMMENTS.push(commentPost);
    }

    let fhotoPost = {
      id: i+1,
      url: 'photos/' + (i+1) + '.jpg',
      description: DESCRIPTIONS[i],
      likes: getRandomInteger(15, 200),
      comments: COMMENTS,
    };
    PHOTO_POSTS.push(fhotoPost);
  }

  return PHOTO_POSTS
}

console.log (getPhotoPost());
