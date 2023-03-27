// Top products - slider
$(document).ready(function () {
    $('.re-top-products__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1023.8,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});

let starRating = document.getElementsByClassName("re-tile__rating");
console.log(starRating);
let starCount;

for (let index = 0; index < starRating.length; index++) {
    starCount = starRating[index].textContent;
    starRating[index].textContent = "";

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");
        star.classList.add("re-tile__star");
        star.src = i < starCount ? "assets/icons/star-yellow.svg" : "assets/icons/star-grey.svg";
        star.alt = "Star";
        starRating[index].appendChild(star);
    }
}


// Our Services - Styling alternative services
let services = document.getElementsByClassName("re-service");
let serviceCTA;

for (let index = 0; index < services.length; index++) {
    serviceCTA = services[index].getElementsByClassName("re-btn");
    if (index % 2 == 1) {
        console.log(index);
        services[index].classList.add("re-service--alt");
        serviceCTA[0].classList.add("re-btn--alt");
    }
}

if (services.length > 3 && window.innerWidth > 600) { // to avoid overlapping for services except first row
    for (let index = 3; index < services.length; index++) {
        services[index].style.marginTop = "40px";
    }
}


// Subscribe to newsletter
let mailInputField = document.getElementsByClassName("re-newsletter__email-wrapper");
let mailAddress = document.getElementById("re-email");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let newsletterSubmit = document.getElementsByClassName("re-newsletter__btn");
let newsletterSuccess = document.getElementsByClassName("re-newsletter__success");

mailAddress.addEventListener("input", function () {

    if (mailAddress.value.match(mailFormat)) {
        mailInputField[0].style.border = "none";
        newsletterSubmit[0].removeAttribute("disabled");
        newsletterSubmit[0].style.opacity = "1";
    } else {
        mailInputField[0].style.border = "2px solid red";
    }
});

newsletterSubmit[0].addEventListener("click", function () {
    newsletterSuccess[0].style.display = "block";
});