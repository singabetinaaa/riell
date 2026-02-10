// Envelope opening function
function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const envelopeWrapper = document.getElementById("envelopeWrapper");
  const content = document.getElementById("content");
  const progressContainer = document.getElementById("progress-container");
  const bgMusic1 = document.getElementById("bgMusic1");

  // Step 1: Add open class to envelope (flap opens)
  envelope.classList.add("open");

  // Step 2: After flap is fully open (1.8s), make letter come out
  setTimeout(() => {
    envelope.classList.add("letter-out");
  }, 1800);

  // Start song1 immediately when envelope is clicked (from beginning)
  if (bgMusic1) {
    bgMusic1.play().catch((e) => {
      console.log("Audio play failed:", e);
      // If autoplay fails, try again after showing content
      setTimeout(() => {
        bgMusic1.play().catch((err) => console.log("Retry failed:", err));
      }, 1500);
    });
  }

  // Wait for full animation, then hide envelope and show content
  setTimeout(() => {
    envelopeWrapper.classList.add("hidden");
    content.style.display = "flex";
    progressContainer.style.display = "block";

    // Trigger confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#87ceeb", "#4fc3f7", "#81d4fa", "#5dade2"],
    });
  }, 3600);
}

// Add click event listener to envelope when page loads
document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const envelopeWrapper = document.getElementById("envelopeWrapper");

  if (envelope) {
    envelope.addEventListener("click", openEnvelope);
    envelope.style.cursor = "pointer";
  }

  if (envelopeWrapper) {
    envelopeWrapper.style.cursor = "pointer";
  }
});

// Step Navigation
let currentStep = 1;
const totalSteps = 6;

function updateProgressBar() {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
}

function showStep(stepNumber) {
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("active");
  });

  const targetStep = document.getElementById(`step${stepNumber}`);
  if (targetStep) {
    targetStep.classList.add("active");
  }
  updateProgressBar();
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  sparkle.style.fontSize = "30px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";
  sparkle.textContent = ["💙", "💜", "✨", "⭐", "💫"][
    Math.floor(Math.random() * 5)
  ];
  sparkle.style.animation = "explode 1s ease-out forwards";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Add explode animation
const style = document.createElement("style");
style.textContent = `
    @keyframes explode {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("💙 DOM Ready - Initializing Valentine Website...");

  // Check if all steps exist
  for (let i = 1; i <= totalSteps; i++) {
    const step = document.getElementById(`step${i}`);
    if (step) {
      console.log(`✓ Step ${i} found`);
    } else {
      console.error(`✗ Step ${i} NOT found!`);
    }
  }

  // Initialize progress bar
  updateProgressBar();

  // Confetti button (only button remaining)
  const confettiBtn = document.getElementById("confetti-btn");
  if (confettiBtn) {
    confettiBtn.addEventListener("click", () => {
      console.log("🎉 Confetti button clicked!");

      // Switch to song2 when Love button is clicked
      const bgMusic1 = document.getElementById("bgMusic1");
      const bgMusic2 = document.getElementById("bgMusic2");

      if (bgMusic1 && bgMusic2) {
        bgMusic1.pause();
        bgMusic1.currentTime = 0;
        bgMusic2.currentTime = 0; // Start from beginning
        bgMusic2.play().catch((e) => console.log("Audio play failed:", e));
      }

      // Confetti meriah - gelombang pertama
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: [
          "#87ceeb",
          "#4fc3f7",
          "#81d4fa",
          "#5dade2",
          "#29b6f6",
          "#ff69b4",
          "#ffb6c1",
        ],
      });

      setTimeout(() => {
        confetti({
          particleCount: 150,
          angle: 60,
          spread: 80,
          origin: { x: 0 },
          colors: ["#87ceeb", "#4fc3f7", "#81d4fa", "#ff1493"],
        });
      }, 150);

      setTimeout(() => {
        confetti({
          particleCount: 150,
          angle: 120,
          spread: 80,
          origin: { x: 1 },
          colors: ["#87ceeb", "#4fc3f7", "#81d4fa", "#ff69b4"],
        });
      }, 300);

      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 120,
          origin: { y: 0.7 },
          colors: [
            "#87ceeb",
            "#4fc3f7",
            "#81d4fa",
            "#5dade2",
            "#29b6f6",
            "#ff1493",
            "#ffb6c1",
          ],
        });
      }, 450);

      // Confetti tambahan dari atas
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.3 },
          colors: ["#87ceeb", "#4fc3f7", "#ff69b4"],
        });
      }, 600);

      // Confetti bintang
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 90,
          startVelocity: 45,
          origin: { y: 0.5 },
          shapes: ["star"],
          colors: ["#ffd700", "#87ceeb", "#ff69b4"],
        });
      }, 750);

      // Create sparkle effects
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          createSparkle();
        }, i * 100);
      }

      // After confetti, show overlay and flower scene
      setTimeout(() => {
        console.log("⏰ 3 seconds passed, showing flower scene...");

        // Tampilkan overlay hitam
        const overlay = document.getElementById("flowerOverlay");
        const flowerScene = document.getElementById("flowerScene");

        if (overlay && flowerScene) {
          overlay.classList.add("active");

          // Setelah overlay fade in, tampilkan scene bunga
          setTimeout(() => {
            flowerScene.classList.add("active");
          }, 1000); // Tunggu overlay selesai fade in
        }
      }, 3000);
    });
  }

  // ===== FORM KIRIM KE WHATSAPP =====
  const btnSend = document.getElementById("btnSend");
  const feelingText = document.getElementById("feelingText");

  // Nomor WhatsApp (format: 628xxx tanpa +)
  const whatsappNumber = "6283142453829";

  if (btnSend) {
    btnSend.addEventListener("click", function () {
      const message = feelingText.value.trim();

      if (message === "") {
        alert("Isi dulu perasaanmu! 💙");
        return;
      }

      // Encode message untuk URL
      const encodedMessage = encodeURIComponent(message);

      // Buka WhatsApp dengan pesan
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(waUrl, "_blank");

      // Reset form
      feelingText.value = "";

      // Tampilkan pesan terima kasih
      setTimeout(() => {
        alert("Terima kasih sudah berbagi perasaanmu! 💙✨");
      }, 500);
    });
  }

  console.log("💙 Valentine Website Initialized Successfully! 💙");
});
