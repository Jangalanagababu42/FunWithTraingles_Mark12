const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#hypotenuse-btn');
const outputEl=document.querySelector('#output');

function calculateSumOfSqaures(a,b){
    const sumOfSqaures=a*a + b*b;
    return sumOfSqaures;
}

function calculateHypotenuse(){
     if (Number(sides[0].value) && Number(sides[1].value)!=="") {
        if (Number(sides[0].value) > 0 && Number(sides[1].value)> 0) {

    const sumOfSqaures=calculateSumOfSqaures(Number(sides[0].value),Number(sides[1].value));
    const lengthOfhypotenuse=Math.sqrt(sumOfSqaures);
    outputEl.innerText="The Length of Hypotenuse is " + (lengthOfhypotenuse).toFixed(2);
        }
    else{
        outputEl.innerText="Please Provide values Greater Than Zero";
    } }
    else{
         outputEl.innerText="The Values are Empty Please Provide Some Inputs";
    }
    
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);
