function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        document.getElementById('result').textContent = "Please enter valid positive numbers.";
        return;
    }

    const tipAmount = (tipPercentage / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;

    document.getElementById('result').textContent = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}
