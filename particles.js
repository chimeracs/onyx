particlesJS("particles-js", {
  particles: {
    number: {
      value: 140,
      density: {
        enable: true,
        value_area: 800
      }
    },

    /* Blue + Orange stealth particles */
    color: {
      value: ["#00b3ff", "#ff6a00"]
    },

    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },

    opacity: {
      value: 0.42,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },

    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },

    /* Disabled links for clean stealth look */
    line_linked: {
      enable: false
    },

    /* Upward drifting stealth motion */
    move: {
      enable: true,
      speed: 6.4,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    },

    modes: {
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      }
    }
  },

  retina_detect: true
});
