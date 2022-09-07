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

function addClickHandler(element, operator) {
    element.addEventListener('click', function() {
		setCurrentOperation(operator);
    }, false);
}

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('substract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');

addClickHandler(addBtn, add);
addClickHandler(subBtn , substract);
addClickHandler(mulBtn, multiply);
addClickHandler(divBtn, divide);

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', function(){
	const result = operate(operator, storedNb, +resultContainer.textContent);
	resultContainer.textContent = result;
	operator = null;
	storedNb = 0;
});
