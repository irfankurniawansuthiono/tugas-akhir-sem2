// Menampilkan elemen "Loading..." saat halaman dimuat
document.onreadystatechange = function() {
  var loadingElement = document.getElementById('loading');

  if (document.readyState === 'loading') {
    // Halaman belum selesai dimuat, tampilkan elemen "Loading..."
    loadingElement.style.display = 'flex';
  } else if (document.readyState === 'interactive') {
    // Halaman sudah dimuat secara interaktif, tetapi gambar dan stylesheet masih dimuat
    // Anda dapat menampilkan animasi loading di sini jika diperlukan
  } else if (document.readyState === 'complete') {
    loadingElement.style.display = 'none';
  }
};
