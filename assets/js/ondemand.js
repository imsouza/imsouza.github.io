var isLoading = false; // Flag to prevent multiple simultaneous requests
var postContainer = $('#post-container');
var loadMoreButton = $('#load-more-button');
var page = 1; // Initialize the page number

function loadMorePosts() {
  if (isLoading) return;

  isLoading = true;

  $.ajax({
    url: '/posts/', // Adjust the path accordingly
    dataType: 'html',
    success: function(data) {
      postContainer.append(data);
      page++;
      isLoading = false;

      // Hide the button if there are no more posts to load
      if (data.trim() === '') {
        loadMoreButton.hide();
      }
    },
    error: function() {
      isLoading = false;
    }
  });
}

// Load initial posts when the page loads
loadMorePosts();

// Load more posts when the button is clicked
loadMoreButton.click(function() {
  loadMorePosts();
});
