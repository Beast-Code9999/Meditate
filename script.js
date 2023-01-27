// starts with an exhale 
// 6 breathing in 
// inhale 5 seconds
// exhale 5 seconds

// after click text: "Bring awareness to your breath" during breathe out
// breathe in
// breathe out

const circleParent = document.querySelector('.circle');
let clickAgain = true;

circleParent.addEventListener('click', (e) => {
    console.log("THIS WORKS");
    if( clickAgain == true ) {
        modifyText();
        modifyCircle();
    }
    clickAgain = false
})

function modifyText() { // dynamically change .instruction-text 
    const instructionText = document.querySelector('.instruction-text');
    instructionText.classList.remove('fadeOut');
    instructionText.classList.add('fadeInOut');
    instructionText.textContent = 'Bring awareness to your breath';

    const sentences = [
        "Breathe in", 
        'Breathe out',
        "Breathe in", 
        'Breathe out',
        "Breathe in", 
        'Breathe out',
        "Breathe in", 
        'Breathe out',
        "Breathe in", 
        'Breathe out',
        "Breathe in", 
        'Breathe out',
    ]
    
    let index = 0;
    let timer = setInterval(onTick, 5000);
    
    
    function onTick() {
        // instructionText.classList.remove('fadeInOut');
        // instructionText.classList.add('fadeInOut');

        instructionText.classList.toggle('fadeInOut');
        instructionText.classList.toggle('fadeInOutTwo');

        const sentence = sentences[index];
        instructionText.textContent = sentence;
        index++

        if(index === sentences.length) {
            instructionText.classList.remove('fadeInOut');
            instructionText.classList.remove('fadeInOutTwo');
            instructionText.classList.add('fadeOut');
            complete();
            return
        }
    }
    
    function complete() {
        clearInterval(timer);
        clickAgain = true;
        timer = null;
    }
}

modifyCircle()

function modifyCircle() { // dynamically add circle css to make it expand and shrink
    const circleWhite = document.querySelector('.circle__white');
    // const circleBlue = document.querySelector('.circle__blue');
    const playImg = document.querySelector('.circle__play');
    const reloadImg = document.querySelector('.circle__reload');

    console.log(circleWhite, playImg, reloadImg);
}

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
