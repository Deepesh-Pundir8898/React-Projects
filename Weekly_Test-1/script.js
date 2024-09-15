const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet ="abcdefghijklmnopqrstuvwxyz";
const numberSet ="0123456789";
const symbolSet ="!@#$%^&*()_+?><:{}~`',.*/-[]";


const mainContainer = document.querySelector(".main-container");
const showPassword = document.querySelector("#show-password");
const passwordLength = document.querySelector("#password-length");
const copyBtn = document.getElementById("copy-btn");

const genrateBtn = document.getElementById("genrate-password");
const upperCaseInput = document.getElementById("upper-case");
const lowerCaseInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");

const randomData =(dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const genratePassword = (password ="")=>{
    if(upperCaseInput.checked){
        password += randomData(upperSet);
    }
    if(lowerCaseInput.checked){
        password += randomData(lowerSet);
    }
    if(numberInput.checked){
        password += randomData(numberSet);
    }
    if(symbolInput.checked){
        password += randomData(symbolSet);
    }
    if(password.length < passwordLength.value){
        return genratePassword(password);
    }
    return password;
}

genrateBtn.addEventListener('click',()=>{
    if(upperCaseInput.checked || lowerCaseInput.checked ||numberInput.checked  || symbolInput.checked){
        const password =genratePassword();
        showPassword.value=password.slice(0,passwordLength.value)
    }
    else{
        alert("Please checked atleast one checkBox for genrating the Password ");
    }

})

copyBtn.addEventListener('click' ,()=>{

    showPassword.select();
    showPassword.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(showPassword.value);

    alert("Copied the Password : " + showPassword.value)
})

addEventListener('DOMContentLoaded' ,()=>{
    mainContainer.classList.add('move-left');
})

