window.onload = () => {
  // initialize animations
  init();

  // Add event listener on frame click
  document.getElementById("frame")
    .onclick = () => {
      togglePlay()
    };
};
