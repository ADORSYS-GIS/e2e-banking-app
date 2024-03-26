function validateAndSubmit() {
    // Validate and submit form data
    var recipientNumber = document.getElementById("recipientNumber").value;
    var amount = document.getElementById("amount").value;
  
    // Perform validation here, you can use regex or any other method
    
    // If validation passes, proceed to the next step
    // For now, let's assume validation always passes
    location.href = 'validate_and_process.html?recipientNumber=' + recipientNumber + '&amount=' + amount;
  }
  