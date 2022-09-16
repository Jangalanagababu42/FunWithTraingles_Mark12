const quizForm=document.querySelector('.quiz-form')
const submitAnswerBtn=document.querySelector("#submit-answer-btn")
const outputEl=document.querySelector("#output");
const correctAnswers=["Equilateral","√3/4 a2","3","10 cm"," 108 sq.cm.","30 cm", "18 cm"," 4.33 cm"]
function calculateScore(){
    let score=0;
    let index=0;
    let count=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
                count = count + 1;

    }
    if(count===10){
    outputEl.innerText="Your Score is "+ score;}
    else{
    outputEl.innerText="Please Provide all the Inputs ";
    }
}
submitAnswerBtn.addEventListener('click',calculateScore)
