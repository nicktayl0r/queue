var x;
const myCodeMirror = new CodeMirror(document.querySelector(".text-editor"), {
  value: document.querySelector(".starter").dataset.starter,
  mode: "javascript",
  lineNumbers: true
});

const submitButton = document.querySelector(".submit-button");

let challengeId = document.querySelector(".starter").dataset.cid;
let APIEndpoint = `/challenges/${challengeId}`;

console.log(challengeId);

submitButton.addEventListener("click", function(evt) {
  fetch(APIEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Credentials: "include"
    },
    body: JSON.stringify({ code: myCodeMirror.getValue() })
  })
    .then(res => res.json())
    .then(function(response) {
      console.log(response);
      if (!response) {
        $(".starter .panel-body").html("");
        $(".q_checkmark").css("opacity: 1 !important;");
      } else if (Array.isArray(response)) {
        let resString = "";
        console.log(Array.isArray(response));
        response.forEach(res => (resString += res));
        console.log(resString);
        $(".starter .panel-body").html(resString);
      } else {
        $(".starter .panel-body").html(`<p>${JSON.stringify(response)}</p>`);
      }
    })
    .catch(function(err) {
      console.log(`POST was unsuccessful because ${err}`);
    });
});
