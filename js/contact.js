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

export { Contact }