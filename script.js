let btnMenu = document.getElementById('btnabrir');
let menu = document.getElementById('menu-mobile');
let overlay = document.querySelector('.overlay');
let btnFechar = document.querySelector('.btnfechar'); 

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});


function baixarCV() {
    const link = document.createElement("a");
    link.href = "curriculo.pdf";
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}