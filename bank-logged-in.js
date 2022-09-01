///////////////// Withdrawal Area 

document.getElementById('withdrawal-btn').addEventListener('click', function(){

  // Captured Withdrawal Amount 

  const withdrawalAmount = document.getElementById('withdrawal-field');

  const withdrawalAmountInValue = parseFloat(withdrawalAmount.value);

  // Get Withdrawal Display 

  const displayWithdrawalAmount = document.getElementById('display-withdraw-amount');

  const displayWithdrawalAmountInValue = parseFloat(displayWithdrawalAmount.innerText);

  // Addition the withdrawal amount to the previous amount 

  displayWithdrawalAmount.innerText = displayWithdrawalAmountInValue + withdrawalAmountInValue;


  // Decrease Balance 


    // Get Balance Display 
  
    const displayBalanceAmount = document.getElementById('display-balance-amount');
  
    const displayBalanceAmountInValue = parseFloat(displayBalanceAmount.innerText);
  
    // Addition the Balance amount to the previous amount 
  
    displayBalanceAmount.innerText = displayBalanceAmountInValue - withdrawalAmountInValue;
  
    // Clear the withdrawal input field 
  
    withdrawalAmount.value = '';


})




///////////////// Deposit Area 


document.getElementById('deposit-btn').addEventListener('click', function(){

  // Captured Deposit Amount 

  const depositAmount = document.getElementById('deposit-field');

  const depositAmountInValue = parseFloat(depositAmount.value);




  // Get Deposit Display deposit
  
  const displayDepositAmount = document.getElementById('display-deposit-amount');

  const displayDepositAmountInValue = parseFloat(displayDepositAmount.innerText);

  // Addition the deposit amount to the previous amount 

  displayDepositAmount.innerText = displayDepositAmountInValue + depositAmountInValue;


  // Increase Balance 


    // Get Balance Display 
  
    const displayBalanceAmount = document.getElementById('display-balance-amount');
  
    const displayBalanceAmountInValue = parseFloat(displayBalanceAmount.innerText);
  
    // Addition the Balance amount to the previous amount 
  
    displayBalanceAmount.innerText = displayBalanceAmountInValue + depositAmountInValue;

  
    // Clear the deposit input field 
  
    depositAmount.value = '';

})