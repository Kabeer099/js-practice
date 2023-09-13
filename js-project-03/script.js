window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector(".center");

  // console.log(details.clientX)
  var valX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (200) - rect.getBoundingClientRect().width / 2,
    details.clientX
  );
  gsap.to(".center", {
    left: valX + "px",
    // top: details.clientY,
    ease: Power3,
  });
});
