class VendingMachine {
  constructor(inventory, coinBank) {
    this.inventory = inventory;
    this.insertedMoney = coinBank;
    // this.coinTypes = {
    //   toonie: 2,
    //   loonie: 1,
    //   quarter: 0.25,
    //   dime: 0.1,
    //   nickel: 0.05
    // };
    // this.coinNames = Object.keys(this.coinTypes);
    // this.coinValues = Object.values(this.coinTypes);
  }
  showInventory() {
    return this.inventory;
  }
  restockCoins() {
    return this.inventory.coins.map((coin, i) => {
      // if stock less than 5
      if (coin.stock < 5) {
        const currentCoin = this.inventory.coins[i];
        // set stock to 20
        return (currentCoin.stock = 20);
      }
    });
  }
  restockItems() {
    return this.inventory.items.map((item, i) => {
      // if stock less than 5
      if (item.stock < 5) {
        const currentItem = this.inventory.items[i];
        // set stock to 20
        return (currentItem.stock = 20);
      }
    });
  }

  // calculate total amount of coins inserted by each user
  checkMoney(coinInput) {
    let totalAmount = Number(
      (
        coinInput[0].amount * coinInput[0].value +
        coinInput[1].amount * coinInput[1].value
      ).toFixed(2)
    );
    return totalAmount;
  }

  // simply check item cost
  checkItemCost(itemRequested) {
    return itemRequested.price;
  }

  // return requested item and extra change
  moreMoney(coinInput, itemRequested) {
    let totalAmount = this.checkMoney(coinInput);
    let itemCost = this.checkItemCost(itemRequested);

    if (totalAmount > itemCost) {
      let dispensedItem = itemRequested.name;
      let dispensedChange = totalAmount - itemCost;
      let dispensed = {
        "dispensed item": dispensedItem,
        change: dispensedChange
      };
      return dispensed;
    }
  }
  // prompt user to insert more money
  lessMoney(coinInput, itemRequested) {
    let totalAmount = this.checkMoney(coinInput);
    let itemCost = this.checkItemCost(itemRequested);

    if (totalAmount < itemCost) {
      let amountOwing = itemCost - totalAmount;
      let message = `please insert ${amountOwing}`;
      return message;
    }
  }
}

// if (typeof window === undefined) {
module.exports = VendingMachine;
// }
