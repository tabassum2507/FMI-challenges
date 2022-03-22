const ratings = document.querySelectorAll(".card__rating");
const finalRating = document.querySelector('.card__thankyou--rating');
const cardRating = document.getElementById('card')
const cardthankyou = document.getElementById('card__thankyou');
const button = document.getElementById('buttonSubmit');

let score = "";

function submitRating() {
    this.classList.add('clicked');
    score = this.textContent;
}

function togglePage() {
    finalRating.textContent = `${score}`;
    cardRating.hidden = true;
    cardthankyou.hidden = false;
}

ratings.forEach((rating)=>{
    rating.addEventListener('click', submitRating)})

// Event Listener for submit buttons
button.addEventListener('click', togglePage);

