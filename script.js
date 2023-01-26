// starts with an exhale 
// 6 breathing in 
// inhale 5 seconds
// exhale 5 seconds

// after click text: "Bring awareness to your breath" during breathe out
// breathe in
// breathe out

const circleParent = document.querySelector('.circle');

circleParent.addEventListener('click', (e) => {
    console.log("THIS WORKS")
    modifyText()
})

function modifyText() { // dynamically change .instruction-text 
    const instructionText = document.querySelector('.instruction-text');
    instructionText.classList.add('fadeInOut')
    instructionText.textContent = 'Bring awareness to your breath'

    const repeat = setInterval( funct, 5000 )

    function funct() {

    }

    clearInterval( repeat )
}

modifyCircle()

function modifyCircle() { // dynamically add circle css to make it expand and shrink
    const circleWhite = document.querySelector('.circle__white');
    const circleBlue = document.querySelector('.circle__blue');
    const playImg = document.querySelector('.circle__play');
    const reloadImg = document.querySelector('.circle__reload');

    console.log(circleWhite, circleBlue, playImg, reloadImg)
}

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
