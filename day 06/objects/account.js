// abstract class: you cannot create an object of this class
// you can inherit this class

class Account {
    SAVINGS_MINIMUM_BALANCE = 1000
    CURRENT_MINIMUM_BALANCE = 5000

    constructor(id, name, openingBalance) {
        if (this.constructor === Account) {
            throw new Error("Opening Account for " + id + ": Open Either Savings / Current Account")
        }
        if (this.constructor === Savings && openingBalance < this.SAVINGS_MINIMUM_BALANCE) {
            throw new Error("Opening Account for " + id + ": Opening Balance: " + openingBalance + " < Minimum Balance: " + this.SAVINGS_MINIMUM_BALANCE)
        }
        if (this.constructor === Current && openingBalance < this.CURRENT_MINIMUM_BALANCE) {
            throw new Error("Opening Account for " + id + ": Opening Balance: " + openingBalance + " < Minimum Balance: " + this.CURRENT_MINIMUM_BALANCE)
        }
        this.id = id
        this.name = name
        this.type = id.substring(0, 2)
        this.balance = openingBalance
    }

    deposit = (amount) => {
        if (amount < 0) {
            throw new Error("Deposit: " + amount + " in " + this.id + ": Amount cannot be Negative")
        }
        this.balance += amount
        return this.balance
    }

    toString = () => "Account [id:" + this.id + ", name:" + this.name +
        ", type:" + this.type + ", balance:" + this.balance + "]"
}