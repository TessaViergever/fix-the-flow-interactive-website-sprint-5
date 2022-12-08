//Stap 1: JS koppelen aan CSS/HTML //

let SearchButton = document.querySelector ('#search-button') //(SELECT)//
let ContainerSearchPopUp = document.querySelector ('.container-search-pop-up')


//Stap 2: event selecteren (IF this...) //
SearchButton.addEventListener ('click', showSearch) //(EVENT)//


//Stap 3: functie toewijzen (...THEN that) //
function showSearch() {
    ContainerSearchPopUp.classList.toggle('display-search-container') //(FUNCTION)//
}


// function showSearch() {
//     PopUpSearch.classList.toggle('.display-blurry-background') 
// }

