document.addEventListener("DOMContentLoaded", function () {
  const myWorkItems = document.querySelectorAll(".my-work__item");
  const overlay = document.querySelector(".overlay");

  myWorkItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      myWorkItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("blurred");
        }
      });
      overlay.style.opacity = "1";
    });

    item.addEventListener("mouseout", () => {
      myWorkItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("blurred");
        }
      });
      overlay.style.opacity = "0";
    });
  });
});
