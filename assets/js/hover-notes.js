const hovertags = document.querySelectorAll('.hovertag');
const notaTags = document.querySelectorAll('.nota-tags');
const tagsPostsContainer = document.querySelector('.tags-posts');

// Store all original posts in a Map for reconstruction
const originalPosts = new Map();

// Store all posts initially
notaTags.forEach(notaTag => {
  const tags = notaTag.querySelectorAll('.tags-post');
  tags.forEach(post => {
    const postTag = post.getAttribute('data-tag');
    if (!originalPosts.has(postTag)) {
      originalPosts.set(postTag, []);
    }
    originalPosts.get(postTag).push(post.cloneNode(true));
  });
});

hovertags.forEach(tag => {
  tag.addEventListener('click', () => {
    const selectedTag = tag.getAttribute('data-tag');
    tagsPostsContainer.innerHTML = ''; // Clear the current posts

    // Reconstruct posts based on the selected tag
    if (originalPosts.has(selectedTag)) {
      const postsToDisplay = originalPosts.get(selectedTag);
      postsToDisplay.forEach(post => {
        tagsPostsContainer.appendChild(post);
      });
    }
  });
});