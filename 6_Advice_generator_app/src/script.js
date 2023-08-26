const adviceId = document.getElementById('adviceId');
const message = document.querySelector('.advice_message');
const nextBtn = document.querySelector('.dice');

console.log(adviceId);
console.log(message);
console.log(nextBtn);

nextBtn.addEventListener('click', () => {
    getData();
})


async function getData() {
    var url = "https://api.adviceslip.com/advice";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    adviceId.textContent = data.slip.id;
    message.textContent = data.slip.advice;
}
