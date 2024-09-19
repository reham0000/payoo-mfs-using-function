document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        console.log('add money button clicked')
        // const addMoney = getInputFieldValueById();
        // console.log('add money value', addMoney);

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        
        
        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Please Try again');
        }

    });