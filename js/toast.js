const toastButton = document.querySelector("#toast-demo-btn");
const toastElement = document.querySelector("#toast-demo");
const toastCloseButton = document.querySelector(".toast-close-btn");
const toastUndoButton = document.querySelector(".toast-undo-btn");

let timer;
toastButton.addEventListener("click", ()=> {
    toastElement.style.display = "block";
    timer = setTimeout(()=> {
        toastElement.style.display = "none";
    },3000);
});

toastCloseButton.addEventListener("click", () => {
    clearTimeout(timer);
    toastElement.style.display="none";
})

toastUndoButton.addEventListener("click", () => {
    clearTimeout(timer);
    toastElement.style.display="none";
})