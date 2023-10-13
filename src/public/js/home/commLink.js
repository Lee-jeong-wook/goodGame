const $dropdown = document.querySelectorAll('.dropdown');

$dropdown.forEach(element => {
    element.addEventListener(('click'), () => {
        console.log(element);
    })
});