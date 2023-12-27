import "../libs/just-validate.min.js";

new window.JustValidate(".form", {
  rules: {
    name: {
      required: true,
      maxLength: 30,
    },
    text: {
      required: true,
      minLength: 5,
      maxLength: 500,
    },
  },
  messages: {
    name: {
      required: "Пожалуйста, введите имя!",
      minLength: "Введите 3 и более символов!",
      maxLength: "Запрещено вводить более 30 символов!",
    },
    email: {
      email: "Пожалуйста, введите корректный адрес электронной почты!",
      required: "Пожалуйста, введите адрес электронной почты!",
    },
    text: {
      required: "Пожалуйста, введите сообщение!",
      minLength: "Введите 5 и более символов!",
      maxLength: "Запрещено вводить более 500 символов!",
    },
  },
  submitHandler: function (thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "../resources/php/mail.php", true);
    xhr.send(formData);

    thisForm.reset();
  },
});
