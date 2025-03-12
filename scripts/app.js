'use strict';

let habbits = [];
const HABBITS_KEY = 'HABBIT_KEY';

/* utils */
function loadData() {
    const habbitsString = localStorage.getItem(HABBITS_KEY);
    const habbitsArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitsArray)) {
        habbits = habbitsArray;
    }
}

function saveData() {
    const habbitsString = JSON.stringify(habbits);
    localStorage.setItem(HABBITS_KEY, habbitsString);
}

(() => {
    loadData();
})();