class VendingMachine {
  constructor(inventory, coinBank) {
    this.inventory = inventory;
    this.insertedMoney = coinBank;
    this.coinTypes = {
      toonie: 2,
      loonie: 1,
      quarter: 0.25,
      dime: 0.1,
      nickel: 0.05
    };
    this.coinNames = Object.keys(this.coinTypes);
    this.coinValues = Object.values(this.coinTypes);
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
  checkMoney(coinInput) {
    const insertedCoins = Object.keys(coinInput);
    const coinAmounts = Object.values(coinInput);
    console.log(insertedCoins);
    console.log(coinAmounts);

    const amountInserted = insertedCoins.reduce((accumulator, currentValue) => {
      const calculated = coinTypes[currentValue] * money[currentValue];
      return accumulator + calculated;
    }, 0);
    console.log(amountInserted);
  }

  // dispenseItem(inventory, itemID, money) {
  //   const result = dispenseItem(this.inventory, this.coinTypes, itemID, money);
  //   const selectedItem = inventory.items.filter(item => item.id === itemID);
  //   console.log(selectedItem);
  // }
}

// if (typeof window === undefined) {
module.exports = VendingMachine;
// }
