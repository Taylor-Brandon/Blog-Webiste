const handleEditPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-update').value.trim();
    const description = document.querySelector('#update-description').value.trim();
    const postId = window.location.pathname.split('/').pop();

    if (title && description) {
        try {
            const response = await fetch(`/api/users/editPost/${postId}`, {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                alert('Updated Post!');
                document.location.replace('/dashboard');
            } else {
                const errorMessage = await response.json();
                alert(`Failed to update post: ${errorMessage.message}`);
            }
        } catch (err) {
            console.error(err);
            alert('Failed to update post due to network error');
        }
    }
};

document
  .querySelector('#editPost-form')
  .addEventListener('submit', handleEditPost);