const $page = document.querySelector(".page")
const $button = document.querySelector('button')

const $headerButton = document.querySelector('.header-button')


$headerButton.addEventListener('click', (event) => {
    if($headerButton.textContent === "Ночная версия сайта"){
        $page.classList.toggle('night-version');
        $button.classList.toggle('night-version');
        $headerButton.textContent = "Дневная версия сайта"
    } else {
        $page.classList.toggle('night-version');
        $button.classList.toggle('night-version');
        $headerButton.textContent = "Ночная версия сайта"
    }
})

