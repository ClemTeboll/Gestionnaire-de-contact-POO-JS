import { Contact } from './contact.js';
import { getAddContactPromptValues, getModifyContactPromptValues, getDeleteContactPromptValues } from './main.js'

class ContactManager extends Contact {
    constructor(list) {
        super();
        this.contactList = list ? list : [];
    }

    showContactList() {

        let showListButton = document.getElementById("contact-list");
        showListButton.innerHTML = this.contactList.map(contact => `<li class="contact-name-and-surname">${contact.surname} ${contact.name}</li>` ).join('')          
    }

    addContact([object, name, surname, email]) {

        const existingContact = this.contactList.find(contact => contact.email === email)
        if (!existingContact) {

            object= {name, surname, email};
            this.contactList.push(object);
            localStorage.setItem(`${object.surname} ${object.name}`, JSON.stringify(object));
            this.setItemInList(object);
            alert("Le contact : " + surname + " " + name + " " + email + " " + "a bien été ajouté.")

        } else {
            alert("Le contact existe déjà.")
        }
        
       // window.location.reload()
    }

    setItemInList(contact){
        const item = `<li class="contact-name-and-surname">${contact.surname} ${contact.name}</li>`
        let showListButton = document.getElementById("contact-list");
        showListButton.innerHTML += item;
        const contactList = Array.from(showListButton.querySelectorAll('.contact-name-and-surname'));
        contactList[contactList.length - 1].addEventListener('click', () => {
            document.querySelector(".infos__name").textContent = contact.name;
            let contactSurname = document.querySelector(".infos__surname");
            let contactEmail = document.querySelector(".infos__email");

            contactSurname.textContent = contact.surname;
            contactEmail.textContent = contact.email 
        })
    }
    
    deleteContact(chosenValue) {
        for (let i = 0; i < this.contactList.length; i++) {
            if (this.contactList[i].name === chosenValue || this.contactList[i.surname] === chosenValue || this.contactList[i.email] === chosenValue) {
                
                let response = prompt(`Voulez-vous vraiment supprimer le contact : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`);

                if (response.toLowerCase() === "oui") {
                    const existingContactIndex = this.contactList.findIndex(contact => contact.name === chosenValue)
                    localStorage.removeItem(`${this.contactList[i].surname} ${this.contactList[i].name}`);
                    
                    alert("Le contact a bien été supprimé.")
                    window.location.reload()
                } else {
                    alert("Le contact n'a pas été modifié.")
                    break;
                }
            } 
        }
    }

    modifyContact(nameToModify) {

        for (let i = 0; i < this.contactList.length; i++) {
            if (this.contactList[i].name === nameToModify || this.contactList[i].surname === nameToModify || this.contactList[i].email === nameToModify) {

                let response = prompt(`Le contact à modifier est-il bien : ${this.contactList[i].surname} ${this.contactList[i].name} ${this.contactList[i].email} ? Entrez "Oui" ou "Non" dans la zone de texte ci-dessous :`)

                if (response.toLowerCase() === "oui") {

                    let deleteKeyInLocalStorage = `${this.contactList[i].surname} ${this.contactList[i].name}`;
                    
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
                    localStorage.setItem(`${this.contactList[i].surname} ${this.contactList[i].name}`, JSON.stringify(this.contactList[i]));
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
}

export { ContactManager }