const answers = {
      q1:  "Sachin Tendulkar",
      q2:  "11",
      q3:  "West Indies",
      q4:  "50",
      q5:  "Brian Lara",
      q6:  "6",
      q7:  "MS Dhoni",
      q8:  "Leg Before Wicket",
      q9:  "Muttiah Muralitharan",
      q10: "6"
    };
let marks = 0;
const allOptions = document.querySelectorAll('input[type="radio"]');
 
const form = document.getElementById('quizForm');

const result = document.getElementById('result')

let finishQuiz=false;

let ans = ["","","","","","","","","",""]

allOptions.forEach((option) => {

    

    option.addEventListener("change", function (){

        let index = this.name;
        console.log(this.id);     // q1b
        console.log(this.name);   // q1
        console.log(this.value);  // Sachin Tendulkar

        if (ans[parseInt(index)]!=""){
            console.log(ans);
            return;
        }

        if (answers[index] == this.value){
          ans[parseInt(index)]=this.value;
          console.log('correct');
          marks+=1;
          
        }

        else{
          console.log('incorrect');
        }


      
    });
});

form.addEventListener('submit',(e)=>{
        e.preventDefault();
        result.style.display = "block";
        result.textContent= `Your Score: ${marks}`;
        console.log(marks)
        finishQuiz=true;
        return;
})