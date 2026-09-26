function showTours() {
    document.getElementById("tours-section").scrollIntoView({
        behavior: "smooth"
    });
}

function showMobile() {
    document.getElementById("mobile-section").scrollIntoView({
        behavior: "smooth"
    });
}
let selectedRating = 0;

function setRating(rating) {

    selectedRating = rating;

    const stars = document.querySelectorAll(".rating-stars button");

    stars.forEach((star, index) => {

        if (index < rating) {
            star.style.color = "#ffd84d";
            star.style.textShadow = "0 0 15px rgba(255,216,77,0.5)";
        } else {
            star.style.color = "#555";
            star.style.textShadow = "none";
        }

    });

    document.getElementById("rating-text").innerText =
        rating + " / 5 — Thank you for rating us!";
}
