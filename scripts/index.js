//Stap 1: JS koppelen aan CSS/HTML //

let SearchButton = document.querySelector ('#search-button') //(SELECT)//
let PopUpSearch = document.querySelector ('.pop-up-search')
let PopUpBlurryBackground = document.querySelector ('.pop-up-blurry-background')


//Stap 2: event selecteren (IF this...) //
SearchButton.addEventListener ('click', showSearch) //(EVENT)//


//Stap 3: functie toewijzen (...THEN that) //
function showSearch() {
    PopUpSearch.classList.toggle('display-pop-up-search') //(FUNCTION)//
}


function showSearch() {
    PopUpSearch.classList.toggle('.display-blurry-background') 
}

