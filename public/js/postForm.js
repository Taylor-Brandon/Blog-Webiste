const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const description = document.querySelector('#description-input').value.trim();
    const userId = parseInt(document.querySelector('#user-id').textContent, 10); 

    console.log('title', title);
    console.log('description', description);
    console.log('userId', userId);

    if (title && description) {
        try {
            const response = await fetch('/api/users/postForm', {
                method: 'POST',
                body: JSON.stringify({ title, description, userId }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                alert('Post Added!');
                document.location.replace('/dashboard');
            } else {
                alert('Failed to add post!');
            }
        } catch (err) {
            console.error(err);
            alert('Failed to add post due to network error');
        }
    }
};

document
  .querySelector('#post-form')
  .addEventListener('submit', postFormHandler);