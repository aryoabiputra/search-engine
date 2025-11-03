/* ========== DATASET ========== */
const WORDS_N = [
    "NASI", "NANAS", "NAMA", "NENEK", "NAIK", "NAKAL", "NAPAS", "NAMPAK", "NASEHAT", "NEGERI",
    "NEGATIF", "NURI", "NIRA", "NOMOR", "NOVEMBER", "NOTA", "NILAI", "NYALA", "NYAMAN", "NYATA"
];
const WORDS_A = ["AIR", "AKAR", "ALAS", "AMAL", "ANAK", "ANGIN", "APEL", "ASAM", "ASLI", "ANTAR", "ALUR", "AROMA", "AMAN", "AKTIF", "AWAN"];
const WORDS_B = ["BOLA", "BANGUN", "BESAR", "BULAN", "BAKU", "BATAL", "BAYAM", "BEBAS", "BUNGA", "BATU", "BANYAK", "BAGUS", "BAGI", "BIMBING", "BANGGA"];
const DATASET = { 'N': WORDS_N, 'A': WORDS_A, 'B': WORDS_B };

/* ========== KALIMAT KHUSUS PER-KATA (VARIATIF) ========== */
const SENTENCES_N = {
    NASI: [
        "Nasi menjadi sumber karbohidrat utama di banyak daerah di Indonesia.",
        "Petani menanam padi agar menghasilkan beras yang kelak dimasak menjadi nasi.",
        "Sebagian orang menyantap nasi tiga kali sehari sebagai menu pokok.",
        "Dalam upacara adat tertentu, nasi tumpeng digunakan sebagai simbol syukur.",
        "Kajian gizi membahas porsi nasi yang seimbang dengan lauk dan sayur."
    ],
    NANAS: [
        "Nanas memiliki rasa manis-asam dengan kandungan vitamin C yang tinggi.",
        "Daun dan mahkota nanas sering dimanfaatkan untuk serat alami.",
        "Buah nanas segar cocok diolah menjadi jus atau selai.",
        "Enzim bromelain pada nanas digunakan untuk melunakkan daging.",
        "Daerah tropis menyediakan iklim yang ideal untuk budidaya nanas."
    ],
    NAMA: [
        "Nama berfungsi sebagai identitas resmi yang membedakan seseorang.",
        "Dalam formulir, kolom nama harus ditulis sesuai kartu identitas.",
        "Sebagian budaya memberi nama berdasarkan makna dan harapan orang tua.",
        "Perubahan nama memerlukan prosedur administratif tertentu.",
        "Penyimpanan data mengandalkan nama beserta penanda unik lain."
    ],
    NENEK: [
        "Nenek sering menjadi sumber cerita tradisi keluarga.",
        "Banyak cucu belajar resep masakan rumahan dari nenek.",
        "Peran nenek dalam pengasuhan kerap membantu orang tua bekerja.",
        "Kesehatan tulang pada usia nenek perlu dijaga dengan olahraga ringan.",
        "Momen berkumpul bersama nenek biasanya terjadi saat hari raya."
    ],
    NAIK: [
        "Harga bahan bakar naik ketika pasokan global menurun.",
        "Penumpang diminta tertib saat naik ke dalam kendaraan umum.",
        "Suhu tubuh yang naik dapat menjadi tanda infeksi.",
        "Grafik penjualan naik setelah promosi berlangsung daring.",
        "Air sungai naik pada musim hujan sehingga perlu kewaspadaan."
    ],
    NAKAL: [
        "Anak yang terlihat nakal belum tentu berniat buruk; kadang hanya aktif.",
        "Aturan kelas dibuat untuk mengurangi perilaku nakal yang mengganggu.",
        "Pendekatan dialog sering efektif menangani sikap nakal.",
        "Label 'nakal' sebaiknya diganti dengan penjelasan perilaku spesifik.",
        "Konsistensi aturan di rumah membantu menekan kebiasaan nakal."
    ],
    NAPAS: [
        "Latihan pernapasan membantu menenangkan pikiran saat cemas.",
        "Irama napas teratur diperlukan saat olahraga intens.",
        "Gangguan napas bisa disebabkan alergi atau infeksi saluran pernapasan.",
        "Dokter memeriksa frekuensi napas sebagai tanda vital pasien.",
        "Meditasi fokus pada napas untuk meningkatkan konsentrasi."
    ],
    NAMPAK: [
        "Pelangi tampak jelas setelah hujan reda dan matahari muncul.",
        "Kesalahan ejaan tampak pada papan petunjuk di jalan.",
        "Hasil renovasi mulai tampak rapi dibanding sebelumnya.",
        "Efek cahaya membuat objek tampak lebih besar di foto.",
        "Dari puncak bukit, kota tampak seperti kumpulan lampu kecil."
    ],
    NASEHAT: [
        "Nasehat guru membantu siswa memahami pilihan belajar yang tepat.",
        "Orang tua memberi nasehat agar anak lebih berhati-hati di luar rumah.",
        "Nasehat yang baik disampaikan dengan contoh, bukan sekadar kata-kata.",
        "Sebelum memutuskan karier, banyak orang mencari nasehat profesional.",
        "Menerima nasehat membutuhkan kerendahan hati dan kemauan berubah."
    ],
    NEGERI: [
        "Negeri kepulauan memiliki keragaman bahasa dan budaya.",
        "Kebijakan negeri ditetapkan melalui proses politik yang teratur.",
        "Pariwisata menjadi sektor penting pendapatan beberapa negeri.",
        "Konstitusi mengatur hak dan kewajiban warga negeri.",
        "Pendidikan negeri berupaya merata hingga daerah terpencil."
    ],
    NEGATIF: [
        "Hasil tes negatif menandakan tidak terdeteksi indikator penyakit.",
        "Sikap negatif dapat memengaruhi suasana kerja satu tim.",
        "Dalam matematika, bilangan negatif terletak di kiri nol pada garis bilangan.",
        "Umpan balik negatif kadang diperlukan untuk perbaikan proses.",
        "Efek samping negatif harus dicantumkan pada kemasan obat."
    ],
    NURI: [
        "Burung nuri dikenal cerdas dan mampu menirukan suara manusia.",
        "Warna bulu nuri sangat cerah sehingga mudah dikenali.",
        "Perawatan nuri memerlukan kandang bersih dan pakan seimbang.",
        "Sebagian nuri hidup berpasangan dan setia pada satu pasangan.",
        "Populasi nuri liar dilindungi untuk mencegah perburuan."
    ],
    NIRA: [
        "Nira adalah cairan manis yang disadap dari bunga kelapa atau aren.",
        "Pengolahan nira dapat menghasilkan gula merah atau cuka.",
        "Kualitas nira dipengaruhi kebersihan wadah penampung.",
        "Petani memanen nira pada pagi atau sore hari untuk menjaga kesegaran.",
        "Fermentasi nira terjadi cepat bila dibiarkan pada suhu hangat."
    ],
    NOMOR: [
        "Nomor antrian memudahkan pelayanan agar berjalan teratur.",
        "Setiap dokumen resmi memiliki nomor unik untuk identifikasi.",
        "Nomor telepon harus dijaga kerahasiaannya dari penipuan.",
        "Penomoran halaman membantu pembaca mengikuti urutan materi.",
        "Sistem parkir menggunakan nomor plat untuk pencatatan keluar-masuk."
    ],
    NOVEMBER: [
        "Di Indonesia, bulan November biasanya memasuki musim hujan.",
        "Beberapa negara memperingati hari penting nasional pada November.",
        "Kalender akademik sering menetapkan ujian akhir di November.",
        "Promo belanja besar-besaran berlangsung pada pekan Black Friday di November.",
        "Kegiatan maraton internasional kerap dijadwalkan pada bulan November."
    ],
    NOTA: [
        "Nota pembelian berfungsi sebagai bukti transaksi yang sah.",
        "Toko wajib mencantumkan rincian barang dan pajak pada nota.",
        "Pelanggan diminta menyimpan nota untuk klaim garansi.",
        "Di akuntansi, nota kredit digunakan untuk pembetulan penjualan.",
        "Nomor seri pada nota memudahkan proses audit."
    ],
    NILAI: [
        "Nilai ujian mencerminkan capaian belajar pada satu materi.",
        "Guru memberi nilai disertai rubrik agar penilaian objektif.",
        "Nilai bukan satu-satunya indikator kemampuan siswa.",
        "Kenaikan nilai terjadi setelah latihan tambahan yang terarah.",
        "Data nilai digunakan untuk menentukan remedial atau pengayaan."
    ],
    NYALA: [
        "Lampu darurat menyala otomatis saat listrik padam.",
        "Indikator baterai menyala merah bila daya hampir habis.",
        "Api unggun menyala terang di tengah perkemahan.",
        "Peringatan menyala di dasbor ketika mesin terlalu panas.",
        "Layar ponsel menyala saat menerima notifikasi baru."
    ],
    NYAMAN: [
        "Ruang belajar yang nyaman meningkatkan fokus dan produktivitas.",
        "Ventilasi yang baik membuat kelas terasa lebih nyaman.",
        "Kursi ergonomis dirancang untuk memberi posisi duduk nyaman.",
        "Suasana nyaman sering tercipta dari pencahayaan yang lembut.",
        "Aplikasi dengan antarmuka nyaman mendorong pengguna bertahan lama."
    ],
    NYATA: [
        "Data lapangan memberikan gambaran nyata tentang kondisi masyarakat.",
        "Dampak perubahan iklim semakin nyata pada wilayah pesisir.",
        "Bukti nyata diperlukan untuk mendukung sebuah pernyataan ilmiah.",
        "Perubahan perilaku terlihat nyata setelah program sosialisasi.",
        "Teknologi menghadirkan solusi nyata untuk efisiensi kerja."
    ]
};

