class KonyvPublicView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    console.log(elem);
    //egy divet jelenítsünk meg
    szuloElem.append(`<div>
            <h1>${elem.id}</h1>
            <h1>${elem.cim}</h1>
            <h1>${elem.szerzo}</h1>
            <h1>${elem.ar}</h1>
            <button id="kosar${elem.id}">Kosárba</button>
          </div>`);
    //gombok eseménykezelői
    this.sorElem = szuloElem.children("div:last-child");
    console.log(this.sorElem);
    this.kosarbaRak = $(`#kosar${elem.id}`);
    //módosít gomb eseménykezelő
    this.kosarbaRak.on("click", () => {
      console.log("Kosárba rak");
      this.kosarbaRakTrigger();
    });
  }
  kosarbaRakTrigger() {
    console.log("Kosárba rak");
    const esemeny = new CustomEvent("kosar", {
      detail: this.#elem,
    });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvPublicView;
