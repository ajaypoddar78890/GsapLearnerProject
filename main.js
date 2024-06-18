gsap.registerPlugin(ScrollTrigger);

// gsap.to(".firstchild", {
//   x: 700,
//   duretion: 8,
//   scrollTrigger: {
//     trigger: ".fistchild",
//     start: "10%",
//     end: "20%",
//     toggleAction: "play none none none",
//     markers: {
//       fontSize: "2rem",
//     },
//   },
// });

// gsap.from(".secondchild", {
//   x: 1000,
//   duretion: 8,
//   Deley: 5,
//   scrollTrigger: {
//     trigger: ".fistchild",
//     start: "10%",
//     end: "20%",
//     toggleAction: "play none none none",
//     markers: {
//       fontSize: "2rem",
//     },
//   },
// });

// gsap.to(".first", {
//   x: 1000,
//   duretion: 5,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "red",
//   borderRadius: "50%",
//   scale: "0.5",
// });

// gsap.from(".second", {
//   x: 1000,
//   duretion: 8,
//   delay: 2,
//   rotate: 360,
// });
// gsap.from(".second", {
//   x: 1000,
//   duretion: 8,
//   delay: 2,
//   rotate: 360,
// });

// gsap.from(".text", {
//   color: "red",
//   duration: 1,
//   y: 50,
//   delay: 2,
//   opecity: 0,
//   stagger: 1,
// });
// gsap.from("#left", {
//   color: "red",
//   duration: 1,

//   opacity: 0,
//   delay: 3,
//   opecity: 0,
// });

var nav = gsap.timeline();

nav.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  Delay: 1,
});

nav.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,

  stagger: 0.2,
});
nav.from(".normalBTN", {
  y: -30,
  opacity: 0,
  duration: 1,

  stagger: 0.3,
});

// nav.from(".logo", {
//   y: -30,
//   opacity: 0,
//   duration: 1,

//   // stagger: 0.1,
// });

gsap.from(".companies", {
  opacity: 0,
  x: 900,
  duration: 2,
});

gsap.from(".logo", {
  x: 900,
  opacity: 0,
  scrollTrigger: {
    trigger: ".logo",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    scrub: true,
  },
  duration: 2,
});
