let context = {
	operator: null,
	storedNb: 0,
}

function setCurrentOperation(operator){
	if(context.operator != null){
		const result = operate(context.operator, context.storedNb, +resultContainer.textContent);
		resultContainer.textContent = result;
	}
	context.operator = operator;
	context.storedNb = +resultContainer.textContent;
	clearResultContainer();
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
	const result = operate(context.operator, context.storedNb, +resultContainer.textContent);
	resultContainer.textContent = result;
	context.operator = null;
	context.storedNb = 0;
});
