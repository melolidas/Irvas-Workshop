import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs("input[name='user_phone']");

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
      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

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