/* ========== FUNGSI PEMBUAT KALIMAT ==========
   - Jika kata ada di SENTENCES_N → pakai kalimat khusus.
   - Jika tidak, buat VARIASI ACAK dari template berbeda.
*/
const GENERIC_TEMPLATES = [
    (w) => `${w} banyak ditemukan dalam kegiatan sehari-hari dengan fungsi yang beragam.`,
    (w) => `Di beberapa daerah, ${w.toLowerCase()} memiliki makna khusus dalam budaya setempat.`,
    (w) => `Contoh penggunaan ${w.toLowerCase()} dapat diamati langsung di lingkungan sekitar.`,
    (w) => `Pembahasan mengenai ${w.toLowerCase()} sering muncul di media dan bahan ajar.`,
    (w) => `Pemahaman tentang ${w.toLowerCase()} membantu menambah wawasan dan kosakata.`,
    (w) => `Riset sederhana dapat dilakukan untuk melihat pengaruh ${w.toLowerCase()} pada aktivitas.`,
    (w) => `Dokumentasi yang baik membuat data terkait ${w.toLowerCase()} lebih mudah dianalisis.`,
    (w) => `Kebijakan tertentu dapat mempengaruhi cara masyarakat memanfaatkan ${w.toLowerCase()}.`
];

