const scrollBox = document.getElementById("autoScrollBox");
let scrollSpeed = 1;

function autoScroll() {
  scrollBox.scrollTop += scrollSpeed;

  // Reset scroll when reaching the bottom
  if (scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight) {
    scrollBox.scrollTop = 0;
  }
}

// Start scrolling every 50 milliseconds
setInterval(autoScroll, 50);
