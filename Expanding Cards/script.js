"use strict";
const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

const init = function () {
  container.addEventListener("click", function (e) {
    if (!e.target.closest(".panel")) return;
    panels.forEach((panel) => panel.classList.remove("active"));
    e.target.classList.add("active");
  });
};

init();
