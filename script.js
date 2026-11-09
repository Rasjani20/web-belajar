// Mengambil semua tombol organ pada halaman
const organCards = document.querySelectorAll(".organ-card");

// Elemen yang akan diubah ketika tombol organ dipilih
const organTitle = document.getElementById("organTitle");
const organInfo = document.getElementById("organInfo");

// Saat salah satu tombol diklik, tampilkan penjelasan organ tersebut
organCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Hilangkan tanda aktif dari semua tombol
    organCards.forEach((item) => item.classList.remove("active"));

    // Beri tanda aktif pada tombol yang dipilih
    card.classList.add("active");

    // Ambil data dari atribut tombol
    organTitle.textContent = card.dataset.organ;
    organInfo.textContent = card.dataset.info;
  });
});

// Fitur pencarian sederhana untuk menemukan nama materi/organ
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah halaman reload

  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    alert("Silakan masukkan nama materi atau organ yang ingin dicari.");
    return;
  }

  // Cari tombol organ yang namanya sesuai dengan kata kunci
  const foundCard = [...organCards].find((card) =>
    card.dataset.organ.toLowerCase().includes(keyword)
  );

  if (foundCard) {
    foundCard.click();
    foundCard.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    alert("Materi tidak ditemukan. Coba cari: hidung, trakea, bronkus, atau paru-paru.");
  }
});
