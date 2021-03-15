const images = document.getElementById('images');
const viewWork = document.getElementById('view-work');

viewWork.addEventListener('click', (e) => {
  e.preventDefault();

  images.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
  });
});
