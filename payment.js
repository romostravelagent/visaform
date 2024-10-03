// Display total amount due
window.onload = function() {
    let totalAmount = localStorage.getItem('totalAmount') || '0.00';
    document.getElementById('totalAmountDue').textContent = "Total Amount: $" + totalAmount;
};

// Handle receipt upload form submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    let receipt = document.getElementById('receipt').files[0];

    if (!receipt) {
        alert("Please upload a receipt.");
        event.preventDefault();
    } else {
        alert("Thank you for your payment. Redirecting you...");
        localStorage.clear();  // Clear total amount after payment is done
        window.location.href = "congratulations.html";  // Redirect to congratulations page
    }
});
