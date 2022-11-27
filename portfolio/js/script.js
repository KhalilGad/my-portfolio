let menu =document.getElementById('menu');
let action =document.getElementById('action');

menu.addEventListener('click',()=>{
    getter();
})

function getter(){
    menu.classList.toggle('is-active');
    action.classList.toggle('is-active');
}