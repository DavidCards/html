var navlinks = document.getElementById("navlinks");

function showmenu() {
    navlinks.style.right = "0";
}

function hidemenu() {
    navlinks.style.right = "-200px";
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var navlinks = document.getElementById("navlinks");




function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}