let signin = JSON.parse(localStorage.getItem("Info")) || [];

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let id = document.getElementById("email").value;

  let pass = document.getElementById("password").value;

  if (id === "" || pass === "") {
    alert("plz fill information");
  } else {
    let A = new obj(id, pass);
    signin.push(A);

    localStorage.setItem("Info", JSON.stringify(signin));

    let change = document.querySelector("h1");
    change.innerText = "sign in successfully";
    change.style.color = "green";
    setTimeout(function () {
      if (signin != null) {
        let Value = "login.html";
        window.location.href = Value;
      }
    }, 2000);
  }
});

function obj(a, b) {
  this.id = a;
  this.password = b;
}
