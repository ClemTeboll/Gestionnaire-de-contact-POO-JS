import { Contact } from "./contact.js";
import { ContactManager } from "./contactManager.js"

let clement = new Contact("Llobet", "Clément", "clement.llobet@jasparo.fr");
let erwan = new Contact("Morio", "Erwan", "erwan.morio@jasparo.fr");
let fabrice = new Contact("Tripault", "Fabrice", "fabrice.tripault@jasparo.fr");
let olivia = new Contact("Wojtala", "Olivia", "olivia.wojtala@jasparo.fr");

clement.displayInfo();
erwan.displayInfo();
fabrice.displayInfo();
olivia.displayInfo();

export const getAddContactPromptValues = () => {

    let newContact = new Contact();

    let promptNameValue = prompt("Veuillez entrer votre nom.");
    let name = newContact.checkName(promptNameValue);

    let promptSurnameValue = prompt("Veuillez entrer votre prénom.");
    let surname = newContact.checkSurname(promptSurnameValue);
    
    let promptEmailValue = prompt("Veuillez entrer votre email.");
    let email = newContact.checkEmail(promptEmailValue);

    return [newContact, name, surname, email]
}

export const getModifyContactPromptValues = () => {
    let promptModifyName = prompt("Entrez le nom du contact que vous souhaitez modifier :");
    return promptModifyName
}

export const getDeleteContactPromptValues = () => {
    let promptDeleteName = prompt("Entrez le nom du contact que vous souhaitez supprimer :");
    return promptDeleteName
}

export const returnAllLocalStorageKeys = () => {
    let contacts = [];
    for (let i = 0; i < localStorage.length; i++) {
        let objectToAdd = JSON.parse(localStorage.getItem(localStorage.key(i)));
        contacts.push(objectToAdd);
    }
    return contacts
}

let contactManager = new ContactManager(returnAllLocalStorageKeys());
contactManager.displayMenu();
