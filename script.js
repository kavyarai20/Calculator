const btnsEle=document.querySelectorAll("button");

const inputEle=document.getElementById("result");

for(let i=0;i<btnsEle.length;i++){
  btnsEle[i].addEventListener("click",()=>{
    const btnsValue=btnsEle[i].textContent
    if(btnsValue==="C"){
      clearResult()
    }
    else if(btnsValue==="="){
      calculateResult()
    }
    else{
      appendValue(btnsValue)
    }
  })
}

function clearResult(){
  inputEle.value=""
}

function calculateResult(){
  inputEle.value=eval(inputEle.value)
}

function appendValue(btnsValue){
  inputEle.value+=btnsValue
}