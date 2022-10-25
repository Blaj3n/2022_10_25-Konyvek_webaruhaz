class KosarView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    console.log(elem);
    //egy táblázat sort jelenítsünk meg
    szuloElem.append(
        `<div>
            <h1>${elem.id}</h1>
            <h1>${elem.cim}</h1>
            <h1>${elem.szerzo}</h1>
            <h1>${elem.ar}</h1>
            <button id="kosar${elem.id}">Kosárba</button>
        </div>`);
    this.sorElem = szuloElem.children("tr:last-child");
    console.log(this.sorElem);
    this.kosarElem = $(`#kosar${elem.id}`);
    this.kosarElem.on("click", () => {
      console.log("Kosárba Rak");
      this.kattintasKosarbaRak();
    });
  }
  kattintasKosarbaRak() {
    console.log("Kosárba rak a triggerben");
    const esemeny = new CustomEvent("kosar", {
      detail: this.#elem.id,
    });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvView;
