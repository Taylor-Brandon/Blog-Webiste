const handleDeleteBtn = async (event) => {
    event.preventDefault();

    if (event.target.classList.contains('delete-btn')) {
        const postId = event.target.getAttribute('data-id');
        
        if (postId) {
            try {
                const response = await fetch(`/api/users/deletePost/${postId}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    alert('Deleted Post!');
                    document.location.replace('/dashboard');
                } else {
                    alert('Failed to delete post.');
                }
            } catch (err) {
                console.error('Error deleting post:', err);
              alert('Failed to delete post due to a network error.');
            }
        }
    }

    
};

document.querySelector('.delete-btn').addEventListener('click', handleDeleteBtn);