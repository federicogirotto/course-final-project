import "../styles/main.styl";


// Page PROJECTS


const controller2 = new ScrollMagic.Controller();

const portfolio = document.querySelector(".project-box");
console.log(portfolio.clientWidth);
const slideAnimation = new TimelineMax()
.fromTo(".box-1", 1,{ x: "10vw", y: "35vh" }, { x: "-100vw", y: "35vh",  },  0)
.fromTo(".box-2", 1.4,{ x: "50vw", y: "35vh" }, { x: "-100vw", y: "35vh",  },  0)
.fromTo(".box-3", 1.8,{ x: "90vw", y: "35vh" }, { x: "-100vw", y: "35vh",  },  0)
.fromTo(".box-4", 2.2,{ x: "130vw", y: "35vh" }, { x: "-100vw", y: "35vh",  },  0)
.fromTo(".box-5", 2.6,{ x: "170vw", y: "35vh" }, { x: "-100vw", y: "35vh",  },  0)

// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: ".project-portfolio",
  triggerHook: "onLeave",
  duration: "130%"
})
  .setPin(".project-portfolio")
  .setTween(slideAnimation)

  .addTo(controller2);