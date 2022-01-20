import { getPromptValues } from './main.js'

class Contact {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    displayInfo() {
        console.log("Nom : " + this.name + " || Prénom : " + this.surname + " || email : " + this.email);
    }

    checkName(name) {
        if (name.length <= 2) {
            let promptNameResponse = prompt("Votre nom doit avoir plus de 2 caractères. Veuillez réessayer.");
            return this.checkName(promptNameResponse)
        }
        return name
    }
    
    checkSurname(surname) {
        if (surname.length <= 2) {
            let promptSurnameResponse = prompt("Votre prénom doit avoir plus de 2 caractères. Veuillez réessayer.");
            return this.checkSurname(promptSurnameResponse)
        }
        return surname
    }
    
    checkEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.exec(email)) {
            let promptEmailResponse = prompt("Votre email n'est pas correct. Veuillez entrer un email valide. Veuillez réessayer.");
            return this.checkEmail(promptEmailResponse)
        }
        return email
    }
}

export const contactList = [];

class ContactManager {
    constructor(list) {
        this.contactList = list ? [...list] : [];
    }
    
    displayMenu() {
        let showPromptChoice = prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")

        const showContactList = () => {
            alert(this.contactList);
            return this.displayMenu()
        }

        const addContact = (name, surname, email) => {
            const existingContact = this.contactList.find(contact => contact.email === email)
            if (!existingContact) {
                let newContact = new Contact(name, surname, email)
                contactList.push(newContact);
                console.log(contactList);
            } 
        }

        const deleteContact = (chosenName) => {
            const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenName)
            if (existingContactIndex > -1) {
                this.contactList.splice(existingContactIndex, 1)
            }
        }

        const modifyContact = (newName, newSurname, newEmail) => {
            for (i = 0; i < contactList.length; i++) {
                if (contactList[i.name] === newName) {
                    contactList[i.name] = newName;
                    newSurname = undefined ? null : contactList[i.surname] = newSurname;
                    newEmail = undefined ? null : contactList[i.email] = newEmail;
                }
            }
        }
        
        switch (showPromptChoice) {
            case "1":
                showContactList();
            break;
            case "2":
                addContact(getPromptValues());
            break;
            case "3":
                let promptModify = prompt('Quel contact souhaitez-vous modifier ?');
                modifyContact(promptModify);
            break;
            case "4":
                let promptDelete = prompt('Quel contact souhaitez-vous supprimer ?');
                deleteContact(promptDelete);
            break;
            case "5":
                alert("Au revoir !");
            break;
            default:
                let falsePrompt = alert("Cette commande n'est pas reconnue. Choisissez une instruction entre 1 et 5");
                if (falsePrompt != Number) {
                    return this.displayMenu()
                }
        }
    }
}

export { Contact, ContactManager }