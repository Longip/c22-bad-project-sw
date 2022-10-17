import { Line, Circle } from 'progressbar.js';
let line = new Line('#container');

let bar = new Circle(container, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

bar.animate(0.5);  // Number from 0.0 to 1.0