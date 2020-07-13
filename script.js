let cardContainer = document.getElementById("cardContainer");

let destination = document.getElementById("destination");
let locationInfo = document.getElementById("location");
let photo = document.getElementById("photo");
let description = document.getElementById("description");

destination.placeholder = "Enter the name of the destination";
locationInfo.placeholder = "Where is it located?";
photo.placeholder = "Enter an image url of the place";

function getInputs(event) {
  let formInputs = [destination, locationInfo, photo, description];
  let formInfo = [];
  formInputs.forEach((input) => {
    formInfo.push(input.value);
  });

  return formInfo;
}

function createCard(formInfo) {
  let card = document.createElement("div");
  card.setAttribute("class", "card p-2");
  card.setAttribute("style", "width:15rem");
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    formInfo[2] === ""
      ? `https://source.unsplash.com/featured/200x150/?travel,${formInfo[0]}`
      : formInfo[2]
  );
  let body = document.createElement("div");
  body.setAttribute("class", "card-body");
  let dest = document.createElement("h3");
  dest.setAttribute("class", "card-title");
  let local = document.createElement("p");

  let desc = document.createElement("p");
  desc.setAttribute("class", "card-text");

  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn btn-warning");
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", (event) => {
    let cardBody = event.target.parentNode.parentNode;

    let newDest = prompt("Enter a new destination name");
    if (newDest.length > 1) {
      cardBody.firstChild.innerText = newDest;
    }
    let newLocal = prompt("Enter a new location");
    if (newLocal.length > 1) {
      cardBody.getElementsByTagName("p")[0].innerText = newLocal;
    }
    let newImage = prompt("Enter a new photo url");
    if (newImage.length > 1) {
      cardBody.parentNode
        .getElementsByTagName("img")[0]
        .setAttribute("src", `${newImage}`);
    } else {
      cardBody.parentNode
        .getElementsByTagName("img")[0]
        .setAttribute(
          "src",
          `https://source.unsplash.com/featured/200x150/?travel,${newDest}`
        );
    }
  });

  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "btn btn-danger");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.parentNode.remove();
  });

  let buttons = document.createElement("div");
  buttons.setAttribute("class", "container.fluid justify-content-around");

  buttons.append(editBtn, removeBtn);
  dest.textContent = formInfo[0];
  local.textContent = formInfo[1];
  desc.textContent = formInfo[3];
  //photo

  body.append(dest, local, desc, buttons);
  card.append(image, body);

  return card;
}
let submitBtn = document.getElementById("button");
let form = document.getElementById("form");

let cardSectionTitle = document.getElementById("cardSectionTitle");

form.addEventListener("submit", (e) => {
  cardContainer.append(createCard(getInputs()));
  e.preventDefault();
  cardSectionTitle.innerText = "My Wishlist";
  form.reset();
});

function editCard(card) {}
