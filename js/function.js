// function getInputFieldValueById() {
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}