document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    const cardNumber = document.getElementById("card-number").value;
    const cardName = document.getElementById("card-name").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const billingAddress = document.getElementById("billing-address").value;

    // Basic Validation
    if (!cardNumber || !cardName || !expiryDate || !cvv || !billingAddress) {
        alert("Please fill out all fields.");
        return;
    }
    
    // Simulating a payment success
    const paymentStatus = document.getElementById("payment-status");
    paymentStatus.innerText = "Processing payment...";
    
    setTimeout(() => {
        paymentStatus.innerText = "Payment Successful! Thank you.";
    }, 2000);
});
