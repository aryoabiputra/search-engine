/* =========================
   DATASET & KALIMAT PER-KATA (UNIK)
   ========================= */

// 15+ kata untuk huruf N (wajib tugas)
const WORDS_N = [
  "NASI",
  "NANAS",
  "NAMA",
  "NENEK",
  "NAIK",
  "NAKAL",
  "NAPAS",
  "NAMPAK",
  "NASEHAT",
  "NEGERI",
  "NEGATIF",
  "NURI",
  "NIRA",
  "NOMOR",
  "NOVEMBER",
  "NOTA",
  "NILAI",
  "NYALA",
  "NYAMAN",
  "NYATA",
];

// 15 kata huruf A (lengkap)
const WORDS_A = [
  "AIR",
  "AKAR",
  "ALAS",
  "AMAL",
  "ANAK",
  "ANGIN",
  "APEL",
  "ASAM",
  "ASLI",
  "ANTAR",
  "ALUR",
  "AROMA",
  "AMAN",
  "AKTIF",
  "AWAN",
];

// 15 kata huruf B (lengkap)
const WORDS_B = [
  "BOLA",
  "BANGUN",
  "BESAR",
  "BULAN",
  "BAKU",
  "BATAL",
  "BAYAM",
  "BEBAS",
  "BUNGA",
  "BATU",
  "BANYAK",
  "BAGUS",
  "BAGI",
  "BIMBING",
  "BANGGA",
];

// 15 kata huruf C (baru, lengkap)
const WORDS_C = [
  "CAHAYA",
  "CATAT",
  "CERMIN",
  "CERITA",
  "CEPAT",
  "CINTA",
  "CITA",
  "CUACA",
  "CUCI",
  "CUKAI",
  "CANGKIR",
  "CANGKUL",
  "CABAI",
  "CELANA",
  "COKELAT",
];

// Peta huruf -> daftar kata
window.DATASET = { N: WORDS_N, A: WORDS_A, B: WORDS_B, C: WORDS_C };

/* =========================
   KALIMAT KHUSUS PER-KATA
   ========================= */

