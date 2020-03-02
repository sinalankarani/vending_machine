class VendingMachine {
  constructor(inventory, coinBank) {
    this.inventory = inventory;
    this.insertedMoney = coinBank;
  }

  // display inventory
  showInventory() {
    return this.inventory;
  }

  // check input type
  checkInput(requestedItem, amountEntered) {
    if (
      typeof requestedItem !== "object" ||
      typeof amountEntered !== "object"
    ) {
      throw new Error("Not a valid input");
    }
  }

  // restock coins if less than certain amount
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

  // restock items if less than certain amount
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
    let initVal = 0;
    let totalAmount = coinInput.reduce((acc, cur) => {
      return cur.value * cur.amount + acc;
    }, initVal);
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

  // dispense item without extra change
  exactMoney(coinInput, itemRequested) {
    let totalAmount = this.checkMoney(coinInput);
    let itemCost = this.checkItemCost(itemRequested);

    if (totalAmount === itemCost) {
      let dispensedItem = `dispensed item: ${itemRequested.name}`;
      return dispensedItem;
    }
  }
  // reduce stock number of each sold item
  reduceStock(coinInput, itemRequested) {
    let itemSold = this.exactMoney(coinInput, itemRequested);
    if (itemSold) {
      itemRequested.stock--;
    }
    return `Number of ${itemRequested.name}: ${itemRequested.stock}`;
  }
}

module.exports = VendingMachine;