function kalimatFor(word) {
    const W = word.toUpperCase();
    if (SENTENCES_N[W]) return SENTENCES_N[W];

    // fallback variasi acak (untuk huruf A/B atau kata baru)
    // ambil 5 template acak unik
    const copy = [...GENERIC_TEMPLATES];
    const out = [];
    for (let i = 0; i < 5 && copy.length; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0](word));
    }
    return out;
}

/* ========== INFORMASI (tetap) ========== */
function informasiFor(sentence) {
    const q = encodeURIComponent(sentence);
    return {
        img: `https://source.unsplash.com/featured/?${q}`,
        vid: `https://www.youtube.com/embed?listType=search&list=${q}`,
        text: `Ringkasan: ${sentence}. Gambar dari Unsplash (berdasarkan kata kunci), video adalah hasil pencarian YouTube.`
    };
}

/* ========== LOGIKA UI ========== */
const charInput = document.getElementById('charInput');
const btnCari = document.getElementById('btnCari');
const btnReset = document.getElementById('btnReset');
const kataWrap = document.getElementById('kataWrap');
const kalimatWrap = document.getElementById('kalimatWrap');
const infoWrap = document.getElementById('infoWrap');
const infoHint = document.getElementById('infoHint');
const infoImg = document.getElementById('infoImg');
const infoVid = document.getElementById('infoVid');
const infoText = document.getElementById('infoText');

function resetAll() {
    kataWrap.innerHTML = ''; kalimatWrap.innerHTML = '';
    infoWrap.hidden = true; infoHint.style.display = 'block';
    infoImg.src = ''; infoVid.src = ''; infoText.textContent = '';
}

function renderWords(words) {
    kataWrap.innerHTML = '';
    words.forEach(w => {
        const el = document.createElement('span'); el.className = 'word'; el.textContent = w;
        el.addEventListener('click', () => selectWord(w, el));
        kataWrap.appendChild(el);
    });
}

function selectWord(word, el) {
    document.querySelectorAll('.word').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
    const s = kalimatFor(word);
    kalimatWrap.innerHTML = '';
    s.forEach(t => {
        const d = document.createElement('div'); d.className = 'sentence'; d.textContent = t;
        d.addEventListener('click', () => selectSentence(t));
        kalimatWrap.appendChild(d);
    });
    infoWrap.hidden = true; infoHint.style.display = 'block';
}

function selectSentence(sentence) {
    const info = informasiFor(sentence);
    infoImg.src = info.img; infoVid.src = info.vid; infoText.textContent = info.text;
    infoHint.style.display = 'none'; infoWrap.hidden = false;
}

function handleSearch() {
    const ch = (charInput.value || '').trim().toUpperCase();
    resetAll();
    if (!ch || ch.length !== 1 || !/[A-Z]/.test(ch)) return;
    renderWords(DATASET[ch] || []);
}

btnCari.addEventListener('click', handleSearch);

btnReset.addEventListener('click', () => {
    charInput.value = ''; resetAll();
});

charInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
});

window.addEventListener('DOMContentLoaded', () => {
    charInput.value = 'N'; handleSearch();
});
