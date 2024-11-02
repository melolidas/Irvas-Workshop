const forms = () => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    phoneInputs = document.querySelectorAll("input[name='user_phone']");

  phoneInputs.forEach((item) => {
    item.addEventListener(
      "input",
      () => (item.value = item.value.replace(/\D/, ""))
    );
  });

  const messageObj = {
    succes: "Мы вам перезвоним",
    loading: "Загрузка",
    fail: "Что то пошло не так",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = messageObj.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  forms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = messageObj.succes;
        })
        .catch(() => (statusMessage.textContent = messageObj.fail))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
export default forms;
