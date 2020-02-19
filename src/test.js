const mongoose = require('./db/mongoose')
const Item = require("./models/item")
const Section = require("./models/section")
const User = require("./models/user")

var prime = [
    {title: " Sicurezza nei laboratori ", path: "PDF/prime/00a_sicurezza_nei_laboratori.pdf", class: "list-group-item"},
    {title: " Sicurezza videoterminali ", path: "PDF/prime/00b_sicurezzaVDT.pdf", class: "list-group-item"},
    {title: " Sistemi di elaborazione ", path: "PDF/prime/01_Sistemi_di_elaborazione.pdf", class: "list-group-item"},
    {title: " Sistemi di elaborazione - ridotto ", path: "PDF/prime/01_Sistemi_di_elaborazione_ridotto.pdf", class: "list-group-item"},
    {title: " Linguaggio binario ", path: "PDF/prime/02_linguaggio_binario.pdf", class: "list-group-item"},
    {title: " Servizi Google ", path: "PDF/prime/03_servizi_google.pdf", class: "list-group-item"},
    {title: " Google documenti ", path: "PDF/prime/04_google_documenti.pdf", class: "list-group-item"},
    {title: " Esercizio 1 ", path: "esercizi/esercizio1.pdf", class: "list-group-item"},
    {title: " Esercizio 2 ", path: "esercizi/esercizio2.pdf", class: "list-group-item"},
    {title: " Esercizio 3 ", path: "esercizi/esercizio3.pdf", class: "list-group-item"},
    {title: " Cartella di condivisione ", path: "https://drive.google.com/drive/folders/1cZYfssulDOCWYic1HZatXuSRIYf1K5ro?usp=sharing", class: "list-group-item"},
    {title: " Spiegazione di come si condividono gli esercizi ", path: "PDF/prime/05_condivisione_esercizi.pdf", class: "list-group-item sposta"},
    {title: " Cartella condivisione esercizio 1 ", path: "https://drive.google.com/drive/folders/1MTtZEonLTUqQfosTX2DMOhled_c8LObU?usp=sharing", class: "list-group-item sposta"},
    {title: " Cartella condivisione orario Scolastico ", path: "https://drive.google.com/drive/folders/13ArU1snODo92YQ0F8hryVknDeFk2xApw?usp=sharing", class: "list-group-item sposta"},
    {title: " Cartella condivisione presentazione di prova ", path: "https://drive.google.com/drive/folders/1oqQKGUrY2ivTy_isQE0Gc8PUPi-8SQaM?usp=sharing", class: "list-group-item sposta"},
    {title: " Cartella condivisione form di prova ", path: "https://drive.google.com/drive/folders/1YptDla-g-rEVVhPNG20zRNOraH3U-pUQ?usp=sharing", class: "list-group-item sposta"}
];

var seconde = [
    {title: " Sicurezza nei laboratori ", path: "PDF/prime/00a_sicurezza_nei_laboratori.pdf", class: "list-group-item"},
    {title: " Sicurezza videoterminali ", path: "PDF/prime/00b_sicurezzaVDT.pdf", class: "list-group-item"},
    {title: " Conversioni ", path: "PDF/seconde/01b_conversioni.pdf", class: "list-group-item"},
    {title: " Geogebra file - Modificare inclinazione retta con slider ", path: "esercizi/01_slider_angolo_retta.ggb", class: "list-group-item"},
    {title: " Geogebra teoria - punti notevoli triangoli ", path: "PDF/seconde/02a_geogebra_triangoli.pdf", class: "list-group-item"},
    {title: " Geogebra pratica - costruzione ortocentro ", path: "PDF/seconde/02b_costruzione_ortocentro.pdf", class: "list-group-item sposta"},
    {title: " Geogebra pratica - costruzione incentro ", path: "PDF/seconde/02c_costruzione_incentro.pdf", class: "list-group-item sposta"},
    {title: " Geogebra pratica - costruzione baricentro ", path: "PDF/seconde/02d_costruzione_baricentro.pdf", class: "list-group-item sposta"},
    {title: " Geogebra pratica - costruzione circocentro ", path: "PDF/seconde/02e_costruzione_circocentro.pdf", class: "list-group-item sposta"},
    {title: " Geogebra file - ortocentro ", path: "esercizi/02a_ortocentro.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - incentro ", path: "esercizi/02b_incentro.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - circocentro ", path: "esercizi/02c_circocentro.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - baricentro ", path: "esercizi/02d_baricentro.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - excentro ", path: "esercizi/02e_excentro.ggb", class: "list-group-item sposta"},
    {title: " Geogebra pratica - rette ", path: "PDF/seconde/03_geogebra_rette.pdf", class: "list-group-item"},
    {title: " Geogebra file - retta passante per l'origine ", path: "esercizi/03a_retta_origine.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - retta generica nel piano ", path: "esercizi/03b_retta_generica.ggb", class: "list-group-item sposta"},
    {title: " Geogebra file - intersezione di rette ", path: "esercizi/03c_intersezione_rette.ggb", class: "list-group-item sposta"},
    {title: " Geogebra pratica - carta e penna vs geogebra ", path: "PDF/seconde/04_verificare_rette_geogebra.pdf", class: "list-group-item"},
    {title: " Lettura e interpretazione grafici ", path: "PDF/seconde/05_lettura_grafici.pdf", class: "list-group-item"},
    {title: " Esercizi grafici con Google Fogli ", path: "PDF/seconde/05b_esercizi_grafici.pdf", class: "list-group-item"},
    {title: " Tipi di grafici in fogli google ", path: "https://support.google.com/docs/answer/190718?hl=it", class: "list-group-item"},
    {title: " Esercizi vari ", path: "PDF/seconde/06_esercizi_vari.pdf", class: "list-group-item"}
];

var olimpiadi = [
    {title: " Link demo della piattaforma alle territoriali ", path: "https://territoriali.olinfo.it/", class: "list-group-item sposta"},
    {title: " Link piattaforma allenamento ", path: "https://training.olinfo.it/", class: "list-group-item sposta"},
    {title: " Link sito prof. Bugatti ", path: "https://www.imparando.net/sito/olimpiadi_di_informatica.htm", class: "list-group-item sposta"},
    {title: " Link documentazione C++ ", path: "https://en.cppreference.com/w/", class: "list-group-item sposta"},
    {title: " Link ambiente di gara (macchina virtuale linux) ", path: "https://olinfo.it/materiale/studenti/", class: "list-group-item sposta"},
    {title: " Standard Template Library STL ", path: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/", class: "list-group-item sposta"},
    {title: " File C++ della demo della piattaforma alle territoriali ", path: "/olimpiadi/territoriali.olinfo.it.zip", class: "list-group-item"}
];


/*

const f = async () => {

    for (i in olimpiadi)
    {
        olimpiadi[i].sectionId = "5e4d658bf1691f1d845b6dd9"
        olimpiadi[i].classes = olimpiadi[i].class
        olimpiadi[i].class = undefined
        olimpiadi[i].visible = true

        item = new Item(olimpiadi[i])
        await item.save()
    }

    try {
    } catch (error) {
        console.log(error)
    }
}

f()

*/