const myCodeMirror = new CodeMirror(document.querySelector('.text-editor'), {
    value: document.querySelector(".starter").dataset.starter,
    mode: "javascript"
});

const submitButton = document.querySelector('.submit-button')

submitButton.addEventListener('click', function(evt){
    fetch('/challenges')
})