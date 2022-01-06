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

    constructor(name, surname, email) {
        super(name, surname, email);
    }

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
                prompt('Quel contact souhaitez-vous supprimer ?')
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

    addContact() {

        getPromptValues();

        let name = getPromptValues();
        console.log(name);

        contactList.forEach((contact) => {
            if (this.email === contact.email) {
                alert("Cet email est déjà associé à un contact");           
            }
        })

        let newContact = new Contact(name, surname, email)
        contactList.push(newContact);
    }

    modifyContact(newName, newSurname, newEmail) {

        for (i = 0; i < contactList.length; i++) {
            if (contactList[i.name] === newName) {
                
                contactList[i.name] = newName;
                newSurname == undefined ? null : contactList[i.surname] = newSurname;
                newEmail == undefined ? null : contactList[i.email] = newEmail;
            }
        }
    }

    deleteContact(prompt) {
        for (i = 0; i < contactList.length; i++) {
            if (contactList[i.name] === prompt) {
                contactList.splice([i - 1], 1)
            } 
        }
    }
}

export { Contact, ContactManager }