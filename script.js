const input = document.getElementById("new-item");
const list = document.getElementById("todo-list");

let mousemoveListener;
let listItems = 0;

function addNewItem() {
  const newItem = input.value.trim();
  if (!newItem) return;

  const item = document.createElement("div");
  const textSpan = document.createElement("span");
  textSpan.draggable = false;
  const removeButton = document.createElement("button");

  textSpan.textContent = newItem;
  removeButton.textContent = "X";

  removeButton.addEventListener("click", () => {
    list.removeChild(item);
  });

  item.appendChild(textSpan);
  item.appendChild(removeButton);
  item.classList.add("list-card");

  const randomRotationAngle = (Math.random() - 0.5) * 5;
  let scaleValue = 0.8;
  const popupanimation = (item) => {
    item.style.transform = `scale(${scaleValue}) rotate(calc(${randomRotationAngle}deg))`;
    if (scaleValue === 1) {
      cancelAnimationFrame();
    }
    scaleValue = scaleValue === 0.8 ? 1.2 : 1; // Toggle between 0.8 and 1.2
  };

  requestAnimationFrame(popupanimation.bind(this, item));

  list.insertBefore(item, list.firstChild);

  input.value = "";
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNewItem();
  }
});

input.addEventListener("focus", () => {
  input.style.borderColor = "#007bff";
});

input.addEventListener("blur", () => {
  input.style.borderColor = "#ccc";
});
