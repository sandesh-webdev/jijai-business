/* =========================
   NAVIGATION
========================= */

function showTours() {

    document
        .getElementById("tours-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function showMobile() {

    document
        .getElementById("mobile-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function goToLocation() {

    document
        .getElementById("location")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CUSTOMER RATING
========================= */

let selectedRating = 0;


function setRating(rating) {

    selectedRating = rating;

    const stars =
        document.querySelectorAll(".big-stars button");


    stars.forEach((star, index) => {

        if (index < rating) {

            star.style.color = "#ffd84d";

            star.style.textShadow =
                "0 0 20px rgba(255,216,77,0.5)";

        } else {

            star.style.color = "#444";

            star.style.textShadow = "none";

        }

    });


    document.getElementById("ratingNumber").innerHTML =
        rating + "<span>/5</span>";


    let message = "";


    if (rating === 5) {

        message = "Excellent! ⭐ Thank you!";

    } else if (rating === 4) {

        message = "Great experience! 👍";

    } else if (rating === 3) {

        message = "Good experience.";

    } else if (rating === 2) {

        message = "Thanks for your feedback.";

    } else {

        message = "We'll try to improve.";

    }


    document.getElementById("ratingMessage")
        .innerText = message;

}


/* =========================
   SEND REVIEW ON WHATSAPP
========================= */

function sendReview() {

    const name =
        document.getElementById("customer-name")
            .value.trim();


    const review =
        document.getElementById("customer-review")
            .value.trim();


    if (selectedRating === 0) {

        alert("Please select a rating.");

        return;
    }


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (review === "") {

        alert("Please write your feedback.");

        return;
    }


    const message =
        "Hello Jijai Enterprises,%0A%0A" +
        "⭐ Rating: " +
        selectedRating +
        "/5%0A" +
        "👤 Name: " +
        encodeURIComponent(name) +
        "%0A" +
        "💬 Review: " +
        encodeURIComponent(review);


    window.open(
        "https://wa.me/9199929599?text=" +
        message,
        "_blank"
    );

}
