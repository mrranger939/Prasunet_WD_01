const navbar = document.querySelector('.navbar');

function calculateGradient(scrollPosition) {
    const normalizedScroll = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 150;
    console.log(normalizedScroll)
    const red = Math.round(normalizedScroll);
    const green = Math.round(150 - normalizedScroll);
    const blue = Math.round(255 - normalizedScroll);

    const gradient = `linear-gradient(135deg, rgb(${red}, 49, 139), rgb(28, ${green}, 18), rgb(52, 15, ${blue}), rgb(${red}, ${green}, ${blue}))`;
    
    return gradient;
}

function changeNavbarGradient() {
    const gradient = calculateGradient(window.scrollY);
    navbar.style.backgroundImage = gradient;
}


window.addEventListener('load', () => {
    navbar.style.backgroundImage = calculateGradient(0); 
    
});


window.addEventListener('scroll', () => {
    changeNavbarGradient();
});
