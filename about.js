console.log("hello world");

const image = document.querySelector('img')




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted")
}

const pic = (evt)=>{
	evt.preventDefault();

	alert('Wow you look smarter than the duck')
}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
image.addEventListener( 'mouseover', pic)
