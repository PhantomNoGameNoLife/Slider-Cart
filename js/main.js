let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let slider = document.querySelector('.slider');
let listHTML = document.querySelector('.slider .list');

function nextItem() {
    showSlider('next');
}

function prevItem() {
    showSlider('prev');
}

let unAcceppClick;
function showSlider(type) {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    slider.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.slider .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        slider.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        slider.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}

seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        backButton.style.pointerEvents = 'auto';
        slider.classList.remove('next', 'prev');
        slider.classList.add('showDetail');
    }
});

function goBack() {
    backButton.style.pointerEvents = 'none';
    slider.classList.remove('showDetail');
}