let context = {
	operator: null,
	storedNb: 0,
}

function setOperation(operator){
	if(context.operator != null){
		resultContainer.textContent = operate(operator, context.storedNb, +resultContainer.textContent);
	}
	context.operator = operator;
	context.storedNb = +resultContainer.textContent;
	clear();
}

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', setOperation(add));

const subBtn = document.getElementById('substract');
subBtn.addEventListener('click', setOperation(substract));

const mulBtn = document.getElementById('multiply');
mulBtn.addEventListener('click', setOperation(multiply));

const divBtn = document.getElementById('divide');
divBtn.addEventListener('click', setOperation(divide));

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', function(){
	const result = operate(operator, storedNb, +resultContainer.textContent);
	resultContainer.textContent = result;
	operator = null;
	storedNb = 0;
});
