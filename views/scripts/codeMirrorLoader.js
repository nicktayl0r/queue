const myCodeMirror = new CodeMirror(document.querySelector('.text-editor'), {
    value: document.querySelector(".starter").dataset.starter,
    mode: "javascript",
    lineNumbers: true
});

const submitButton = document.querySelector('.submit-button')

let challengeId = document.querySelector(".starter").dataset.cid;
let APIEndpoint = `/challenges/${challengeId}`;

console.log(challengeId);

submitButton.addEventListener('click', function(evt) {
    fetch(APIEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appllication/json'
        }, 
        body: JSON.stringify({code: myCodeMirror.getValue()})
    })
    .then(res => res.json())
    .then(function(response){
        console.log(response);
    })
    .catch(function(err) {
        console.log(`POST was unsuccessful because ${err}`)
    })
})