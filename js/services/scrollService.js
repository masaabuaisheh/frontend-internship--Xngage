export function initScrollListener() {
  let isScrolling;

  window.addEventListener("scroll", (event) => {
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      console.log("Scrolling has stopped.");
      // window.alert("You've been inactive for a moment!");
    }, 5000);
  });
}
