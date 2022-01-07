import { Contact, ContactManager } from "./contact.js";

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
        console.log("Votre nom doit avoir plus de 2 caractères. Veuillez réessayer.");
    } else {
        return name
    } 
    // Ici, envoyer la valeur du nom dans le localStorage
}

const checkSurname = (surname) => {
    if (surname.length <= 2) {
        console.log("Votre prénom doit avoir plus de 2 caractères. Veuillez réessayer.");
    } else {
        return surname
    }
    // Ici, envoyer la valeur du prénom dans le localStorage
}

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkEmail = (email) => {
    if (!regex.exec(email)) {
        console.log("Votre email n'est pas correct. Veuillez entrer un email valide. Veuillez réessayer.");
    }
    // Ici, envoyer la valeur de l'email dans le localStorage
}

// Apparition du prompt pour le nom. Demander à entrer le nom
// Si la vérification du nom est OK, sauver le nom passer au prompt prénom
// Demander la prénom
// Si la vérification du prénom est OK, sauver le prénom passer au prompt email
// Demander l'email
// Vérifier l'email. Enregistrer les informations et les passer en paramètre

export const getPromptValues = () => {
    let promptNameValue = prompt("Veuillez entrer votre nom.");
    let promptSurnameValue = prompt("Veuillez entrer votre prénom.");
    let promptEmailValue = prompt("Veuillez entrer votre email.");
    
    if (checkName(promptNameValue) || checkSurname(promptSurnameValue) || checkEmail(promptEmailValue)) {
        let newContact = new Contact(promptNameValue, promptSurnameValue, promptEmailValue)
        console.log(newContact);
    } else {
        prompt("Une ou plusieurs informations sont incorrectes. Merci de réessayer")
    }
}

let contactManager = new ContactManager();

contactManager.displayMenu();