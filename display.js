const resultContainer = document.querySelector('#result');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	number.addEventListener('click', function(){
		resultContainer.textContent += this.textContent;
	});
});

function clear(){
	resultContainer.textContent = result;
	operator = null;
	storedNb = 0;
}
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);
