import { Contact } from './contact.js';
import { getAddContactPromptValues, getModifyContactPromptValues, getDeleteContactPromptValues } from './main.js'

class ContactManager extends Contact {
    constructor(list) {
        super();
        this.contactList = list ? list : [];
    }

    displayMenu() {
        let showPromptChoice = prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts");

        const showContactList = () => {
            for (let i = 0; i < this.contactList.length; i++) {
                console.log(this.contactList[i]);
            }
            alert("La liste est affichée.")
            return this.displayMenu()
        }

        const addContact = ([object, name, surname, email]) => {

            const existingContact = this.contactList.find(contact => contact.email === email)
            if (!existingContact) {

                object.name = name;
                object.surname = surname;
                object.email = email;

                localStorage.setItem(`${object.name}||${object.surname}||${object.email}`, JSON.stringify(object));

                alert("Le contact : " + surname + " " + name + " " + email + " " + "a bien été ajouté.")
            } else {
                alert("Le contact existe déjà.")
            }

            window.location.reload()
        }

        const deleteContact = (chosenValue) => {

            for (let i = 0; i < this.contactList.length; i++) {

                if (this.contactList[i].name === chosenValue || this.contactList[i.surname] === chosenValue || this.contactList[i.email] === chosenValue) {
                    
                    let response = prompt(`Le contact à modifier est-il bien : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`);

                    if (response.toLowerCase() === "oui") {
                        const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenValue)
                        localStorage.removeItem(`${this.contactList[i].name}||${this.contactList[i].surname}||${this.contactList[i].email}`);
                        
                        alert("Le contact a bien été supprimé.")

                        window.location.reload()
                    }
                } else {
                    alert("Nous avons compris que ce n'est pas le bon contact. \nVous allez pouvoir entrer le contact recherché de nouveau.")
                    modifyContact(getModifyContactPromptValues());
                    break;
                }
            }
        }

        const modifyContact = (nameToModify) => {

            for (let i = 0; i < this.contactList.length; i++) {
                if (this.contactList[i].name === nameToModify || this.contactList[i].surname === nameToModify || this.contactList[i].email === nameToModify) {

                    let response = prompt(`Le contact à modifier est-il bien : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`)

                    if (response.toLowerCase() === "oui") {

                        let deleteKeyInLocalStorage = `${this.contactList[i].name}||${this.contactList[i].surname}||${this.contactList[i].email}`;
                        
                        let modifyName = prompt(`Quel est le nouveau nom du contact ?`)
                        let checkModifiedName = this.checkName(modifyName);
                        if (checkModifiedName == null) {
                            this.contactList[i].name = this.contactList[i].name;
                        } else {
                            this.contactList[i].name = checkModifiedName;
                        }

                        let modifySurname = prompt(`Quel est le nouveau prénom du contact ?`);
                        let checkModifiedSurname = this.checkSurname(modifySurname);
                        if (checkModifiedSurname == null) {
                            this.contactList[i].surname = this.contactList[i].surname;
                        } else {
                            this.contactList[i].surname = checkModifiedSurname;
                        }

                        let modifyEmail = prompt(`Quel est le nouvel email du contact ?`)
                        let checkModifiedEmail = this.checkEmail(modifyEmail);
                        if (checkModifiedEmail ==  null) {
                            this.contactList[i].email = this.contactList[i].email;
                        } else {
                            this.contactList[i].email = checkModifiedEmail;
                        }
                        
                        localStorage.removeItem(deleteKeyInLocalStorage);
                        localStorage.setItem(`${this.contactList[i].name}||${this.contactList[i].surname}||${this.contactList[i].email}`, JSON.stringify(this.contactList[i]));
                        alert(`Merci ! Le contact a bien été modifié. Il a maintenant les coordonnées suivantes : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email}`)
                        window.location.reload()      
                    } else {
                        alert("Nous avons compris que ce n'est pas le bon contact. \nVous allez pouvoir entrer le contact recherché de nouveau.")
                        modifyContact(getModifyContactPromptValues());
                        break;
                    }
                }
            }
            
            alert("Désolé, ce contact n'existe pas dans notre base. Veuillez réessayer.")
            modifyContact(getModifyContactPromptValues());
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

export { ContactManager }