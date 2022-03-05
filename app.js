const btns = document.querySelectorAll("button");
const valCount = document.querySelector(".container__counter");
let count = 0;

btns.forEach((btn, indx) => {
  btn.addEventListener("click", (event) => {
    let cssClassBtn = [...event.currentTarget.classList];

    if (cssClassBtn.includes("container__decrease")) {
      count--;
    } else if (cssClassBtn.includes("container__increase")) {
      count++;
    } else {
      count = 0;
      valCount.style.color = "none";
    }

    valCount.style.color = count > 0 ? "green" : "red";

    if (!count) {
      valCount.style.color = "black";
    }

    valCount.textContent = count;
  });
});
