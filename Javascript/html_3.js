// const parent = document.getElementById('parent');
// parent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     e.target.textContent='I am clicked'
    
// })

const grandParent = document.getElementById('grandParent')
const parent = document.getElementById('Parent')
const child = document.getElementById('child')


grandParent.addEventListener('click',()=>{
    console.log("Grand parent is clicked")
},true)

parent.addEventListener('click',()=>{
    console.log("parent is clicked")
},false)


child.addEventListener('click',()=>{
    console.log("Child is clicked")
},true)
