import "../styles/main.styl";

// Page ABOUT


const controller3 = new ScrollMagic.Controller();

const portfolio = document.querySelector(".container-team");
console.log(portfolio.clientWidth);
const slideAnimation = new TimelineMax()
.fromTo(".container-team", 1,{ x: "0vw", y: "20vh" }, { x: "-100vw", y: "20vh",ease: Power0.easeNone  },  0)
.fromTo(".container-arrows", 2,{ x: "100vw", y: "20vh" }, { x: "-100vw", y: "20vh",ease: Power0.easeNone  },  0)
.fromTo(".team-ph-box", 2,{ x: "100vw", y: "-35vh" }, { x: "-100vw", y: "-35vh",ease: Power0.easeNone  },  1)
.fromTo(".contact", 2,{ x: "100vw", y: "-80vh" }, { x: "-100vw", y: "-80vh",ease: Power0.easeNone  },  2)

// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: ".container-all",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin(".container-all")
  .setTween(slideAnimation)

  .addTo(controller3);