const checkbox = document.getElementById('checkbox');
console.log(checkbox);
const body = document.querySelector('body');
const middleBoxes = document.querySelectorAll('.middbox');
const lastBoxes = document.querySelectorAll('.lastBox');
console.log(lastBoxes);


checkbox.addEventListener('change', () => {
    body.classList.toggle('bodyLight');
    middleBoxes.forEach(box => {
        box.classList.toggle('middboxLight');
    })

    lastBoxes.forEach(box => {
        box.classList.toggle('lastBoxLight');
    })
})