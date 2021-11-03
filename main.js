const email = document.querySelector("#email");
    const error = document.querySelector(".error");
    const submit = document.querySelector("#submit");

    const validate = email => {
      return /^[a-z0-9_-]+(\.|[a-z0-9_-])+@[a-z]+(\.[a-z]+$|\.[a-z]+\.[a-z]+$)/ig.test(email)
    }

    const removeAlert = () => {
      error.textContent = "";
      email.classList.remove("alert");
      error.style.display = "none";
    }

    const addAlert = () => {
      error.classList.remove("success");
      email.classList.add("alert");
      error.style.display = "block";
      error.textContent = "Please provide a valid email address";

    }

    email.addEventListener("keyup", () => {
      if (!email.value) removeAlert();
    });

    email.addEventListener("input", () => {
      validate(email.value) ? removeAlert() : addAlert();
    });

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (validate(email.value)) {
        error.style.display = "block";
        error.classList.add("success");
        error.textContent = "Successfully";
        setTimeout(() => {
          error.textContent = "";
          email.value = "";
        }, 500);
      } else {
        addAlert();
      }
    });
