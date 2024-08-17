// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch transaction history and populate the table
    fetch('getTransactions.php')
        .then(response => response.json())
        .then(data => {
            const historyTable = document.getElementById('transactionHistory');
            data.forEach(transaction => {
                const row = `<tr>
                                <td>${transaction.date}</td>
                                <td>${transaction.description}</td>
                                <td>${transaction.amount}</td>
                             </tr>`;
                historyTable.innerHTML += row;
            });
        });
});