// N
const SENTENCES_N = {
  NASI: [
    "Nasi menjadi sumber karbohidrat utama di banyak daerah di Indonesia.",
    "Petani menanam padi agar menghasilkan beras yang kelak dimasak menjadi nasi.",
    "Sebagian orang menyantap nasi tiga kali sehari sebagai menu pokok.",
    "Dalam upacara adat tertentu, nasi tumpeng digunakan sebagai simbol syukur.",
    "Kajian gizi membahas porsi nasi yang seimbang dengan lauk dan sayur.",
  ],
  NANAS: [
    "Nanas memiliki rasa manis-asam dengan kandungan vitamin C yang tinggi.",
    "Daun dan mahkota nanas sering dimanfaatkan untuk serat alami.",
    "Buah nanas segar cocok diolah menjadi jus atau selai.",
    "Enzim bromelain pada nanas digunakan untuk melunakkan daging.",
    "Daerah tropis menyediakan iklim yang ideal untuk budidaya nanas.",
  ],
  NAMA: [
    "Nama berfungsi sebagai identitas resmi yang membedakan seseorang.",
    "Dalam formulir, kolom nama harus ditulis sesuai kartu identitas.",
    "Sebagian budaya memberi nama berdasarkan makna dan harapan orang tua.",
    "Perubahan nama memerlukan prosedur administratif tertentu.",
    "Penyimpanan data mengandalkan nama beserta penanda unik lain.",
  ],
  NENEK: [
    "Nenek sering menjadi sumber cerita tradisi keluarga.",
    "Banyak cucu belajar resep masakan rumahan dari nenek.",
    "Peran nenek dalam pengasuhan kerap membantu orang tua bekerja.",
    "Kesehatan tulang pada usia nenek perlu dijaga dengan olahraga ringan.",
    "Momen berkumpul bersama nenek biasanya terjadi saat hari raya.",
  ],
  NAIK: [
    "Harga bahan bakar naik ketika pasokan global menurun.",
    "Penumpang diminta tertib saat naik ke dalam kendaraan umum.",
    "Suhu tubuh yang naik dapat menjadi tanda infeksi.",
    "Grafik penjualan naik setelah promosi berlangsung daring.",
    "Air sungai naik pada musim hujan sehingga perlu kewaspadaan.",
  ],
  NAKAL: [
    "Anak yang terlihat nakal belum tentu berniat buruk; kadang hanya aktif.",
    "Aturan kelas dibuat untuk mengurangi perilaku nakal yang mengganggu.",
    "Pendekatan dialog sering efektif menangani sikap nakal.",
    "Label 'nakal' sebaiknya diganti dengan penjelasan perilaku spesifik.",
    "Konsistensi aturan di rumah membantu menekan kebiasaan nakal.",
  ],
  NAPAS: [
    "Latihan pernapasan membantu menenangkan pikiran saat cemas.",
    "Irama napas teratur diperlukan saat olahraga intens.",
    "Gangguan napas bisa disebabkan alergi atau infeksi saluran pernapasan.",
    "Dokter memeriksa frekuensi napas sebagai tanda vital pasien.",
    "Meditasi fokus pada napas untuk meningkatkan konsentrasi.",
  ],
  NAMPAK: [
    "Pelangi tampak jelas setelah hujan reda dan matahari muncul.",
    "Kesalahan ejaan tampak pada papan petunjuk di jalan.",
    "Hasil renovasi mulai tampak rapi dibanding sebelumnya.",
    "Efek cahaya membuat objek tampak lebih besar di foto.",
    "Dari puncak bukit, kota tampak seperti kumpulan lampu kecil.",
  ],
  NASEHAT: [
    "Nasehat guru membantu siswa memahami pilihan belajar yang tepat.",
    "Orang tua memberi nasehat agar anak lebih berhati-hati di luar rumah.",
    "Nasehat yang baik disampaikan dengan contoh, bukan sekadar kata-kata.",
    "Sebelum memutuskan karier, banyak orang mencari nasehat profesional.",
    "Menerima nasehat membutuhkan kerendahan hati dan kemauan berubah.",
  ],
  NEGERI: [
    "Negeri kepulauan memiliki keragaman bahasa dan budaya.",
    "Kebijakan negeri ditetapkan melalui proses politik yang teratur.",
    "Pariwisata menjadi sektor penting pendapatan beberapa negeri.",
    "Konstitusi mengatur hak dan kewajiban warga negeri.",
    "Pendidikan negeri berupaya merata hingga daerah terpencil.",
  ],
  NEGATIF: [
    "Hasil tes negatif menandakan tidak terdeteksi indikator penyakit.",
    "Sikap negatif dapat memengaruhi suasana kerja satu tim.",
    "Dalam matematika, bilangan negatif terletak di kiri nol pada garis bilangan.",
    "Umpan balik negatif kadang diperlukan untuk perbaikan proses.",
    "Efek samping negatif harus dicantumkan pada kemasan obat.",
  ],
  NURI: [
    "Burung nuri dikenal cerdas dan mampu menirukan suara manusia.",
    "Warna bulu nuri sangat cerah sehingga mudah dikenali.",
    "Perawatan nuri memerlukan kandang bersih dan pakan seimbang.",
    "Sebagian nuri hidup berpasangan dan setia pada satu pasangan.",
    "Populasi nuri liar dilindungi untuk mencegah perburuan.",
  ],
  NIRA: [
    "Nira adalah cairan manis yang disadap dari bunga kelapa atau aren.",
    "Pengolahan nira dapat menghasilkan gula merah atau cuka.",
    "Kualitas nira dipengaruhi kebersihan wadah penampung.",
    "Petani memanen nira pada pagi atau sore hari untuk menjaga kesegaran.",
    "Fermentasi nira terjadi cepat bila dibiarkan pada suhu hangat.",
  ],
  NOMOR: [
    "Nomor antrian memudahkan pelayanan agar berjalan teratur.",
    "Setiap dokumen resmi memiliki nomor unik untuk identifikasi.",
    "Nomor telepon harus dijaga kerahasiaannya dari penipuan.",
    "Penomoran halaman membantu pembaca mengikuti urutan materi.",
    "Sistem parkir menggunakan nomor plat untuk pencatatan keluar-masuk.",
  ],
  NOVEMBER: [
    "Di Indonesia, bulan November biasanya memasuki musim hujan.",
    "Beberapa negara memperingati hari penting nasional pada November.",
    "Kalender akademik sering menetapkan ujian akhir di November.",
    "Promo belanja besar-besaran berlangsung pada pekan Black Friday di November.",
    "Kegiatan maraton internasional kerap dijadwalkan pada bulan November.",
  ],
  NOTA: [
    "Nota pembelian berfungsi sebagai bukti transaksi yang sah.",
    "Toko wajib mencantumkan rincian barang dan pajak pada nota.",
    "Pelanggan diminta menyimpan nota untuk klaim garansi.",
    "Di akuntansi, nota kredit digunakan untuk pembetulan penjualan.",
    "Nomor seri pada nota memudahkan proses audit.",
  ],
  NILAI: [
    "Nilai ujian mencerminkan capaian belajar pada satu materi.",
    "Guru memberi nilai disertai rubrik agar penilaian objektif.",
    "Nilai bukan satu-satunya indikator kemampuan siswa.",
    "Kenaikan nilai terjadi setelah latihan tambahan yang terarah.",
    "Data nilai digunakan untuk menentukan remedial atau pengayaan.",
  ],
  NYALA: [
    "Lampu darurat menyala otomatis saat listrik padam.",
    "Indikator baterai menyala merah bila daya hampir habis.",
    "Api unggun menyala terang di tengah perkemahan.",
    "Peringatan menyala di dasbor ketika mesin terlalu panas.",
    "Layar ponsel menyala saat menerima notifikasi baru.",
  ],
  NYAMAN: [
    "Ruang belajar yang nyaman meningkatkan fokus dan produktivitas.",
    "Ventilasi yang baik membuat kelas terasa lebih nyaman.",
    "Kursi ergonomis dirancang untuk memberi posisi duduk nyaman.",
    "Suasana nyaman sering tercipta dari pencahayaan yang lembut.",
    "Aplikasi dengan antarmuka nyaman mendorong pengguna bertahan lama.",
  ],
  NYATA: [
    "Data lapangan memberikan gambaran nyata tentang kondisi masyarakat.",
    "Dampak perubahan iklim semakin nyata pada wilayah pesisir.",
    "Bukti nyata diperlukan untuk mendukung sebuah pernyataan ilmiah.",
    "Perubahan perilaku terlihat nyata setelah program sosialisasi.",
    "Teknologi menghadirkan solusi nyata untuk efisiensi kerja.",
  ],
};

