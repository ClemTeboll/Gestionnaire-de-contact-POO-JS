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
}

const contactList = [];

class ContactManager extends Contact {

    constructor(name, surname, email) {
        super(name, surname, email);
    }
    
    displayMenu() {
        let showPromptChoice = prompt("Saisissez le numéro correspondant à votre choix : \n1 - Lister les contacts \n2 - Ajouter un nouveau contact \n3 - Modifier un contact existant \n4 - Supprimer un contact \n5 - Quitter le gestionnaire de contacts")

        const showContactList = () => {
            console.log(contactList);
            // displayMenu()
        }

        const addContact = (name, surname, email) => {
            contactList.forEach((contact) => {
                if (this.email === contact.email) {
                    alert("Cet email est déjà associé à un contact");           
                } else {
                    let newContact = new Contact(name, surname, email)
                    contactList.push(newContact);
                    console.log(contactList);
                }
            })  
        }

        const deleteContact = () => {
            // for (i = 0; i < contactList.length; i++) {
            //     if (contactList[i.name] === chosenName) {
            //         contactList.splice([i - 1], 1)
            //     } 
            // }
            console.log("SUPPRIME !");
        }

        const modifyContact = (newName, newSurname, newEmail) => {
            for (i = 0; i < contactList.length; i++) {
                if (contactList[i.name] === newName) {
                    contactList[i.name] = newName;
                    newSurname == undefined ? null : contactList[i.surname] = newSurname;
                    newEmail == undefined ? null : contactList[i.email] = newEmail;
                }
            }
        }
        
        switch (showPromptChoice) {
            case "1":
                showContactList()
            break;
            case "2":
                let promptAdd = getPromptValues()
                addContact(promptAdd)
            break;
            case "3":
                let promptModify = prompt('Quel contact souhaitez-vous modifier ?');
                modifyContact(promptModify)
            break;
            case "4":
                let promptDelete = prompt('Quel contact souhaitez-vous supprimer ?');
                deleteContact(promptDelete)
            break;
            case "5":
                alert("Au revoir !");
            break;
            default:
                prompt("Cette commande n'est pas reconnue. Choisissez une instruction entre 1 et 5");
                displayMenu()
        }  
    }
}

export { Contact, ContactManager }