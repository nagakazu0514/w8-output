const email = document.querySelector("#email");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

email.value = localStorage.getItem('key');
    password.value = localStorage.getItem('key1');

saveBtn.addEventListener("click",(e)=>{
    e.preventDefault(); 

    const inputEmail = email.value;
    const inputPassword = password.value;

    localStorage.setItem("key",inputEmail);
    localStorage.setItem("key1",inputPassword);
});