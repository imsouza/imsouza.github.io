var images = [];

function getImagesInFolder(folderPath) {
  $.ajax({
    url: folderPath,
    success: function(data) {
      $(data).find("a:contains('.png'), a:contains('.jpg'), a:contains('.jpeg')").each(function() {
        var imagePath = folderPath + $(this).attr("href");
        images.push(imagePath);
      });
    }
  });
}

function loadImages() {
  $(images).each(function() {
    var image = $("<img />").attr("src", this);
    $("body").append(image); // Change "body" to the appropriate container where you want to display the images
  });
}

// Replace '/path/to/assets/' with the actual path to your 'assets' folder
getImagesInFolder('/path/to/assets/');

$(document).ready(function() {
  loadImages();
});