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

    displayMenu()  {
        prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")

        switch (prompt) {
            case "1":
                contactList()
            break;
            case "2":
                addContact()
            break;
            case "3":
                modifyContact()
            break;
            case "4":
                deleteContact()
            break;
            case "5" :
                alert("Au revoir !")
            break;
            default:
                "Cette commande n'est pas reconnue. Choisissez une instruction entre 1 et 5";
                displayMenu()
        }
    }

    contactList() {
        console.log(contactList);
        displayMenu()
    }

    addContact() {
        let newContact = new Contact(this.name, this.surname, this.email)
        contactList.push(newContact);
    }

    modifyContact() {

    }

    deleteContact() {

    }

}

export { Contact, ContactManager }