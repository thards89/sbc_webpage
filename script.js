// Get the modal
const modal = document.getElementById("myModal");
const modalTwo = document.getElementById("myModal2");
const modalThree = document.getElementById("myModal3");
const modalFour = document.getElementById("myModal4");


// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const imgTwo = document.getElementById("myImg2");
const imgThree = document.getElementById("myImg3");
const imgFour = document.getElementById("myImg4");

const modalImg = document.getElementById("img01");
const modalImgTwo = document.getElementById("img02");
const modalImgThree = document.getElementById("img03");
const modalImgFour = document.getElementById("img04");

const captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

const captionTextTwo = document.getElementById("caption2");
imgTwo.onclick = function(){
  modalTwo.style.display = "block";
  modalImgTwo.src = this.src;
  captionTextTwo.innerHTML = this.alt;
}

const captionTextThree = document.getElementById("caption3");
imgThree.onclick = function(){
  modalThree.style.display = "block";
  modalImgThree.src = this.src;
  captionTextThree.innerHTML = this.alt;
}

const captionTextFour = document.getElementById("caption4");
imgFour.onclick = function(){
  modalFour.style.display = "block";
  modalImgFour.src = this.src;
  captionTextFour.innerHTML = this.alt;
}

// When the user clicks on modal, close the modal
modal.onclick = function() {
  modal.style.display = "none";
}

modalTwo.onclick = function() {
  modalTwo.style.display = "none";
}

modalThree.onclick = function() {
  modalThree.style.display = "none";
}

modalFour.onclick = function() {
  modalFour.style.display = "none";
}


