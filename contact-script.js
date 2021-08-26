// for the contact us page
const btn = document.querySelector('button')
const inputs = document.querySelector('form')

btn.addEventListener('click', () => {
    Email.send({
        SecureToken: "82f9e6d6-185f-4abd-882a-39c49c1c0532",
        To: "vsunnycreations@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Contact Us Submission - V Sunny Creations",
        Body: inputs.elements["message"].value + "<br>" + inputs.elements["firstname"].value + " " + inputs.elements["lastname"].value + "<br>" + inputs.elements["email"].value,
    }).then(msg => alert("The message was sent successfully, have a great day!"))
})
