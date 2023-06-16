let card = document.getElementById("card");
let Modal = document.getElementById("modal");
closeModal = document.querySelector(".close-modal"); 

card.addEventListener('click',function() {
    
    modal.style.display ="block";
})
closeModal.addEventListener("click",function() {
    modal.style.display ="none";
})