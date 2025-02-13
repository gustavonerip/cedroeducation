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
