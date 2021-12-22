import { Contact } from "./contact.js";

let clement = new Contact("Llobet", "Clément", "clement.llobet@jasparo.fr");
let erwan = new Contact("Morio", "Erwan", "erwan.morio@jasparo.fr");
let fabrice = new Contact("Tripault", "Fabrice", "fabrice.tripault@jasparo.fr");
let olivia = new Contact("Wojtala", "Olivia", "olivia.wojtala@jasparo.fr");


clement.displayInfo();
erwan.displayInfo();
fabrice.displayInfo();
olivia.displayInfo();

const checkName = (name) => {
    if (name.length <= 2) {
        prompt("Votre nom doit avoir plus de 2 caractères");
    }
}

const checkSurname = (surname) => {
    if (surname.length <= 2) {
        prompt("Votre prénom doit avoir plus de 2 caractères");
    }
}

const regex = /(?<name>.+)@(?<provider>\w+)\.(?<country>.+)/g;