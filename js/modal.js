const modalButton = document.querySelector("#modal-demo-btn");
const modalElement = document.querySelector("#modal-demo");
const modalCloseButton = document.querySelector(".modal-close-btn");
const modalCancelButton = document.querySelector(".modal-cancel-btn");
modalButton.addEventListener("click", () => {
    modalElement.style.display = "flex";
    modalElement.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
});
modalCloseButton.addEventListener("click", ()=> {
    modalElement.classList.remove('modal-active');
    modalElement.style.display = "none";
    document.body.style.overflow = 'visible';
    
});
modalCancelButton.addEventListener("click", ()=> {
    modalElement.classList.remove('modal-active');
    modalElement.style.display = "none";
    document.body.style.overflow = 'visible';
    
});