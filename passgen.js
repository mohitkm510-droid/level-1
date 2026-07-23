function generatePassword(){

    let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    let length = 12;

    for(let i = 0; i < length; i++){

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}