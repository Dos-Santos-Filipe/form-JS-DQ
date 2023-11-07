const btn = document.getElementById("btn");

const inputs = document.querySelectorAll(".input");

function submitAndCheck() {
  inputs.forEach((item) => {
    let label = item.nextElementSibling;
    if (item.value == "") {
      item.classList.add("border-invalid");
      label.classList.add("label-on");
    } else {
      item.classList.remove("border-invalid");
      item.classList.add("border-valid");
      label.classList.remove("label-on");
    }
  });
}

btn.addEventListener("click", submitAndCheck);