// A
const SENTENCES_A = {
  AIR: [
    "Air bersih diperlukan untuk minum dan memasak sehari-hari.",
    "Siklus air mencakup penguapan, kondensasi, dan presipitasi.",
    "Kualitas air dipengaruhi oleh aktivitas industri dan rumah tangga.",
    "Penghematan air dilakukan dengan memperbaiki kebocoran dan menggunakan kembali.",
    "Pengolahan air limbah membantu mencegah pencemaran sungai.",
  ],
  AKAR: [
    "Akar menyerap air dan mineral dari dalam tanah.",
    "Struktur akar mempengaruhi kekuatan tegaknya tumbuhan.",
    "Beberapa tanaman memiliki akar napas untuk bertahan di rawa.",
    "Akar serabut dan akar tunggang memiliki fungsi yang berbeda.",
    "Kerusakan akar dapat menghambat pertumbuhan tanaman.",
  ],
  ALAS: [
    "Alas kaki melindungi telapak dari permukaan yang kasar.",
    "Alas meja digunakan untuk mencegah goresan pada permukaan.",
    "Pemilihan alas tidur memengaruhi kualitas istirahat.",
    "Alas kertas diletakkan untuk menjaga kebersihan saat makan.",
    "Alas lantai membantu meredam suara langkah.",
  ],
  AMAL: [
    "Amal menjadi bentuk kepedulian sosial terhadap sesama.",
    "Banyak lembaga menyalurkan amal dalam program kemanusiaan.",
    "Transparansi penting agar penyaluran amal dapat dipercaya.",
    "Amal dapat berupa tenaga, barang, ataupun dana.",
    "Kesadaran beramal sering meningkat saat terjadi bencana.",
  ],
  ANAK: [
    "Anak membutuhkan lingkungan yang aman untuk tumbuh kembang.",
    "Nutrisi seimbang berperan penting bagi kesehatan anak.",
    "Pendidikan karakter membantu anak belajar tanggung jawab.",
    "Waktu bermain mendorong kreativitas dan interaksi sosial anak.",
    "Vaksinasi melindungi anak dari berbagai penyakit menular.",
  ],
  ANGIN: [
    "Angin darat dan angin laut terjadi karena perbedaan suhu.",
    "Turbin angin dimanfaatkan untuk menghasilkan listrik.",
    "Kecepatan angin diukur dengan alat bernama anemometer.",
    "Arah angin mempengaruhi pola penerbangan pesawat.",
    "Cuaca ekstrem ditandai dengan hembusan angin yang kuat.",
  ],
  APEL: [
    "Apel mengandung serat pektin yang baik untuk pencernaan.",
    "Kulit apel menyimpan banyak antioksidan bermanfaat.",
    "Apel bisa diolah menjadi pai, jus, atau cuka sari buah.",
    "Penyimpanan apel di suhu rendah memperpanjang kesegarannya.",
    "Beberapa varietas apel memiliki rasa lebih asam daripada yang lain.",
  ],
  ASAM: [
    "Rasa asam berasal dari kehadiran ion hidrogen dalam larutan.",
    "Skala pH digunakan untuk mengukur tingkat keasaman.",
    "Buah-buahan tropis banyak yang memiliki rasa asam segar.",
    "Asam kuat dapat menyebabkan korosi pada logam.",
    "Netralisasi terjadi saat asam bereaksi dengan basa.",
  ],
  ASLI: [
    "Label asli penting untuk mencegah peredaran barang palsu.",
    "Sertifikat keaslian diberikan pada karya seni tertentu.",
    "Cita rasa asli dipertahankan dengan resep tradisional.",
    "Bukti asli biasanya dibutuhkan dalam proses hukum.",
    "Dokumen asli harus disimpan di tempat yang aman.",
  ],
  ANTAR: [
    "Layanan antar barang semakin cepat dengan bantuan kurir digital.",
    "Koordinasi antar divisi menentukan kelancaran proyek.",
    "Pertukaran antar budaya memperkaya sudut pandang masyarakat.",
    "Kerja sama antar negara diperlukan untuk isu global.",
    "Komunikasi antar tim harus jelas untuk mencegah miskomunikasi.",
  ],
  ALUR: [
    "Alur cerita yang runtut memudahkan penonton mengikuti film.",
    "Dokumen teknis perlu alur kerja yang jelas dan terukur.",
    "Alur data mendeskripsikan perpindahan informasi antar modul.",
    "Perencanaan alur produksi meminimalkan waktu tunggu.",
    "Peta proses membantu memvisualkan alur dari awal hingga akhir.",
  ],
  AROMA: [
    "Aroma kopi berubah sesuai proses sangrai dan penyeduhan.",
    "Beberapa tanaman mengeluarkan aroma untuk menarik penyerbuk.",
    "Aroma terapi digunakan untuk membantu relaksasi.",
    "Pengemasan mempengaruhi ketahanan aroma makanan.",
    "Sensor elektronik dapat mendeteksi pola aroma tertentu.",
  ],
  AMAN: [
    "Kata sandi kuat membuat akun lebih aman dari peretasan.",
    "Rambu keselamatan membantu pengguna berada pada jalur aman.",
    "Protokol keamanan menjaga data tetap aman saat transmisi.",
    "Rancangan bangunan harus aman terhadap gempa.",
    "Kendaraan dilengkapi fitur aman seperti ABS dan airbag.",
  ],
  AKTIF: [
    "Belajar aktif mendorong siswa terlibat dalam diskusi.",
    "Gaya hidup aktif membantu menjaga kebugaran tubuh.",
    "Partisipasi aktif diperlukan untuk mencapai target tim.",
    "Pengguna aktif suatu aplikasi menunjukkan tingkat retensi.",
    "Alarm aktif menandakan sistem sedang berjalan.",
  ],
  AWAN: [
    "Awan cumulonimbus sering membawa hujan lebat dan petir.",
    "Bentuk awan dipengaruhi oleh arus udara dan kelembapan.",
    "Prediksi cuaca memperhatikan pergerakan awan dari citra satelit.",
    "Awan rendah dapat membatasi jarak pandang penerbangan.",
    "Perubahan warna awan menandakan intensitas matahari di baliknya.",
  ],
};

