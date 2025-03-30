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


// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; // vipLevel (string: 'Gold', 'Platinum')
    }

    getTotalSpent() {
        return super.getTotalSpent() * 1.1; // 10% loyalty bonus added
    }
}


// Task 4: Build a Client Report System
const customer1 = new Customer("Alice Johnson", "alice@gmail.com");
console.log(customer1); 
customer1.addPurchase(200);
customer1.addPurchase(150);
console.log(`${customer1.name} total spent after purchases: $${customer1.getTotalSpent()}`);

const vipCustomer = new VIPCustomer("Bob Smith", "bob@gmail.com", "Gold");
vipCustomer.addPurchase(500);
vipCustomer.addPurchase(300);
console.log(`${vipCustomer.name} total spent with VIP bonus: $${vipCustomer.getTotalSpent().toFixed(2)}`);

const rep = new SalesRep("Charlie Brown");
rep.addClient(customer1);
rep.addClient(vipCustomer); 
console.log(`Charlie's client total for ${customer1.name}: $${rep.getClientTotal("Alice Johnson")}`);

const customers = [customer1, vipCustomer];

// Use .reduce() to calculate total revenue from all customers
const totalRevenue = customers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);

// Use .filter() to find customers who spent over $500
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500);

// Use .map() to create an array of customer names and total spent
const customerSummaries = customers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent() }));

console.log(`Total revenue: $${totalRevenue}`);
console.log(`High-spending customers:`, highSpenders.map(c => c.name));
console.log(`Customer summaries:`, customerSummaries);
