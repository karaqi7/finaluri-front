document.addEventListener('DOMContentLoaded', () => {
    var form = document.querySelector("#form")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        var name = document.querySelector("#name").value
        var email = document.querySelector("#email").value
        var tel = document.querySelector("#tel").value
        var messageText = document.querySelector("#messageText").value
        const formInfo = {
            name: name,
            email: email,
            tel: tel,
            message: messageText
        };
        const jsonInfo = JSON.stringify(formInfo)
        console.log(`Form Submitted!\n${jsonInfo}\n`)
    });
});
