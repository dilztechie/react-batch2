class Current extends Account {
    constructor(id, name, openingBalance) {
        super(id, name, openingBalance)
    }

    withdraw = (amount) => {
        if (this.balance - amount < this.CURRENT_MINIMUM_BALANCE) {
            throw new Error("Withdraw: " + amount + " from " + this.id + ": Insufficient Funds")
        }
        if (amount < 0) {
            throw new Error("Withdraw: " + amount + " from " + this.id + ": Amount cannot be Negative")
        }
        this.balance -= amount
        return this.balance
    }
}