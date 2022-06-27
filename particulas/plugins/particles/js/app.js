
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 1000,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": ["#cc1424", "#a37800", "#024e78", "#5e0000"]
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "push"
      },
      "onclick": {
        "enable": true
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 10,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 10,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 100
      },
      "remove": {
        "particles_nb": 20
      }
    }
  },
  "retina_detect": true
});