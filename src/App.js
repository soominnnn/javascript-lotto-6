import MainController from "./controller/MainController.js";

class App {
  async play() {
    await MainController.UserPurchase();
    MainController.RandomLotto();
    await MainController.UserWinning();
    await MainController.UserBonus();
    MainController.getWinningResult();
  }
}

export default App;
