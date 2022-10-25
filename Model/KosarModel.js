class KosarModel {
  #kosarTomb = [];

  constructor() {
    //console.log("KosarModel");
  }
  adatKosarbarak(adat) {
    console.log("Kosárba Rak", adat);
  }
  getKosarTomb() {
    return this.#kosarTomb;
  }
  kosarbaRak(elem) {
    this.#kosarTomb.push(elem);
    console.log(this.#kosarTomb);
  }
}

export default KosarModel;
