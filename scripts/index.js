let button = document.querySelector ('#search-button') //selects the button element//
let popupSearch = document.querySelector ('.pop-up-search')

button.addEventListener ('click', showSearch) //event = actie die verandering activeert//

function showSearch() {
    popupSearch.classList.toggle('display-pop-up-search') //function: de verandering (verwijst JS -> instructie CSS //
}


