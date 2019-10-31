import "../styles/main.styl";

const controller = new ScrollMagic.Controller();

const logo = document.querySelector(".logo");
console.log(logo.clientWidth);
const sphereAnimation = new TimelineMax()
  .from(".logo", 3, { x: (window.innerWidth / 2) - (logo.clientWidth / 2), y: (window.innerHeight / 2) - (logo.clientHeight / 2), scale: "2", ease: Power1.easeOut }, 0)
  .fromTo(".sphere", 2, { x: "50%", y: "-100px" }, { x: "-50vw", y: "-100px", ease: Power4.easeOut }, 0)
  .fromTo(".box2", 2, { x: "100vw", y: "30vh" }, { x: "50vw", y: "30vh", ease: Power2.easeOut }, 0)
  .fromTo(".box2", 10, { x: "50vw", y: "30vh" }, { x: "50vw", y: "-100%", ease: Sine.easeOut }, 2)
  .fromTo(".sphere", 20, { x: "-50vw", y: "-100px" }, { x: "-100vw", y: "-100px", ease: Power4.easeOut }, 10)
  .fromTo(".box3", 20, { x: "100vw", y: "40vh" }, { x: "25vw", y: "40vh", ease: Power4.easeOut }, 8)

// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: ".box1",
  triggerHook: "onLeave",
  duration: "800%"
})
  .setPin(".box1")
  .setTween(sphereAnimation)

  .addTo(controller);







