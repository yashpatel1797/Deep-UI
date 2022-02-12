const close = document.getElementsByClassName("btn-close");
let inputValue = document.querySelector("#inputChip");

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
}


function deleteChip(e){
  e.target.parentElement.remove();
}
function addChip(a){
  console.log("hello");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `${a.target.value}
  <span class="material-icons btn-close"> close </span>`
  newDiv.classList.add("chip-content");
  newDiv.classList.add("chip");
  newDiv.lastChild.addEventListener("click", deleteChip);
  let inputContainer = document.querySelector(".inputContainer");
  inputContainer.appendChild(newDiv);
  inputValue.value = "";
}
inputValue.addEventListener("change", addChip);

const draggables = document.querySelectorAll('.draggable')

const container = document.querySelector('.drag-drop')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})
container.addEventListener('dragover', e => {
  e.preventDefault()
  const afterElement = getDragAfterElement(container, e.clientY)
  const draggable = document.querySelector('.dragging')
  if (afterElement == null) {
    container.appendChild(draggable)
  } else {
    container.insertBefore(draggable, afterElement)
  }
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
