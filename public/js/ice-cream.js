// alert("Hello, ice cream!");
//When the form is submitted, validate
document.getElementById("ice-cream-form").onsubmit = () => {
  clearErrors();

  //Flag variable to determine whether form data is valid
  let isValid = true;

  //Validate name
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("err-name").style.display = "block";
    isValid = false;
  }

  //Validate email
  let email = document.getElementById("email").value.trim();
  if (!email || email.indexOf("@") === -1) {
    document.getElementById("err-email").style.display = "block";
    isValid = false;
  }

  let flavor = document.getElementById("flavor").value;
  if (flavor == "none") {
    document.getElementById("err-flavor").style.display = "block";
    isValid = false;
  }

  let methodButtons = document.getElementsByName("method");

  let count = 0;

  for (let i = 0; i < methodButtons.length; i++) {
    if (methodButtons[i].checked) {
      count++;
    }
  }

  if (count === 0) {
    document.getElementById("err-method").style.display = "block";
    isValid = false;
  }

  //Return isValid flag
  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
