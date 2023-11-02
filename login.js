import navbar from "./components/navbar.js";
let navbarRe = document.getElementById("nav");
navbarRe.innerHTML = navbar();

document.getElementById("second_side").style.display = "none";

let login = JSON.parse(localStorage.getItem("Info")) || [];

document.getElementById("login").addEventListener("click", function (e) {
  let lid = document.getElementById("email").value;

  let lpass = document.getElementById("password").value;

  if (lid === "" || lpass === "") {
    alert("plz fill information");
  } else {
    login.forEach(function (el) {
      if (el.id === lid && el.password === lpass) {
        let change = document.querySelector("h1");
        change.innerText = "login in successfully";
        change.style.color = "green";
      } else {
        let change = document.querySelector("h1");
        change.innerText = "login in fail";
        change.style.color = "red";
      }
    });
  }
  let change = document.querySelector("h1");
  if (change.innerText === "login in successfully") {
    setTimeout(function () {
      let Value = "index.html";
      window.location.href = Value;
    }, 3000);
  }
});
