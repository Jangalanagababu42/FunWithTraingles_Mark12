const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#area-btn');
const outputEl=document.querySelector('#output');

function calculateArea(a,b){
    const area=0.5*a*b;
    return area;
}

function calculateareaOfTriangles(){
    if (Number(sides[0].value) > 0 && Number(sides[1].value) > 0) {
    const areaOfTraingle=calculateArea(Number(sides[0].value),Number(sides[1].value));
    
    outputEl.innerText="The Area of Triangle is " + areaOfTraingle}
    else{
      outputEl.innerText="Don't be Silly Please Provide Some Valid Inputs😀😀😀 " }   
    
}

hypotenuseBtn.addEventListener("click",calculateareaOfTriangles);
