const commentFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#comment-description').value.trim();
  const postId = parseInt(window.location.pathname.split('/').pop(), 10); 
  const userId = parseInt(document.querySelector('#userId').textContent, 10); 

  console.log('Comment Description:', description);
  console.log('Post ID:', postId);
  console.log('User ID:', userId);

  if (description) {
      try {
          const response = await fetch(`/api/users/post/${postId}`, {
              method: 'POST',
              body: JSON.stringify({ description, postId, userId }), 
              headers: { 'Content-Type': 'application/json' }
          });

          if (response.ok) {
              alert('Successfully added comment!');
              document.location.replace(`/post/${postId}`);
          } else {
              alert('Failed to add comment.');
          }
      } catch (error) {
          console.error('Error submitting comment:', error);
          alert('Failed to add comment due to a network error.');
      }
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);

