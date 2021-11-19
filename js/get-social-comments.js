const COMMENTS_SHOWN = 5;
const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentsTemplate = document.querySelector('.social__comment');
const socialCommentsListFragment = document.createDocumentFragment();
const commentsShownElement = document.querySelector('.comments-shown');
const commentsLoaderElement = document.querySelector('.comments-loader');
const commentsCountElement = document.querySelector('.comments-count');


const getSocialComments = (comments) => {
  socialCommentsContainer.innerHTML = '';
  commentsCountElement.textContent = comments.length;
  commentsShownElement.textContent = COMMENTS_SHOWN;
  comments.forEach((comment) => {
    const commentElement = socialCommentsTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    socialCommentsListFragment.appendChild(commentElement);
  });
  socialCommentsContainer.appendChild(socialCommentsListFragment);
  commentsCountElement.textContent = comments.length;
  if (comments.length > COMMENTS_SHOWN) {
    commentsLoaderElement.classList.remove('hidden');
    commentsShownElement.textContent = COMMENTS_SHOWN;
    const socialCommentElements = document.querySelectorAll('.social__comment');
    for(let i = COMMENTS_SHOWN; i <= socialCommentElements.length - 1; i++) {
      const comment = socialCommentElements[i];
      comment.classList.add('hidden');
    }
  } else if(comments.length <= COMMENTS_SHOWN) {
    commentsLoaderElement.classList.add('hidden');
    commentsShownElement.textContent = comments.length;
  }
};


export {getSocialComments, socialCommentsContainer, commentsLoaderElement, commentsShownElement};
