let operator = '';
let storedNb = 0;

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', function(){
	operator = add;
	storedNb = +resultContainer.textContent;
	clear();
});

const subBtn = document.getElementById('substract');
subBtn.addEventListener('click', function(){
	operator = substract;
	storedNb = +resultContainer.textContent;
	clear();
});

const mulBtn = document.getElementById('multiply');
mulBtn.addEventListener('click', function(){
	operator = multiply;
	storedNb = +resultContainer.textContent;
	clear();
});

const divBtn = document.getElementById('divide');
divBtn.addEventListener('click', function(){
	operator = divide;
	storedNb = +resultContainer.textContent;
	clear();
});

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', function(){
	const result = operate(operator, storedNb, +resultContainer.textContent);
	resultContainer.textContent = result;
	operator = null;
	storedNb = 0;
});
