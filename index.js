// main.js
function filterImages(category) {
    const images = document.querySelectorAll('.image');
  
    images.forEach(image => {
      if (category === 'all') {
        image.classList.remove('hidden');
      } else {
        image.classList.toggle('hidden', !image.classList.contains(category));
      }
    });
  }
  