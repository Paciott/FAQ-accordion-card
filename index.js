const question = document.querySelectorAll(".question");
const box = document.querySelector(".Orange-box");

question.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
    let hiddenContent = element.nextElementSibling;
    // hiddenContent.classList.toggle("collapse");
    if (element.classList.contains("open")) {
      hiddenContent.style.height = hiddenContent.scrollHeight + "px";
    } else {
      hiddenContent.style.height = "0px";
    }
  });
});

question.forEach((element) => {
  element.addEventListener("mouseover", () => {
    box.classList.add("movement");
  });
  element.addEventListener("mouseout", () => {
    box.classList.remove("movement");
  });
});
