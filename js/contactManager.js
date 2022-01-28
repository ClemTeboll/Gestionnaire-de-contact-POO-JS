import { getAddContactPromptValues, getModifyContactPromptValues, getDeleteContactPromptValues } from './main.js'

class ContactManager {
    constructor(list) {
        this.contactList = list ? [Object.entries(list)] : [];
    }

    displayMenu() {
        let showPromptChoice = prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")

        const showContactList = () => {
            alert(this.contactList);
            return this.displayMenu()
        }

        const addContact = ([object, name, surname, email]) => {
            console.log(this.contactList);
            const existingContact = this.contactList.find(contact => contact.email === email)
            if (!existingContact) {

                object.name = name;
                object.surname = surname;
                object.email = email;

                this.contactList.push(object);
                console.log(this.contactList);
                localStorage.setItem(`${object.name}||${object.surname}||${object.email}`, JSON.stringify(object));

                alert("Le contact : " + surname + " " + name + " " + email + " " + "a bien été ajouté.")
            } else {
                alert("Le contact existe déjà.")
            }
            
            return this.displayMenu();
        }

        const deleteContact = (chosenValue) => {
            for (let i = 0; i < this.contactList.length; i++) {
                if (this.contactList[i].name === chosenValue || this.contactList[i.surname] === chosenValue || this.contactList[i.email] === chosenValue) {
                    
                    let response = prompt(`Le contact à modifier est-il bien : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`);

                    if (response.toLowerCase() === "oui") {
                        const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenValue)
                
                        if (existingContactIndex > -1) {
                            this.contactList.splice(existingContactIndex, 1)
                        }
                        alert("Le contact a bien été supprimé.")
                        console.log(this.contactList);
                        localStorage.setItem("object", JSON.stringify(this.contactList));
                        return this.displayMenu();
                    }
                } else {
                    console.log("Non, ce n'est pas le bon contact");
                    alert("Nous avons compris que ce n'est pas le bon contact. \nVous allez pouvoir entrer le contact recherché de nouveau.")
                    modifyContact(getModifyContactPromptValues());
                    break;
                }
            }
        }

        const modifyContact = (nameToModify) => {
            for (let i = 0; i < this.contactList.length; i++) {
                if (this.contactList[i].name === nameToModify || this.contactList[i.surname] === nameToModify || this.contactList[i.email] === nameToModify) {

                    let response = prompt(`Le contact à modifier est-il bien : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`)

                    if (response.toLowerCase() === "oui") {

                        let modifyName = prompt(`Quel est le nouveau nom du contact ?`)
                        let checkModifiedName = this.contactList[i].checkName(modifyName);
                        if (checkModifiedName == null) {
                            this.contactList[i].name = this.contactList[i].name;
                        }
                        this.contactList[i].name = checkModifiedName;

                        let modifySurname = prompt(`Quel est le nouveau prénom du contact ?`);
                        let checkModifiedSurname = this.contactList[i].checkSurname(modifySurname);
                        if (checkModifiedSurname == null) {
                            this.contactList[i].surname = this.contactList[i].surname;
                        }
                        this.contactList[i].surname = checkModifiedSurname;

                        let modifyEmail = prompt(`Quel est le nouvel email du contact ?`)
                        let checkModifiedEmail = this.contactList[i].checkEmail(modifyEmail);
                        if (checkModifiedEmail ==  null) {
                            this.contactList[i].email = this.contactList[i].email;
                        }
                        this.contactList[i].email = checkModifiedEmail;
                        
                        console.log(this.contactList[i]);

                        alert(`Merci ! Le contact a bien été modifié. Il a maintenant les coordonnées suivantes : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email}`)
                        return this.displayMenu();       
                    } else {
                        console.log("Non, ce n'est pas le bon contact");
                        alert("Nous avons compris que ce n'est pas le bon contact.\n Vous allez pouvoir entrer le contact recherché de nouveau.")
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