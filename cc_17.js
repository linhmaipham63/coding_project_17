// Task 1: Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name; // name (string)
        this.email = email; // email (string)
        this.purchaseHistory = []; // purchaseHistory (array)
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount); // adds a purchase amount to purchaseHistory
    }

    getTotalSpent() { // returns total amount spent
        return this.purchaseHistory.reduce((sum, purchase) => sum + purchase, 0);
    }
}

