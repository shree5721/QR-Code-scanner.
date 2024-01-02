const inputElem=document.querySelector("#inputElem")
const generateButton=document.querySelector(".btn")
const QRimg=document.querySelector(".QRimg")
const QRcontainer=document.querySelector(".QRcontainer")


function generateQR(event){
    event.preventDefault()
    
    if (inputElem.value.length>0) {
        QRcontainer.style.display='block'
        QRimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputElem.value;
        QRcontainer.classList.add("show-img")
    }
    else{
        inputElem.classList.add("error")
        setTimeout(()=>{
            inputElem.classList.remove("error")
        },1000)
    }
  
}
generateButton.addEventListener('click',generateQR)
