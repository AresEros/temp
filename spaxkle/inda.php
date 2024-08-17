<?php
session_start();

class BankAccount {
    private $checkingBalance;
    private $savingsBalance;
    private $transactionHistory;

    public function __construct() {
        $this->checkingBalance = 0.0;
        $this->savingsBalance = 0.0;
        $this->transactionHistory = [];
    }

    public function deposit($accountType, $amount) {
        if ($accountType == "checking") {
            $this->checkingBalance += $amount;
            $this->transactionHistory[] = "Deposited $$amount to Checking Account";
        } else {
            $this->savingsBalance += $amount;
            $this->transactionHistory[] = "Deposited $$amount to Savings Account";
        }
    }

    public function transfer($fromAccount, $toAccount, $amount) {
        if ($fromAccount == "checking" && $this->checkingBalance >= $amount) {
            $this->checkingBalance -= $amount;
            if ($toAccount == "savings") {
                $this->savingsBalance += $amount;
            }
            $this->transactionHistory[] = "Transferred $$amount from Checking to $toAccount";
        } elseif ($fromAccount == "savings" && $this->savingsBalance >= $amount) {
            $this->savingsBalance -= $amount;
            if ($toAccount == "checking") {
                $this->checkingBalance += $amount;
            }
            $this->transactionHistory[] = "Transferred $$amount from Savings to $toAccount";
        }
    }

    public function getCheckingBalance() {
        return $this->checkingBalance;
    }

    public function getSavingsBalance() {
        return $this->savingsBalance;
    }

    public function getTransactionHistory() {
        return $this->transactionHistory;
    }
}
?>
