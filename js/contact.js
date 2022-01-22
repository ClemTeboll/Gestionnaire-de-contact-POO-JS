import { getAddContactPromptValues, getModifyContactPromptValues } from './main.js'

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

        const addContact = ([object, name, surname, email]) => {
            const existingContact = this.contactList.find(contact => contact.email === email)
            if (!existingContact) {

                object.name = name;
                object.surname = surname;
                object.email = email;

                contactList.push(object);
                console.log(contactList);
            }
            alert("Le contact : " + surname + " " + name + " " + email + " " + "a bien été ajouté.")
            return this.displayMenu();
        }

        const deleteContact = (chosenName) => {
            const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenName)
            if (existingContactIndex > -1) {
                this.contactList.splice(existingContactIndex, 1)
            }
            return this.displayMenu();
        }

        const modifyContact = (nameToModify) => {
            for (let i = 0; i < contactList.length; i++) {
                if (contactList[i].name === nameToModify || contactList[i.surname] === nameToModify || contactList[i.email] === nameToModify) {

                    let responseToPrompt = prompt(`Le contact à modifier est-il bien : ${contactList[i].surname} ${contactList[i].name} ${contactList[i].email} ?`, "Oui", "Non")
                    return responseToPrompt
                    
                } else {
                    alert("Désolé, ce contact n'existe pas dans notre base. Veuillez réessayer.")
                    modifyContact(getModifyContactPromptValues());
                }

                let modifyName = prompt("Quel est le nouveau nom du contact ? (appuyez sur entrée si vous ne voulez pas le modifier).")
                modifyName = "" ? 
                    contactList[i].name = contactList[i].name
                    :
                    contactList[i].name = modifyName;

                let modifySurname = prompt("Quel est le nouveau prénom du contact ? (appuyez sur entrée si vous ne voulez pas le modifier).")
                modifySurname = "" ?
                    contactList[i].surname = contactList[i].surname 
                    : 
                    contactList[i].surname = modifySurname;

                let modifyEmail = prompt("Quel est le nouveau nom du contact ?")
                modifyEmail = "" ?
                    contactList[i].email = contactList[i].email
                    :
                    contactList[i].email = modifyEmail;

                console.log(contactList[i]);

                alert(`Merci ! Le contact a bien été modifié. Il a maintenant les coordonnées suivantes : ${contactList[i].surname} ${contactList[i].name} ${contactList[i].email}`)
            }
            return this.displayMenu();
        }

        switch (showPromptChoice) {
            case "1":
                showContactList();
                break;
            case "2":
                addContact(getAddContactPromptValues());
                break;
            case "3":
                modifyContact(getModifyContactPromptValues());
                break;
            case "4":
                let promptDelete = prompt('Quel contact souhaitez-vous supprimer ?');
                deleteContact(promptDelete);
                break;
            case "5":
                alert("Au revoir !");
                break;
            default:
                alert("Cette commande n'est pas reconnue. Choisissez une instruction entre 1 et 5");
                return this.displayMenu()
        }
    }
}

export { Contact, ContactManager }