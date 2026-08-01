const num1=document.getElementById('one');
const num2=document.getElementById('two');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
const mul=document.getElementById('mul');
const div=document.getElementById('div');
const form=document.getElementById('form');
const ans=document.getElementById('ans');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (e.submitter.id == 'add'){
        const number1 = Number(num1.value)
        const number2 =Number(num2.value);
        ans.textContent=`Result : ${number1+number2}`;
    }
    else if (e.submitter.id == 'sub'){
        const number1 = Number(num1.value)
        const number2 =Number(num2.value);
        ans.textContent=`Result : ${number1-number2}`;
    }
    else if (e.submitter.id == 'mul'){
        const number1 = Number(num1.value)
        const number2 =Number(num2.value);
        ans.textContent=`Result : ${number1*number2}`;
    }
    else {
        const number1 = Number(num1.value)
        const number2 =Number(num2.value);
        ans.textContent=`Result : ${number1/number2}`;
    }

})

