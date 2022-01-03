class Contact {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    displayInfo() {
        console.log("Nom : " + this.name + " || Prénom : " + this.surname + " || email : " + this.email);
    }
}

const contactList = [];

class ContactManager extends Contact {

    super()

    displayMenu() {
        prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")

        switch (prompt) {
            case "1":
                contactList()
            break;
            case "2":
                addContact()
            break;
            case "3":
                prompt('Quel contact souhaitez-vous modifier ?')
                modifyContact()
            break;
            case "4":
                deleteContact()
            break;
            case "5" :
                alert("Au revoir !")
            break;
            default:
                prompt("Cette commande n'est pas reconnue. Choisissez une instruction entre 1 et 5");
                displayMenu()
        }
    }

    contactList() {
        console.log(contactList);
        displayMenu()
    }

    addContact(name, email) {
        let newContact = new Contact(name, email)
        contactList.push(newContact);
    }

    modifyContact(newName, newSurname, newEmail) {
        for (i = 0; i < contactList.length; i++) {
            if (contactList[i].name === prompt) {
                contactList[i].name = newName;
                contactList[i].surname = newSurname;
                contactList[i].email = newEmail;
                break;
            }
        }
    }

    deleteContact() {
        
    }

}

export { Contact, ContactManager }