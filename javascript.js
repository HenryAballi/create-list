let input = document.getElementById("input");
console.log(input);
let ul = document.getElementById("ul");
console.log(ul);
let firstButton = document.getElementById("firstButton");
console.log(firstButton);
let secondButton = document.getElementById("secondButton");
console.log(secondButton);
let li = document.getElementById("li");
console.log(li);


//secondButton
secondButton.addEventListener("click", () => {
  console.log("hello...");
  ul.removeChild(li);
});

//firstButton
const createList = () => {
  console.log("Let's go...");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(addButton(li));
  ul.appendChild(li);
  input.value = "";
}

const addButton = (li) => {
  let btn = document.createElement("button");
  btn.innerHTML = "remove";
  btn.addEventListener("click", () => {
    ul.removeChild(li);
  })
  return btn;
}

const addListAfterClick = () => {
  if(input.value.length > 0) {
    console.log("Yess..");
  createList();
  }
}
firstButton.addEventListener("click", addListAfterClick);

//Keypress...
const addListAfterKeyPress = (event) => {
  if(input.value.length > 0 && event.keyCode === 13) {
    console.log("Yess..");
  createList();
  }
}

input.addEventListener("keypress", addListAfterKeyPress)