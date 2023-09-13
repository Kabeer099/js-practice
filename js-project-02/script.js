var rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (details) {
  // console.log("heyyy")
  var rectangleLocation = rect.getBoundingClientRect();
  var actPosition = details.clientX - rectangleLocation.left;
  if (actPosition < rectangleLocation.width / 2) {

    var redclr = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255,0, actPosition);
    gsap.to(rect, {
        backgroundColor:`rgb(${redclr},0,0)`,
        ease:Power4  
    })
      // console.log("left");
    } else {
        var blueclr = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, actPosition);
        gsap.to(rect, {
            backgroundColor:`rgb(0,0,${blueclr})`,
            ease:Power4  
        })    }
});
rect.addEventListener("mouseleave", function (details) {
    gsap.to(rect, {
        backgroundColor:"white",
        ease:Power4  
    })
})