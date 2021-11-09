const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentsTemplate = document.querySelector('.social__comment');
const socialCommentsListFragment = document.createDocumentFragment();
const commentsShown = document.querySelector('.comments-shown');
const commentsLoaderButton = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.comments-count');


const getSocialComments = function (comments) {
  socialCommentsContainer.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = socialCommentsTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    socialCommentsListFragment.appendChild(commentElement);
  });
  socialCommentsContainer.appendChild(socialCommentsListFragment);
  commentsCounter.textContent = comments.length;
  if (comments.length > 5) {
    commentsShown.textContent = 5;
    const listOfComments = document.querySelectorAll('.social__comment');
    for(let i = 5; i <= listOfComments.length - 1; i++) {
      const comment = listOfComments[i];
      comment.classList.add('hidden');
    }
    commentsLoaderButton.addEventListener('click', () => {
      const counter = parseInt(commentsShown.textContent);
      for(let i = counter; (i < counter + 5) && (i < listOfComments.length); i++) {
        const comment = listOfComments[i];
        comment.classList.remove('hidden');
        commentsShown.textContent = (i + 1);
        if(i === listOfComments.length - 1) {
          commentsLoaderButton.classList.add('hidden');
        }
      }
    });
  } else if(comments.length <= 5) {
    commentsLoaderButton.classList.add('hidden');
    commentsShown.textContent = comments.length;
  }
};

export {getSocialComments};
