function yesClicked() {
    document.getElementById("response").innerHTML =
        "YAYYYY 🥹💖<br>Aastha, you just made Tanmay the happiest person ever 💍✨<br>I love you infinity ♾️❤️";
}

function moveNo(btn) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}
