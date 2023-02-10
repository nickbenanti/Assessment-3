const fC = document.querySelector('#color')
const fP = document.querySelector('#place')
const fR = document.querySelector('#ritual')



const favColor =(evt)=>{
    evt.preventDefault();
    alert("Nick's favorite color is blue")
}

const favPlace = (evt) =>{
    evt.preventDefault();
    alert("Nick's favorite place is Hawaii")
}

const favRitual = (evt) =>{
    evt.preventDefault();
    alert("Nick's favorite ritual is spending a hour watching youtube videos before going to bed")
}


fC.addEventListener('click', favColor)
fP.addEventListener('click', favPlace)
fR.addEventListener('click', favRitual)