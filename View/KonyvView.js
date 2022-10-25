class KonyvView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    console.log(elem);
    //egy táblázat sort jelenítsünk meg
    szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="mod${elem.id}">Módosít</button></td>
        <td><button id="del${elem.id}">Töröl</button></td>
        </tr>`);
    //gombok eseménykezelői
    this.sorElem = szuloElem.children("tr:last-child");
    console.log(this.sorElem);
    this.modositElem = $(`#mod${elem.id}`);
    this.torolElem = $(`#del${elem.id}`);
    //módosít gomb eseménykezelő
    this.modositElem.on("click", () => {
      console.log("Módosít a View-ban");
      this.kattintasModositTrigger();
    });
    //töröl gomb eseménykezelő
    this.torolElem.on("click", () => {
      console.log("Töröl a View-ban");
      this.kattintasTorolTrigger();
    });
  }
  kattintasModositTrigger() {
    console.log("Módosít a triggerben");
    const esemeny = new CustomEvent("modosit", {
      detail: this.#elem.id,
    });
    window.dispatchEvent(esemeny);
  }
  kattintasTorolTrigger() {
    console.log("Töröl a triggerben");
    const esemeny = new CustomEvent("torol", {
      detail: this.#elem.id,
    });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvView;
