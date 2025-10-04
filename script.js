function mostrarGaleria() {
  document.getElementById("galeria").classList.remove("oculto");
  lanzarConfetti();
}

// 🎊 Confetti animado
function lanzarConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 3 + 2
  }));

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettis.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();

      c.y += c.speed;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(dibujar);
  }

  dibujar();
}
