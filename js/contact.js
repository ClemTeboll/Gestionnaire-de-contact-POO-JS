import { getAddContactPromptValues, getModifyContactPromptValues, getDeleteContactPromptValues } from './main.js'

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
let newContact = new Contact("Llobet", "Clément", "clem@mail.com")
contactList.push(newContact);
console.log(contactList);

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

        const deleteContact = (chosenValue) => {
            for (let i = 0; i < contactList.length; i++) {
                if (contactList[i].name === chosenValue || contactList[i.surname] === chosenValue || contactList[i.email] === chosenValue) {
                    
                    let response = prompt(`Le contact à modifier est-il bien : ${contactList[i].surname} ${contactList[i].name} ${contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`);

                    if (
                        response === "Oui" ||
                        response === "oui" ||
                        response === "OUi" ||
                        response === "OuI" ||
                        response === "ouI" ||
                        response === "oUI" ||
                        response === "OUI"
                    ) {
                        const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenValue)
                
                        if (existingContactIndex > -1) {
                            this.contactList.splice(existingContactIndex, 1)
                        }
                        alert("Le contact a bien été supprimé.")
                        console.log(contactList);
                        return this.displayMenu();
                    }
                } else {
                    console.log("Non, ce n'est pas le bon contact");
                    alert("Nous avons compris que ce'nest pas le bon contact Vous allez pouvoir entrer le contact recherché de nouveau.")
                    modifyContact(getModifyContactPromptValues());
                    break;
                }
            }
        }

        const modifyContact = (nameToModify) => {
            for (let i = 0; i < contactList.length; i++) {
                if (contactList[i].name === nameToModify || contactList[i.surname] === nameToModify || contactList[i.email] === nameToModify) {

                    let response = prompt(`Le contact à modifier est-il bien : ${contactList[i].surname} ${contactList[i].name} ${contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`)

                    if (
                        response === "Oui" ||
                        response === "oui" ||
                        response === "OUi" ||
                        response === "OuI" ||
                        response === "ouI" ||
                        response === "oUI" ||
                        response === "OUI"
                    ) {
                        let modifyName = prompt(`Quel est le nouveau nom du contact ?`)
                        let checkModifiedName = contactList[i].checkName(modifyName);
                        if (checkModifiedName == null) {
                            contactList[i].name = contactList[i].name;
                        }
                        contactList[i].name = checkModifiedName;

                        let modifySurname = prompt(`Quel est le nouveau prénom du contact ?`);
                        let checkModifiedSurname = contactList[i].checkSurname(modifySurname);
                        if (checkModifiedSurname == null) {
                            contactList[i].surname = contactList[i].surname;
                        }
                        contactList[i].surname = checkModifiedSurname;

                        let modifyEmail = prompt(`Quel est le nouvel email du contact ?`)
                        let checkModifiedEmail = contactList[i].checkEmail(modifyEmail);
                        if (checkModifiedEmail ==  null) {
                            contactList[i].email = contactList[i].email;
                        }
                        contactList[i].email = checkModifiedEmail;
                        
                        console.log(contactList[i]);

                        alert(`Merci ! Le contact a bien été modifié. Il a maintenant les coordonnées suivantes : ${contactList[i].surname} ${contactList[i].name} ${contactList[i].email}`)
                    } else {
                        console.log("Non, ce n'est pas le bon contact");
                        alert("Nous avons compris que ce n'est pas le bon contact.\n Vous allez pouvoir entrer le contact recherché de nouveau.")
                        modifyContact(getModifyContactPromptValues());
                        break;
                    }

                } else {
                    alert("Désolé, ce contact n'existe pas dans notre base. Veuillez réessayer.")
                    modifyContact(getModifyContactPromptValues());
                }
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
                deleteContact(getDeleteContactPromptValues());
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