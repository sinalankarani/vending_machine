const VendingMachine = require("../lib/VendingMachine");
const inventory = require("../inventory.json");

describe("Vending Machine", () => {
  beforeEach(() => {
    vendingMachine = new VendingMachine(inventory);
  });
  describe("when asked to show inventory", () => {
    it("should return inventory", () => {
      expect(vendingMachine.showInventory()).toEqual({
        items: [
          {
            id: "A1",
            name: "Skittles",
            price: 1,
            stock: 20,
            maxStock: 20
          },
          {
            id: "A2",
            name: "Hershey's",
            price: 2,
            stock: 20,
            maxStock: 20
          },
          {
            id: "A3",
            name: "M&Ms",
            price: 1,
            stock: 20,
            maxStock: 20
          },
          {
            id: "A4",
            name: "Sneakers",
            price: 1.25,
            stock: 20,
            maxStock: 20
          },
          {
            id: "A5",
            name: "Kit Kats",
            price: 1.25,
            stock: 20,
            maxStock: 20
          }
        ],
        coins: [
          {
            id: 1,
            name: "nickel",
            value: 0.05,
            stock: 20,
            maxStock: 20
          },
          {
            id: 2,
            name: "dime",
            value: 0.1,
            stock: 20,
            maxStock: 20
          },
          {
            id: 3,
            name: "quarter",
            value: 0.25,
            stock: 20,
            maxStock: 20
          },
          {
            id: 4,
            name: "loonie",
            value: 1,
            stock: 20,
            maxStock: 20
          },
          {
            id: 5,
            name: "toonie",
            value: 2,
            stock: 20,
            maxStock: 20
          }
        ]
      });
    });
  });

  describe("when the coin stock is low", () => {
    it("should restock coins", () => {
      vendingMachine.inventory.coins.forEach(coin => (coin.stock = 4));
      const result = vendingMachine.restockCoins();
      expect(result).toEqual([20, 20, 20, 20, 20]);
    });
  });
  describe("when the item stock is low", () => {
    it("should restock items", () => {
      vendingMachine.inventory.items.forEach(item => (item.stock = 4));
      const result = vendingMachine.restockItems();
      expect(result).toEqual([20, 20, 20, 20, 20]);
    });
  });

  describe("when user inserts coins", () => {
    const coinInput = [
      { id: 4, name: "loonie", value: 1, amount: 1 },
      { id: 3, name: "quarter", value: 0.25, amount: 3 }
    ];
    it("should check total value of coins", () => {
      expect(vendingMachine.checkMoney(coinInput)).toEqual(1.75);
    });
  });
  describe("when user selects an option", () => {
    const itemRequested = {
      id: "A5",
      name: "Kit Kats",
      price: 1.25
    };
    it("should check cost of item", () => {
      expect(vendingMachine.checkItemCost(itemRequested)).toEqual(1.25);
    });
  });

  describe("when the change entered by the user is MORE than the amount for requested item", () => {
    const coinInput = [
      { id: 4, name: "loonie", value: 1, amount: 1 },
      { id: 3, name: "quarter", value: 0.25, amount: 3 }
    ];
    const itemRequested = {
      id: "A5",
      name: "Kit Kats",
      price: 1.25
    };
    it("should return the extra money once the item has been chosen", () => {
      expect(vendingMachine.moreMoney(coinInput, itemRequested)).toEqual({
        "dispensed item": "Kit Kats",
        change: 0.5
      });
    });
  });

  describe("when the change entered by the user is LESS than the amount for requested item", () => {
    const coinInput = [
      { id: 4, name: "loonie", value: 1, amount: 1 },
      { id: 3, name: "quarter", value: 0.25, amount: 3 }
    ];
    const itemRequested = {
      id: "A2",
      name: "Hershey's",
      price: 2
    };
    it("should return the extra money once the item has been chosen", () => {
      expect(vendingMachine.lessMoney(coinInput, itemRequested)).toEqual(
        `please insert 0.25`
      );
    });
  });
  describe("when the change entered by the user is LESS than the amount for requested item", () => {
    const coinInput = [
      { id: 4, name: "loonie", value: 1, amount: 1 },
      { id: 3, name: "quarter", value: 0.25, amount: 4 }
    ];
    const itemRequested = {
      id: "A2",
      name: "Hershey's",
      price: 2
    };
    it("should return the extra money once the item has been chosen", () => {
      expect(vendingMachine.exactMoney(coinInput, itemRequested)).toEqual(
        "dispensed item: Hershey's"
      );
    });
  });
});
