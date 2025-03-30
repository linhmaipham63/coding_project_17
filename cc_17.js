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


// Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name; // name (string)
        this.clients = []; // clients (array of Customer objects)
    }

    addClient(customer) { // adds a customer to the list
        this.clients.push(customer);
    }

    getClientTotal(name) { // finds client by name and returns total spent
        const client = this.clients.find(client => client.name === name); 
        return client ? client.getTotalSpent() : 0;
    }
}