// B
const SENTENCES_B = {
  BOLA: [
    "Bola dipakai dalam berbagai cabang olahraga seperti sepak bola dan basket.",
    "Tekanan udara dalam bola mempengaruhi pantulannya.",
    "Ukuran bola disesuaikan dengan standar masing-masing olahraga.",
    "Latihan mengontrol bola meningkatkan koordinasi kaki dan mata.",
    "Material bola menentukan daya tahan saat digunakan.",
  ],
  BANGUN: [
    "Bangun datar memiliki luas sedangkan bangun ruang memiliki volume.",
    "Proyek bangun gedung memerlukan perencanaan struktur yang matang.",
    "Bangun kebiasaan baik dilakukan secara bertahap dan konsisten.",
    "Bangun tidur yang cukup membantu fokus di siang hari.",
    "Bangun jalan baru membuka akses ekonomi ke daerah terpencil.",
  ],
  BESAR: [
    "Bilangan besar dapat direpresentasikan dalam notasi ilmiah.",
    "Perusahaan besar biasanya memiliki struktur organisasi kompleks.",
    "Gelombang besar berpotensi membahayakan pelayaran.",
    "Perubahan besar dimulai dari langkah kecil yang konsisten.",
    "Data berukuran besar memerlukan teknik pemrosesan khusus.",
  ],
  BULAN: [
    "Fase bulan mempengaruhi pasang surut air laut.",
    "Permukaan bulan dipenuhi kawah akibat tumbukan meteoroid.",
    "Kalender hijriah menghitung waktu berdasarkan peredaran bulan.",
    "Penjelajahan ke bulan menjadi tonggak sejarah sains ruang angkasa.",
    "Gerhana bulan terjadi saat bumi berada di antara matahari dan bulan.",
  ],
  BAKU: [
    "Bahasa baku digunakan pada dokumen formal dan akademik.",
    "Standar baku mutu menjaga kualitas produk industri.",
    "Satuan baku memudahkan pengukuran yang konsisten.",
    "Prosedur baku operasi ditetapkan untuk keselamatan kerja.",
    "Biaya baku digunakan dalam akuntansi manajerial.",
  ],
  BATAL: [
    "Tiket bisa batal jika penumpang terlambat check-in.",
    "Kontrak batal apabila syarat utama tidak terpenuhi.",
    "Rapat batal karena quorum peserta tidak tercapai.",
    "Transaksi batal bila terjadi kesalahan input harga.",
    "Pemesanan dapat batal sesuai kebijakan penyedia layanan.",
  ],
  BAYAM: [
    "Bayam kaya zat besi dan baik untuk pembentukan hemoglobin.",
    "Daun bayam mudah layu sehingga perlu pengolahan cepat.",
    "Bayam hijau sering dimasak menjadi sayur bening.",
    "Budidaya bayam dapat dilakukan di lahan sempit.",
    "Kualitas bayam ditentukan oleh kesegaran daun.",
  ],
  BEBAS: [
    "Kebebasan berpendapat harus diiringi tanggung jawab.",
    "Waktu bebas dapat dimanfaatkan untuk belajar mandiri.",
    "Alergi bebas gluten membutuhkan pilihan makanan khusus.",
    "Ruang bebas asap rokok dibuat untuk kesehatan bersama.",
    "Biaya bebas administrasi menjadi nilai tambah layanan.",
  ],
  BUNGA: [
    "Bunga adalah organ reproduksi pada tumbuhan berbiji.",
    "Tingkat bunga bank mempengaruhi minat kredit.",
    "Aroma bunga menarik lebah untuk proses penyerbukan.",
    "Seni merangkai bunga memiliki teknik komposisi warna.",
    "Musim memengaruhi periode mekar berbagai jenis bunga.",
  ],
  BATU: [
    "Batu sedimentasi terbentuk dari pengendapan material.",
    "Tekstur batu menentukan penggunaannya pada konstruksi.",
    "Batu mulia dinilai dari kejernihan dan kelangkaannya.",
    "Erosi batu terjadi karena angin, air, dan suhu.",
    "Ukuran batu pecah menentukan kualitas agregat jalan.",
  ],
  BANYAK: [
    "Konsep banyak dalam matematika terkait kardinalitas himpunan.",
    "Pilihan yang terlalu banyak bisa menurunkan kecepatan keputusan.",
    "Data yang banyak perlu ringkasan statistik untuk dipahami.",
    "Banyaknya partikel mempengaruhi tekanan gas ideal.",
    "Banyak variasi produk memberi fleksibilitas konsumen.",
  ],
  BAGUS: [
    "Desain yang bagus mengutamakan fungsi sebelum estetika.",
    "Kamera bagus tidak selalu menjamin foto berkualitas tanpa teknik.",
    "Review bagus meningkatkan kepercayaan pengguna baru.",
    "Bahan bangunan yang bagus tahan terhadap cuaca ekstrem.",
    "Kebiasaan bagus dibangun melalui latihan berulang.",
  ],
  BAGI: [
    "Operator bagi digunakan untuk membagi dua bilangan.",
    "Tugas kerja dibagi agar beban tim lebih seimbang.",
    "Pendapatan dibagi sesuai kontribusi masing-masing anggota.",
    "Waktu belajar dibagi menjadi sesi singkat agar fokus.",
    "Lahan pertanian dibagi berdasarkan batas alam.",
  ],
  BIMBING: [
    "Guru membimbing siswa memahami konsep yang sulit.",
    "Program mentoring membimbing karier profesional.",
    "Orang tua membimbing anak bersikap sopan di lingkungan.",
    "Asisten virtual dapat membimbing pengguna langkah demi langkah.",
    "Konselor membimbing proses pengambilan keputusan.",
  ],
  BANGGA: [
    "Prestasi tim membuat pendukung merasa bangga.",
    "Produk lokal yang berkualitas menumbuhkan rasa bangga.",
    "Orang tua bangga melihat anaknya lulus sekolah.",
    "Bangga berlebihan perlu diimbangi sikap rendah hati.",
    "Koleksi museum mencatat karya yang membanggakan bangsa.",
  ],
};

