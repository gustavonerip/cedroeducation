// Function that controls what happens when the user scrolls.
export function scrollFunction() {
  const header = document.getElementById("header");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Function that will watch for the event.

export function setupScrollEvent() {
  window.onscroll = function () {
    scrollFunction();
  };
}

// Mobile Navigation Menu

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

export function toggleNav() {
  nav.classList.toggle("hide");
  burger.classList.toggle("close");
}

export function listenForBurgetClick() {
  if (burger) {
    burger.addEventListener("click", toggleNav);
  }
  if (nav) {
    nav.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        burger.classList.toggle("close");
        nav.classList.add("hide");
      }
    });
  }
}
