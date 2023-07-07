const textBox = document.getElementById('email');


function myFunction() {
    const emailInput = textBox.value;
    let errorMsg = document.querySelector('.errorMsg');
    if (emailInput.includes("@") && emailInput.includes(".")) {
        textBox.classList.remove('emailError');
        errorMsg.style.display = "none";

        console.log('ok')

    }
    else {
        textBox.classList.add('emailError');
        errorMsg.style.display = "block";

        console.log('invalid')

    }
}
