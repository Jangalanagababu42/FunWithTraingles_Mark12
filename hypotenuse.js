const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#hypotenuse-btn');
const outputEl=document.querySelector('#output');

function calculateSumOfSqaures(a,b){
    const sumOfSqaures=a*a + b*b;
    return sumOfSqaures;
}

function calculateHypotenuse(){
    const sumOfSqaures=calculateSumOfSqaures(Number(sides[0].value),Number(sides[1].value));
    const lengthOfhypotenuse=Math.sqrt(sumOfSqaures);
    outputEl.innerText="The Length of Hypotenuse is " + lengthOfhypotenuse
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);