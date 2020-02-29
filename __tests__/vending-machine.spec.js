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

  describe("when user inserts coins and selects an option", () => {
    const coinInput = { loonie: 1, quarter: 2 };
    it("should check amount of coins", () => {
      expect(vendingMachine.checkMoney(coinInput)).toEqual({});
    });
  });

  //   describe("when the change entered by the user is MORE than the amount for requested item", () => {
  //     it("should return the extra money once the item has been chosen", () => {
  //       expect(vendingMachine.moreMoney().toEqual(""));
  //     });
  //   });
  //   describe("when the change entered by the user is LESS than the amount for requested item", () => {
  //     it("should display the remaining amount required for the item", () => {
  //       expect(vendingMachine.lessMoney().toEqual(""));
  //     });
  //   });
});