// C
const SENTENCES_C = {
  CAHAYA: [
    "Cahaya bergerak lurus di medium homogen dan memantul pada permukaan.",
    "Kecepatan cahaya di ruang hampa adalah konstanta alam yang sangat besar.",
    "Pembiasan cahaya terjadi saat melewati medium berbeda kerapatan optik.",
    "Spektrum cahaya tampak terdiri dari warna merah hingga ungu.",
    "Serat optik memandu cahaya untuk komunikasi berkecepatan tinggi.",
  ],
  CATAT: [
    "Mencatat membantu mengingat materi secara sistematis.",
    "Format catat poin memudahkan penyusunan ide utama.",
    "Aplikasi catatan sinkron di berbagai perangkat.",
    "Catat tanggal penting agar tidak melewatkan tenggat.",
    "Kebiasaan catat ringkas meningkatkan efisiensi belajar.",
  ],
  CERMIN: [
    "Cermin datar menghasilkan bayangan maya yang tegak.",
    "Cermin cekung dapat memfokuskan cahaya pada titik api.",
    "Cermin cembung memperluas bidang pandang pengendara.",
    "Lapisan reflektif pada cermin menentukan kualitas pantulan.",
    "Sudut datang sama dengan sudut pantul pada cermin.",
  ],
  CERITA: [
    "Cerita rakyat merekam nilai dan nasihat leluhur.",
    "Struktur cerita mencakup awal, konflik, dan resolusi.",
    "Cerita pendek efektif menyampaikan gagasan dengan ringkas.",
    "Ilustrasi memperkaya penyampaian cerita untuk anak.",
    "Keterampilan bercerita berguna pada presentasi publik.",
  ],
  CEPAT: [
    "Respon cepat meningkatkan kepuasan pengguna layanan.",
    "Komputasi cepat dipengaruhi algoritma dan perangkat keras.",
    "Transportasi cepat mengurangi waktu tempuh antar kota.",
    "Detak jantung cepat perlu dievaluasi bila disertai pusing.",
    "Gerak cepat membutuhkan koordinasi otot yang baik.",
  ],
  CINTA: [
    "Cinta sering diungkap lewat perhatian dan waktu berkualitas.",
    "Ekspresi cinta berbeda pada setiap budaya dan individu.",
    "Penelitian psikologi membahas bahasa cinta yang beragam.",
    "Cinta diri penting untuk menjaga kesehatan mental.",
    "Kejujuran menjadi dasar kepercayaan dalam hubungan cinta.",
  ],
  CITA: [
    "Cita-cita memberi arah pada rencana belajar jangka panjang.",
    "Peta jalan membantu mewujudkan cita yang terukur.",
    "Cita yang jelas mendorong konsistensi latihan harian.",
    "Dukungan lingkungan mempercepat pencapaian cita-cita.",
    "Evaluasi berkala menjaga cita tetap relevan.",
  ],
  CUACA: [
    "Cuaca dipengaruhi suhu, kelembapan, dan tekanan udara.",
    "Aplikasi cuaca memprediksi hujan berdasarkan citra radar.",
    "Perubahan cuaca mendadak berdampak pada jadwal penerbangan.",
    "Ilmu meteorologi mempelajari pola perubahan cuaca.",
    "Cuaca ekstrem membutuhkan sistem peringatan dini.",
  ],
  CUCI: [
    "Mencuci tangan dengan sabun mencegah penularan penyakit.",
    "Label pakaian berisi instruksi cuci yang harus diikuti.",
    "Mesin cuci otomatis mengatur siklus bilas dan peras.",
    "Detergen ramah lingkungan mengurangi residu berbahaya.",
    "Kebiasaan cuci peralatan makan menjaga higienitas dapur.",
  ],
  CUKAI: [
    "Cukai dikenakan pada barang tertentu seperti tembakau dan minuman beralkohol.",
    "Kebijakan cukai bertujuan mengendalikan konsumsi dan meningkatkan penerimaan.",
    "Pelabelan cukai memudahkan penegakan aturan kepabeanan.",
    "Reformasi cukai sering dibahas dalam kebijakan fiskal.",
    "Pengawasan cukai mencegah peredaran barang ilegal.",
  ],
  CANGKIR: [
    "Cangkir keramik menjaga suhu minuman lebih lama.",
    "Desain pegangan cangkir memengaruhi kenyamanan saat digunakan.",
    "Ukuran cangkir diukur dalam mililiter atau ons.",
    "Motif pada cangkir kerap menjadi koleksi hobi.",
    "Cangkir bertutup membantu mencegah tumpahan.",
  ],
  CANGKUL: [
    "Cangkul digunakan untuk menggemburkan tanah di kebun.",
    "Bahan baja pada cangkul menentukan ketahanan pemakaian.",
    "Pegangan cangkul perlu disesuaikan agar tidak mudah lepas.",
    "Perawatan cangkul dilakukan dengan membersihkan dan mengasahnya.",
    "Cangkul cocok untuk lahan kecil sebelum alat mesin digunakan.",
  ],
  CABAI: [
    "Cabai mengandung capsaicin yang memberikan sensasi pedas.",
    "Varietas cabai menentukan tingkat kepedasan skala Scoville.",
    "Cabai segar dapat dikeringkan untuk memperpanjang masa simpan.",
    "Harga cabai sering berfluktuasi karena pasokan dan cuaca.",
    "Cabai rawit lebih pedas daripada banyak jenis cabai besar.",
  ],
  CELANA: [
    "Celana dibuat dari bahan yang berbeda sesuai aktivitas.",
    "Ukuran celana dinyatakan dalam lingkar pinggang dan panjang kaki.",
    "Celana formal biasanya dipadukan dengan kemeja dan jas.",
    "Perawatan celana bergantung pada jenis kainnya.",
    "Desain saku celana memengaruhi fungsi dan kenyamanan.",
  ],
  COKELAT: [
    "Cokelat berasal dari biji kakao yang difermentasi dan disangrai.",
    "Kadar kakao menentukan intensitas rasa cokelat.",
    "Cokelat hitam kaya antioksidan dibanding varian lain.",
    "Proses tempering memberi kilap dan tekstur cokelat yang baik.",
    "Cokelat sering digunakan dalam kue dan minuman manis.",
  ],
};

