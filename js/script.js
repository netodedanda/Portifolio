const buttonsportifolio = document.getElementById('links')


const buttonslinks = buttonsportifolio.querySelectorAll("div");


buttonslinks.forEach((item)=>{
    item.addEventListener("click",()=>{
        const ul = item.querySelector("ul")
       if(ul.style.display==='none'|| ul.style.display==='')
       {
        ul.style.display='flex'
       }else {
        ul.style.display='none'
       }
    
    
    })


}) 

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
























