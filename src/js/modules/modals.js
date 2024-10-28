const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    // let scrollRight = document.body.style.paddingRight;

    trigger.forEach((item) =>
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // scrollRight += `${16}px`;
      })
    );

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      //   scrollRight = `${0}px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        // scrollRight = `${0}px`;
      }
    });
  }
  function timeOutModal(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
    }, time);
  }
  //   timeOutModal(".popup", 3000);
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
};

export default modals;
