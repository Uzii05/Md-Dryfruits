function toggleGallery() {
  const gallerySection = document.getElementById('gallery');
  gallerySection.style.display = gallerySection.style.display === 'none' ? 'block' : 'none';
}

function toggleAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
}

let currentImageIndex = 0;
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpg",
  "images/pic8.jpg",
  "images/pic9.jpg",
  "images/pic10.jpg",
  "images/pic11.jpg",
  "images/pic12.jpg",
  "images/pic13.jpg",
  "images/pic14.jpg",
];

function openModal(index) {
  currentImageIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
}