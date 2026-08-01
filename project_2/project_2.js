const root = document.getElementById('root');
const body = document.getElementById('main');
root.addEventListener('click',(e)=>{
    console.log(e.target);
    body.style.backgroundColor=e.target.id
})