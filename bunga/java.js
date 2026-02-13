// Professional Flowers Animation - Activation Script
onload = () => {
  console.log("Page loaded!");

  const bgMusic = document.getElementById("bgMusic");
  const playOverlay = document.getElementById("playOverlay");
  const buttonBiasa = document.getElementById("buttonBiasa");
  const buttonBanget = document.getElementById("buttonBanget");

  let biasaClickCount = 0;
  let bangetScale = 1;

  // Function to start everything
  const startExperience = () => {
    console.log("Starting experience...");

    // Hide overlay
    setTimeout(() => {
      playOverlay.classList.add("hidden");
    }, 500);

    // Start animations
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
      console.log("✓ Animations started! 🌸");
    }, 500);

    // Play music
    if (bgMusic) {
      bgMusic
        .play()
        .then(() => {
          console.log("🎵 Music playing successfully!");
        })
        .catch((error) => {
          console.error("Music play failed:", error);
        });
    }
  };

  // Click "seneng aja" - tombol "seneng banget" makin besar!
  if (buttonBiasa) {
    buttonBiasa.addEventListener("click", () => {
      biasaClickCount++;
      console.log(`Klik "seneng aja" ke-${biasaClickCount}`);

      // Setiap klik, tombol "seneng banget" makin besar bertahap
      bangetScale += 0.3; // Tambah 30% setiap klik (lebih bertahap)

      if (buttonBanget) {
        // Matikan animasi pulse
        buttonBanget.classList.add("growing");

        // Apply scale yang besar ke segala arah
        buttonBanget.style.transform = `scale(${bangetScale})`;
        buttonBanget.style.transition =
          "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        buttonBanget.style.zIndex = "10000";

        // Ubah shadow juga supaya lebih dramatis
        buttonBanget.style.boxShadow = `
          0 0 ${20 * bangetScale}px rgba(0, 212, 255, 0.8),
          0 0 ${40 * bangetScale}px rgba(0, 212, 255, 0.5),
          0 ${5 * bangetScale}px ${30 * bangetScale}px rgba(0, 0, 0, 0.4)
        `;

        // Progress text berdasarkan jumlah klik (sampai 5x saja)
        if (biasaClickCount >= 5) {
          buttonBanget.innerHTML = "YAUDAH AKU PILIH INI AJA! 💙💙💙";
          buttonBanget.style.fontSize = "1.6em";
        } else if (biasaClickCount >= 3) {
          buttonBanget.innerHTML = "seneng banget dong! 💙💙";
        } else if (biasaClickCount >= 2) {
          buttonBanget.innerHTML = "seneng banget yaa! 💙";
        }

        console.log(`Scale sekarang: ${bangetScale}`);
      }
    });
  }

  // Click "seneng banget" - langsung start!
  if (buttonBanget) {
    buttonBanget.addEventListener("click", () => {
      console.log("Dipilih SENENG BANGET! 💙");
      startExperience();
    });
  }
};
