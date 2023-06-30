document.addEventListener('DOMContentLoaded', ()=>{
    var form = document.getElementById("#form")
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault
        var name = document.getElementById("#name").value
        var email = document.getElementById("#email").value
        var tel = document.getElementById("#tel").value
        var message = document.getElementById("#message").value
        const formInfo = {
            name: name,
            email: email,
            tel: tel,
            message: message
        }
        const jsonInfo = JSON.stringify(formInfo)
        console.log(`Form Submitted!
        ${jsonInfo}

        `)
    })

})
