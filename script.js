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
    ]
    
    let cycle = 1;
    let timer = setInterval(onTick, 5000);
    
    function onTick() {
        instructionText.classList.toggle('fadeInOut');
        instructionText.classList.toggle('fadeInOutTwo');

        if( cycle % 2 == 0) {
            instructionText.textContent = sentences[1];
        } else if( cycle % 2 !== 0) {
            instructionText.textContent = sentences[0];
        }
        // const sentence = sentences[cycle];
        cycle++

        if(cycle === 13) {
            instructionText.classList.remove('fadeInOut');
            instructionText.classList.remove('fadeInOutTwo');
            instructionText.classList.add('fadeOut');
            complete();
            return
        }
    }
    
    function complete() {
        clearInterval(timer);
        timer = null;
    }
    
    setTimeout(()=> {
        instructionText.textContent = "1-minute breathing exercise";
        clickAgain = true;
    },65000)
}

function modifyCircle() { // dynamically add circle css to make it expand and shrink
    const circleWhite = document.querySelector('.circle__white');
    const playImg = document.querySelector('.circle__play');
    const reloadImg = document.querySelector('.circle__reload');

    playImg.style.display = "none";
    reloadImg.style.display = "none";

    circleWhite.classList.add('')
    let cycle = 1;
    let timer = setInterval(onTick, 5000);
    
    function onTick() {


        if( cycle % 2 == 0) {

        } else if( cycle % 2 !== 0) {

        }
        // const sentence = sentences[cycle];
        cycle++

        if(cycle === 13) {

            complete();
            return
        }
    }
    
    function complete() {
        clearInterval(timer);
        timer = null;
    }
    
    setTimeout(()=> {
        reloadImg.style.display = "flex"
    },65000)

    // console.log(circleWhite, playImg, reloadImg);
}

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
