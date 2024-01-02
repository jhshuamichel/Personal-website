console.log("Hello World");

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/formsubmitted.html'
})

// /Users/joshuamichel/Documents/Coursework/Personal-website/contactinfo.html