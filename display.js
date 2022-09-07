const resultContainer = document.querySelector('#result');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	number.addEventListener('click', function(){
		resultContainer.textContent += this.textContent;
	});
});

function clearResultContainer(){
	resultContainer.textContent = 0;
}

function reset(){
	resultContainer.textContent = 0;
	context.operator = null;
	context.storedNb = 0;
}
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', reset);
