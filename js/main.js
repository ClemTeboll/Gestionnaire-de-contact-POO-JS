import { Contact, ContactManager, contactList } from "./contact.js";

let clement = new Contact("Llobet", "Clément", "clement.llobet@jasparo.fr");
let erwan = new Contact("Morio", "Erwan", "erwan.morio@jasparo.fr");
let fabrice = new Contact("Tripault", "Fabrice", "fabrice.tripault@jasparo.fr");
let olivia = new Contact("Wojtala", "Olivia", "olivia.wojtala@jasparo.fr");

clement.displayInfo();
erwan.displayInfo();
fabrice.displayInfo();
olivia.displayInfo();

export const getPromptValues = () => {

    let newContact = new Contact();

    let promptNameValue = prompt("Veuillez entrer votre nom.");
    newContact.name = newContact.checkName(promptNameValue);

    let promptSurnameValue = prompt("Veuillez entrer votre prénom.");
    newContact.surname = newContact.checkSurname(promptSurnameValue);
    
    let promptEmailValue = prompt("Veuillez entrer votre email.");
    newContact.email = newContact.checkEmail(promptEmailValue);
}

let contactManager = new ContactManager();
contactManager.displayMenu();