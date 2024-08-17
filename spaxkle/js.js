import java.util.ArrayList;
import java.util.List;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private List<String> transactionHistory;

    public BankAccount() {
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
        this.transactionHistory = new ArrayList<>();
    }

    public void deposit(String accountType, double amount) {
        if (accountType.equals("checking")) {
            checkingBalance += amount;
            transactionHistory.add("Deposited $" + amount + " to Checking Account");
        } else {
            savingsBalance += amount;
            transactionHistory.add("Deposited $" + amount + " to Savings Account");
        }
    }

    public void transfer(String fromAccount, String toAccount, double amount) {
        if (fromAccount.equals("checking") && checkingBalance >= amount) {
            checkingBalance -= amount;
            if (toAccount.equals("savings")) {
                savingsBalance += amount;
            } else {
                checkingBalance += amount;
            }
            transactionHistory.add("Transferred $" + amount + " from Checking to " + toAccount);
        } else if (fromAccount.equals("savings") && savingsBalance >= amount) {
            savingsBalance -= amount;
            if (toAccount.equals("checking")) {
                checkingBalance += amount;
            } else {
                savingsBalance += amount;
            }
            transactionHistory.add("Transferred $" + amount + " from Savings to " + toAccount);
        }
    }

    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public List<String> getTransactionHistory() {
        return transactionHistory;
    }
}
