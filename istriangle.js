const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl=document.querySelector('#output');


function calculateSumOfAngles(angle1, angle2, angle3){
  const sumOfAngles=angle1+angle2+angle3;
  return sumOfAngles;
}



function isTriangle(){
      if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0) {

const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
if(sumOfAngles===180){
    outputEl.innerText="Yay, The angles form a Triangle";
}
else{
    outputEl.innerText="ohh ohh, The angles NOT form a Triangle";  
}}
  else if (Number(inputs[0].value) === 0 && Number(inputs[1].value) === 0 && Number(inputs[2].value) === 0) {
        outputEl.innerText="Please provide inputs/ Dont give all Zeroes";
    } else {
       outputEl.innerText="Can't accept negative values";
    }
}
isTriangleBtn.addEventListener("click",isTriangle);
