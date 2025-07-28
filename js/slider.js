const images = [
  "../media/book.jpg",
  "../media/hospital.jpg",
  "../media/doctor.jpg"
];

let index = 0;

function moveslide(direction) {
  index += direction;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  document.getElementById("sliderimg").src = images[index];
}