// Gabungkan semua menjadi satu objek global
window.SENTENCES = {
  ...SENTENCES_N,
  ...SENTENCES_A,
  ...SENTENCES_B,
  ...SENTENCES_C,
};

// Sudah ada: window.SENTENCES.CAHAYA = [5 kalimat...]

window.MEDIA = window.MEDIA || {};
window.MEDIA.CAHAYA = [
  {
    img: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200",
    vid: "https://www.youtube.com/embed/nkK_8r9V2p0", // contoh video “light basics”
    text: "Cahaya merambat lurus pada medium homogen; berlaku pada skala makro."
  },
  {
    img: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200",
    vid: "https://www.youtube.com/embed/2KZb2_vcNTg", // kecepatan cahaya
    text: "Kecepatan cahaya di vakum ≈ 3×10^8 m/s, konstanta fundamental fisika."
  },
  {
    img: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1200",
    vid: "https://www.youtube.com/embed/6wzHtzsVZr8", // pembiasan
    text: "Pembiasan terjadi saat cahaya melintas medium beda indeks bias (Snellius)."
  },
  {
    img: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?q=80&w=1200",
    vid: "https://www.youtube.com/embed/4Z9WVZddH9w", // spektrum tampak
    text: "Spektrum tampak: merah–ungu; tiap warna beda panjang gelombang."
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
    vid: "https://www.youtube.com/embed/fsW9q-iB_7s", // serat optik
    text: "Serat optik mengandalkan pemantulan total dalam untuk transmisi data."
  }
];
