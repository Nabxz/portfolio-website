const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('#nav-link-container ul');
const navLinkItems = document.querySelectorAll('#nav-link-container ul li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('toggled');

    // Change icon to X or back to ☰
    hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});


// Auto-close nav menu on link click
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
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

// Smoothly slow down particle speed and reduce line_linked.distance
function animateParticleSpeedAndDistance(fromSpeed, toSpeed, fromDistance, toDistance, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
        const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        const currentSpeed = fromSpeed + (toSpeed - fromSpeed) * easedProgress;
        const currentDistance = fromDistance + (toDistance - fromDistance) * easedProgress;

        if (window.pJSDom && pJSDom[0] && pJSDom[0].pJS) {
            const particles = pJSDom[0].pJS.particles;
            particles.move.speed = currentSpeed;
            particles.line_linked.distance = currentDistance;
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

animateParticleSpeedAndDistance(17, 0.3, 500, 50, 2000);



function startShootingStars() {
    const canvas = document.getElementById('shooting-stars-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const shootingStars = [];

    function createStar() {
        const x = Math.random() * width;
        const y = Math.pow(Math.random(), 2.5) * height / 2;
        const length = Math.random() * 300 + 100;
        const speed = Math.random() * 2 + 2;
        const angle = Math.PI / 4; // 45 degrees
        shootingStars.push({ x, y, length, speed, angle, alpha: 1 });
    }

    function update() {
        ctx.clearRect(0, 0, width, height);
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const star = shootingStars[i];
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x - star.length * Math.cos(star.angle), star.y - star.length * Math.sin(star.angle));
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            star.x += star.speed * Math.cos(star.angle);
            star.y += star.speed * Math.sin(star.angle);
            star.alpha -= 0.01;

            if (star.alpha <= 0) {
                shootingStars.splice(i, 1);
            }
        }
        requestAnimationFrame(update);
    }

    setInterval(() => {
        if (Math.random() < 0.5) {
            createStar();
        }
    }, 3000);

    update();
}

startShootingStars();
