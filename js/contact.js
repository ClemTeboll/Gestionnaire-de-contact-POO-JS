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
    // constructor(contactList, addContact, modifyContact, deleteContact, quitContactManager) {
    //     this.contactList = contactList;
    //     this.addContact  = addContact;
    //     this.modifyContact = modifyContact;
    //     this.deleteContact = deleteContact;
    //     this.quitContactManager = quitContactManager;
    // }

    displayMenu()  {
        prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")
    }

    
}

export { Contact, ContactManager }