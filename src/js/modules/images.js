const images = () => {
  const imgPopup = document.createElement("div"),
    workSelection = document.querySelector(".works"),
    bigImage = document.createElement("img");

  imgPopup.classList.add("popup");
  workSelection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  imgPopup.style.position = "fixed";
  imgPopup.style.top = "0";
  imgPopup.style.left = "0";
  imgPopup.style.width = "100%";
  imgPopup.style.height = "100%";
  imgPopup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

  bigImage.style.userSelect = none;

  imgPopup.appendChild(bigImage);

  workSelection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
