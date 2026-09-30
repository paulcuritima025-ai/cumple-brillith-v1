(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  // ---------- Entrada ----------
  const intro = $("#intro");
  const site = $("#site");
  $("#enterBtn").addEventListener("click", () => {
    intro.classList.add("leave");
    site.setAttribute("aria-hidden", "false");
    document.body.classList.add("entered");
    setTimeout(() => intro.remove(), 900);
  });

  // ---------- Nombre ----------
  $$("[data-name]").forEach(el => el.textContent = contenido.nombre);
  document.title = `Para ${contenido.nombre} ✦`;

  // ---------- Modo prueba ----------
  const testMode = new URLSearchParams(location.search).get("test") === "1";
  const birthdayDate = new Date(contenido.cumple);
  const effectiveBirthday = testMode ? new Date(Date.now() - 1000) : birthdayDate;

  // ---------- Cuenta regresiva ----------
  function updateCountdown() {
    const diff = effectiveBirthday - new Date();
    if (diff <= 0) {
      $("#countdown").hidden = true;
      $("#birthdayMessage").hidden = false;
      return;
    }
    const sec = Math.floor(diff / 1000);
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    $("#days").textContent = String(d).padStart(2, "0");
    $("#hours").textContent = String(h).padStart(2, "0");
    $("#minutes").textContent = String(m).padStart(2, "0");
    $("#seconds").textContent = String(s).padStart(2, "0");
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ---------- Velas ----------
  const candles = $("#candles");
  for (let i = 0; i < 20; i++) {
    const c = document.createElement("button");
    c.className = "candle";
    c.setAttribute("aria-label", `Vela ${i + 1}`);
    c.innerHTML = `<span class="flame"></span><span class="wick"></span>`;
    c.addEventListener("click", () => {
      if (!c.classList.contains("out")) {
        c.classList.add("out");
        confetti(12);
      }
    });
    candles.appendChild(c);
  }

  // ---------- Imágenes ----------
  function media(src, alt, fallback) {
    if (!src) return `<div class="photo-placeholder"><span>✦</span><small>${fallback}</small></div>`;
    return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML='<div class=&quot;photo-placeholder&quot;><span>✦</span><small>Agrega tu foto aquí</small></div>'">`;
  }

  // ---------- Niñez ----------
  const timeline = $("#timeline");
  contenido.ninez.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "timeline-item reveal";
    card.innerHTML = `
      <div class="timeline-dot">${String(i + 1).padStart(2, "0")}</div>
      <div class="timeline-card">
        <div class="timeline-photo">${media(item.foto, item.titulo, "Tu foto aquí")}</div>
        <div class="timeline-copy">
          <span class="age">${item.edad}</span>
          <h3>${item.titulo}</h3>
          <p>${item.texto}</p>
        </div>
      </div>`;
    timeline.appendChild(card);
  });

  // ---------- Familia ----------
  const family = $("#familyGrid");
  contenido.familia.forEach(item => {
    const card = document.createElement("article");
    card.className = "family-card reveal";
    card.innerHTML = `
      <div class="family-photo">${media(item.foto, item.nombre, "Foto")}</div>
      <div class="family-copy">
        <span>${item.relacion}</span>
        <h3>${item.nombre}</h3>
        <p>“${item.mensaje}”</p>
      </div>`;
    family.appendChild(card);
  });

  // ---------- Nosotros ----------
  const moments = $("#moments");

  if (moments && contenido.nosotros) {

    contenido.nosotros.forEach((item, i) => {

      const card = document.createElement("article");

      card.className = `moment reveal ${i % 2 ? "reverse" : ""}`;

      // =====================================================
      // MEDIOS
      // Puede tener:
      // - 1 foto
      // - varias fotos
      // - 1 video
      // - fotos + video
      // =====================================================

      let visual = "";

      // -----------------------------------------------------
      // FOTOS
      // -----------------------------------------------------

      // Nuevo formato: fotos: ["foto1.jpg", "foto2.jpg"]
      if (Array.isArray(item.fotos)) {

        item.fotos.forEach((foto, fotoIndex) => {

          if (foto && foto.trim() !== "") {

            visual += `
            <div class="moment-media-item">
              <img
                src="${foto}"
                alt="${item.titulo} - Foto ${fotoIndex + 1}"
                loading="lazy"
                onerror="this.parentElement.innerHTML='<div class=&quot;moment-empty&quot;><span>♡</span><p>No se pudo cargar esta foto</p></div>'"
              >
            </div>
          `;

          }

        });

      }

      // -----------------------------------------------------
      // COMPATIBILIDAD CON EL FORMATO ANTIGUO
      // Si todavía tienes algún recuerdo con:
      // foto: "foto.jpg"
      // también seguirá funcionando.
      // -----------------------------------------------------

      else if (item.foto && item.foto.trim() !== "") {

        visual += `
        <div class="moment-media-item">
          <img
            src="${item.foto}"
            alt="${item.titulo}"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=&quot;moment-empty&quot;><span>♡</span><p>No se pudo cargar esta foto</p></div>'"
          >
        </div>
      `;

      }

      // -----------------------------------------------------
      // VIDEO
      // -----------------------------------------------------

      if (item.video && item.video.trim() !== "") {

        visual += `
        <div class="moment-media-item moment-video-container">

          <video
            class="moment-video"
            controls
            playsinline
            preload="metadata"
          >

            <source
              src="${item.video}"
              type="video/mp4"
            >

            Tu navegador no puede reproducir este video.

          </video>

        </div>
      `;

      }

      // -----------------------------------------------------
      // SI NO HAY FOTO NI VIDEO
      // -----------------------------------------------------

      if (visual === "") {

        visual = `
        <div class="moment-empty">
          <span>♡</span>
          <p>Aquí irá uno de nuestros recuerdos</p>
        </div>
      `;

      }

      // =====================================================
      // CLASES PARA EL CONTENEDOR DE MEDIOS
      // =====================================================

      const cantidadFotos = Array.isArray(item.fotos)
        ? item.fotos.filter(foto => foto && foto.trim() !== "").length
        : (item.foto && item.foto.trim() !== "" ? 1 : 0);

      const tieneVideo = item.video && item.video.trim() !== "";

      const tieneVariosMedios = cantidadFotos > 1 || (cantidadFotos > 0 && tieneVideo);

      // =====================================================
      // TARJETA COMPLETA
      // =====================================================

      card.innerHTML = `

      <div class="moment-photo ${tieneVariosMedios ? "has-both-media" : ""}">
        ${visual}
      </div>

      <div class="moment-copy">

        <span class="moment-index">
          ${String(i + 1).padStart(2, "0")}
        </span>

        <span class="moment-date">
          ${item.fecha}
        </span>

        <h3>
          ${item.titulo}
        </h3>

        <p>
          ${item.texto}
        </p>

      </div>

    `;

      moments.appendChild(card);

    });

  }
  // ---------- Días juntos ----------
  function updateTogether() {

    // Día en que empezamos a estar juntos:
    // 21 de marzo de 2025 a las 18:30
    const start = new Date(2025, 2, 21, 18, 30, 0);

    const now = new Date();

    const difference = now - start;

    const days = Math.max(
      0,
      Math.floor(difference / 86400000)
    );

    $("#daysTogether").textContent =
      String(days).padStart(3, "0");
  }

  updateTogether();


  // Actualizar automáticamente cada minuto
  setInterval(updateTogether, 60000);

  // ---------- Carta ----------
  $("#envelope").addEventListener("click", () => {
    $("#envelope").classList.add("open");
    setTimeout(() => {
      const letter = $("#letter");
      letter.hidden = false;
      letter.classList.add("show");
      $("#letterText").innerHTML = contenido.carta.map(p => `<p>${p}</p>`).join("");
      letter.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 700);
  });

  // ---------- Sorpresa ----------
  $("#surpriseBtn").addEventListener("click", () => {
    $("#surpriseReveal").hidden = false;
    $("#surpriseReveal").classList.add("show");
    $("#surpriseText").textContent = contenido.sorpresa;
    confetti(180);
  });

  // ---------- Reveal on scroll ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));

  // ---------- Navegación ----------
  $$(".nav a").forEach(a => {
    a.addEventListener("click", () => {
      $$(".nav a").forEach(x => x.classList.remove("active"));
      a.classList.add("active");
    });
  });

  // ---------- Confeti sin librerías ----------
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animating = false;

  function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function confetti(amount = 80) {
    for (let i = 0; i < amount; i++) {
      particles.push({
        x: innerWidth / 2 + (Math.random() - .5) * 140,
        y: innerHeight * .35,
        vx: (Math.random() - .5) * 12,
        vy: -Math.random() * 10 - 4,
        gravity: .28 + Math.random() * .18,
        size: 4 + Math.random() * 7,
        rotation: Math.random() * 6,
        spin: (Math.random() - .5) * .2,
        life: 90 + Math.random() * 90,
        hue: Math.random()
      });
    }
    if (!animating) animateConfetti();
  }

  function animateConfetti() {
    animating = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 30);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.spin;
      p.life--;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.min(1, p.life / 30);
      const colors = ["#ff7eb6", "#ffd27a", "#f9d8ec", "#bca3d7", "#ffffff"];
      ctx.fillStyle = colors[Math.floor(p.hue * colors.length)];
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * .55);
      ctx.restore();
    });
    if (particles.length) requestAnimationFrame(animateConfetti);
    else animating = false;
  }

  // Exponer para pruebas desde consola si hace falta.
  window.cumple = { confetti };
})();
