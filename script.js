/* Reveal animation on scroll */
const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

/* YES button */
function yesClicked() {
    document.getElementById("response").innerHTML =
        "YAYYYY 🥹💖<br>Aastha, you just made Tanmay the happiest person ever 💍✨<br>I love you infinity ♾️❤️";
    startHearts();
}

/* NO button dodge */
function moveNo(btn) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Heart rain effect */
function startHearts() {
    const container = document.querySelector(".heart-container");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
