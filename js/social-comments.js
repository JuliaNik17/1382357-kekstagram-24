const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentsTemplate = document.querySelector('.social__comment');
const socialCommentsListFragment = document.createDocumentFragment();
const commentsShown = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.comments-count');


const getSocialComments = function (comments) {
  socialCommentsContainer.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = socialCommentsTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    if (comments.length > 5) {
      for (let i = 6; i<= comments.length; i++){
        const listOfComments = document.querySelectorAll('.social__comment');
        const item = listOfComments[i];
        item.classList.add('hidden');
      }
    }
    socialCommentsListFragment.appendChild(commentElement);
  });
  socialCommentsContainer.appendChild(socialCommentsListFragment);
  commentsCounter.textContent = comments.length;
  console.log(comments.length);

};

// const showSocialComments = function () {
//   const listOfComments = document.querySelectorAll('.social__comment');
//   if (listOfComments.length >= 5) {
//     for (let i = 6; i<= listOfComments.length; i + 4) {
//       listOfComments[i].classList.add('hidden');
//     }
//   }
// };

export {getSocialComments};
