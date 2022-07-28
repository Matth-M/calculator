const resultContainer = document.querySelector('#result');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	number.addEventListener('click', function(){
		resultContainer.textContent += this.textContent;	
	});
});
