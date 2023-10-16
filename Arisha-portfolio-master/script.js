const projectCards = document.querySelectorAll('.project-card');

let currentIndex = 0;

// show slide
function showSlide(index){
    projectCards.forEach((card) => {
        card.style.display = 'none';
    });
    
    projectCards[index].style.display = 'block';
}

// next slide
function nextSlide(){
    currentIndex = (currentIndex + 1) % projectCards.length;
    showSlide(currentIndex);
}

// prev slide 
function prevSlide(){
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    showSlide(currentIndex);
}

// show the first slide initially
showSlide(currentIndex);

// set up event listeners on buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);