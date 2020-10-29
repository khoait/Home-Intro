const tl = gsap.timeline({default:{ease:'power1.out'}});

tl.to('.hide .text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:'-100%', duration:1, delay:0.25});
tl.to('.intro', {y:'-100%', duration: 1}, '-=0.5');

tl.fromTo('nav', {opacity: 0}, {opacity:1, duration:1});
tl.fromTo('.big-text', {opacity: 0}, {opacity:1, duration:1}, '-=1');