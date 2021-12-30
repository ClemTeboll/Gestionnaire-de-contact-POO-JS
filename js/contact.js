 class Contact {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    displayInfo() {
        console.log("name :" + this.name + "|| surname :" + this.surname + "|| email : " + this.email);
    }
}


class ContactManager {
    constructor(contactList, addContact, modifyContact, deleteContact, quitContactManager) {
        this.contactList = contactList;
        this.addContact  = addContact;
        this.modifyContact = modifyContact;
        this.deleteContact = deleteContact;
        this.quitContactManager = quitContactManager;
    }



    displayMenu()  {
        prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")
    }

    listContact(contactNames, contactSurnames, contactEmails) {    
        prompt(contactNames, contactSurnames, contactEmails);
    }

    addContact(newContactName, newContactSurname, newContactEmail) {

        prompt("Entez vos noms, prénoms et email")

        if (newContactEmail === listContact.contactEmails) {
            return prompt("Cet email est déjà associé à un autre contact")
        }

        if (checkName(newContactName) && checkSurname(newContactSurname) && checkEmail(newContactEmail)) {
            let thisContact = new Contact(newContactName, newContactSurname, newContactEmail);
            console.log(thisContact);
            return thisContact
        }

        
    }
}

export { Contact, ContactManager }