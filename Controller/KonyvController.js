import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KosarModel from "../Model/KosarModel.js";

class KonyvController {
  constructor() {
    const konyvmodel = new KonyvModel();
    const kosarmodel = new KosarModel();
    $("#admin").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvAdatok);
    });
    $("#public").on("click", () => {
      konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
    });

    $(window).on("modosit", (event) => {
      console.log("controllerben módosít", event.detail);
      konyvmodel.adatModosit(event.detail);
    });
    $(window).on("torol", (event) => {
      console.log("controllerben töröl", event.detail);
      konyvmodel.adatTorol(event.detail);
    });
    $(window).on("kosar", (event) => {
      console.log("Kosárba rak", event.detail);
      kosarmodel.kosarbaRak(event.detail);
    });
  }

  konyvAdatok(tomb) {
    let szuloElem = $("main");
    new KonyvekView(tomb, szuloElem);
  }
  konyvPublicAdatok(tomb) {
    let szuloElem = $("main");
    new KonyvekPublicView(tomb, szuloElem);
  }
}

export default KonyvController;
