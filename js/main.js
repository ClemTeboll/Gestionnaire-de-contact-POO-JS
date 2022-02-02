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
    let contactName = document.querySelector(".infos__name");
    return contactName.textContent
}

export const getDeleteContactPromptValues = () => {
    let contactName = document.querySelector(".infos__name");
    console.log(contactName.textContent);
    return contactName.textContent
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

contactManager.showContactList();

let allLiContacts = document.querySelectorAll(".contact-name-and-surname");
console.log(allLiContacts);

allLiContacts.forEach((contact) => {
    contact.addEventListener('click', () => {

        let contactName = document.querySelector(".infos__name");
        let contactSurname = document.querySelector(".infos__surname");
        let contactEmail = document.querySelector(".infos__email");

        let localStorageKeys = returnAllLocalStorageKeys();
        
        for (let i = 0; i < localStorageKeys.length; i++) {
            
            if (`${localStorageKeys[i].surname} ${localStorageKeys[i].name}` === contact.textContent) {
                contactName.textContent = `${localStorageKeys[i].name}`;
                contactSurname.textContent = `${localStorageKeys[i].surname}`;
                contactEmail.textContent = `${localStorageKeys[i].email}`;
                break;
            }
        }
    })
})


let addButton = document.querySelector(".button__green");
addButton.addEventListener('click', () => {
    contactManager.addContact(getAddContactPromptValues());
})


let modifyButton = document.querySelector(".button__blue");
modifyButton.addEventListener('click', () => {
    contactManager.modifyContact(getModifyContactPromptValues());
})


let deleteButton = document.querySelector(".button__red");
deleteButton.addEventListener('click', () => {
    contactManager.deleteContact(getDeleteContactPromptValues());
})