import java.util.ArrayList;
import java.util.List;

public class Account {
    private double checkingBalance;
    private double savingsBalance;
    private List<Transaction> transactionHistory;

    public Account() {
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
        this.transactionHistory = new ArrayList<>();
    }

    public void depositChecking(double amount) {
        checkingBalance += amount;
        transactionHistory.add(new Transaction("Deposit to Checking", amount));
    }

    public void depositSavings(double amount) {
        savingsBalance += amount;
        transactionHistory.add(new Transaction("Deposit to Savings", amount));
    }

    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public List<Transaction> getTransactionHistory() {
        return transactionHistory;
    }
}

class Transaction {
    private String description;
    private double amount;
    private String date;

    public Transaction(String description, double amount) {
        this.description = description;
        this.amount = amount;
        this.date = java.time.LocalDate.now().toString();
    }

    // Getters for description, amount, and date
}
