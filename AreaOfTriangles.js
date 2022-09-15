const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#area-btn');
const outputEl=document.querySelector('#output');

function calculateArea(a,b){
    const area=0.5*a*b;
    return area;
}

function calculateareaOfTriangles(){
    const areaOfTraingle=calculateArea(Number(sides[0].value),Number(sides[1].value));
    
    outputEl.innerText="The Area of Triangle is " + areaOfTraingle
}

hypotenuseBtn.addEventListener("click",calculateareaOfTriangles);