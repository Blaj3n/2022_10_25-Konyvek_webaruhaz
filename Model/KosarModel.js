class KosarModel {
  #kosarTomb = [];

  constructor() {
    console.log("KosarModel");
  }
  adatKosarbarak(adat) {
    console.log("Kosárba Rak", adat);
  }
  getKosarTomb() {
    return this.#kosarTomb;
  }
  kosarba(elem) {
    this.#kosarTomb.push(elem);
  }
}

export default KosarModel;
