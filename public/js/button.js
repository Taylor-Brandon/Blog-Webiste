const formArea = document.querySelector('.form-area');
const addPostBtn = document.querySelector('#add-post');


formArea.style.visibility = 'hidden';
formArea.style.transition = 'all .2s ease-in-out';

addPostBtn.addEventListener('click', () => {
    if (formArea.style.visibility === 'hidden') {
        formArea.style.visibility = 'visible';  
    } else {
        formArea.style.visibility = 'hidden';  
    }
});