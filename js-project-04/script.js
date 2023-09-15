// window.addEventListener("mousemove", function (details) {
//   var rect = document.querySelector(".center");

//   // console.log(details.clientX)
//   var valX = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     200 + rect.getBoundingClientRect().width / 2,
//     window.innerWidth - (200) - rect.getBoundingClientRect().width / 2,
//     details.clientX
//   );
//   gsap.to(".center", {
//     left: valX + "px",
//     // top: details.clientY,
//     ease: Power3,
//   });
// });


const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
  }
  var rect = document.querySelector('.hero-text');
  rect.addEventListener("mousemove", throttleFunction((dets)=>{
    // console.log("button is clicked")
    var div = document.createElement('div');
    var img = document.createElement('img');
    div.classList.add('addDiv');
    img.classList.add('addImg');
    div.style.top = dets.clientY+"px";
    div.style.left = dets.clientX+"px";
    img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')
    rect.appendChild(div);
    div.appendChild(img);
    gsap.to(img,{
        y:0,
        ease:Power3,
        duration:1,
        yoyo:1,
        
    })
        setTimeout(function(){
            gsap.to(img,{
                y:500,
                ease:Power3,
                duration:1,
            })
            setTimeout(() => {                
            div.remove();
        },500);
        },1000)
        
    }, 400));

   

