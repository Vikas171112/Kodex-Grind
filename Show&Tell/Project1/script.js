const itemPool = document.getElementById("itemPool");
const tierBoxes = document.querySelectorAll(".tier-items");
const addURLBtn = document.getElementById("addURLBtn");
const imageURLInput = document.getElementById("imageURL");
const imageUpload = document.getElementById("imageUpload");

let draggedItem = null; //This will be helpful in keeping track of the dragged item
//Creating a div to store image
function createImageItem(src) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.setAttribute("draggable", "true");

  const img = document.createElement("img");
  img.src = src;

  div.appendChild(img);

  div.addEventListener("dragstart", () => {
    draggedItem = div;
  });

  itemPool.appendChild(div);
}
//Add image Url onClcik of addd image url and afer clicking the url input is empty
addURLBtn.addEventListener("click", () => {
  const url = imageURLInput.value.trim();
  if (url !== "") {
    createImageItem(url);
    imageURLInput.value = "";
  }
});
//This function is for selecting the image from our computer
imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      createImageItem(e.target.result);
    };

    reader.readAsDataURL(file);
  }
});
//In the area we want to enable dropping of the elememt we have to make the even dropover
tierBoxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  //If the image is dropped inside dragover area append the child to that particular tier

  box.addEventListener("drop", () => {
    if (draggedItem) {
      box.appendChild(draggedItem);
    }
  });
});

// itemPool.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// itemPool.addEventListener("drop", () => {
//   if (draggedItem) {
//     itemPool.appendChild(draggedItem);
//   }
// });
