const elem1=document.getElementById('elem1');
const inc=document.getElementById('bt1');
const dec=document.getElementById('bt2');

let count=0;

inc.addEventListener('click',()=>{
    count++;
    elem1.textContent=`Counter : ${count}`
})

dec.addEventListener('click',()=>{
    if (count==0){
        return;
    }
    else{
        count--;
        elem1.textContent=`Counter : ${count}`;
    }
})