const $page = document.querySelector(".page")
const $button = document.querySelector('button')

const $headerButton = document.querySelector('.header-button')


$headerButton.addEventListener('click', (event) => {
    console.log(event.target)
    $page.classList.toggle('night-version');
    $button.classList.toggle('night-version');
    $headerButton.textContent = "Ночная версия сайта";
})

