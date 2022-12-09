// -------- OPEN AND CLOSE SEARCH POP-UP WINDOW ------------ //

//Stap 1: JS koppelen aan CSS/HTML //
let SearchButton = document.querySelector ('#search-button') //(SELECT)//
let ContainerSearchPopUp = document.querySelector ('.container-search-pop-up')
let BlurryBackground = document.querySelector ('.pop-up-blurry-background')

//Stap 2: event selecteren (IF this...) //
SearchButton.addEventListener ('click', showSearch) //(EVENT)//
BlurryBackground.addEventListener ('click', close)

//Stap 3: functie toewijzen (...THEN that) //
function showSearch() {
    ContainerSearchPopUp.classList.toggle('display-search-container') //(FUNCTION)//
}

function close() {
    ContainerSearchPopUp.classList.toggle ('display-search-container') //closes when click on blurrybackground//
}

// --------   DIALOG WINDOW OPEN/CLOSE  ------------ //

// let SearchButton = document.querySelector('#search-button')
// let Dialog = document.querySelector('.search-dialog')
// // let Backdrop = document.querySelector

// SearchButton.addEventListener('click', showSearch)

// function showSearch() {
//     Dialog.classList.toggle('.dialog-active')
// }

