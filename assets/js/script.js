const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('#nav-link-container ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// Particles Effect
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 125,
                density: {
                    enable: true,
                    value_area: 1500
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1,
                random: false
            },
            size: {
                value: 2.5,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 50,
                color: "#ffffff",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
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
            }
        },
        retina_detect: true
    });
});


