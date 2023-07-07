const textBox = document.getElementById('email');
const emailInput = document.querySelector('.emailInput');

function myFunction() {
    const emailInput = textBox.value;
    window.localStorage.setItem('input', emailInput);
    let errorMsg = document.querySelector('.errorMsg');
    if (emailInput.includes("@") && emailInput.includes(".")) {
        textBox.classList.remove('emailError');
        errorMsg.style.display = "none";
        window.location.href = "sucess.html";
        console.log('ok')

    }
    else {
        textBox.classList.add('emailError');
        errorMsg.style.display = "block";

        console.log('invalid')

    }
    console.log(emailInput)
}
function dismiss() {
    window.location.href = "index.html";
}
emailInput.innerHTML = localStorage.getItem("input")
