// Template generik sebagai fallback (acak, tidak repetitif)
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
    const key = word.toUpperCase();
    if (window.SENTENCES && window.SENTENCES[key]) return window.SENTENCES[key];

    // fallback: ambil 5 template acak unik
    const pool = [...GENERIC_TEMPLATES];
    const out = [];
    for (let i = 0; i < 5 && pool.length; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        out.push(pool.splice(idx, 1)[0](word));
    }
    return out;
}

function informasiFor(sentence) {
    const q = encodeURIComponent(sentence);
    return {
        img: `https://source.unsplash.com/featured/?${q}`,
        vid: `https://www.youtube.com/embed?listType=search&list=${q}`,
        text: `Ringkasan: ${sentence}. Gambar dari Unsplash (berdasarkan kata kunci), video adalah hasil pencarian YouTube.`
    };
}

// --- DOM refs
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

let currentWord = null;

function resetAll() {
    kataWrap.innerHTML = ''; kalimatWrap.innerHTML = '';
    infoWrap.hidden = true; infoHint.style.display = 'block';
    infoImg.src = ''; infoVid.src = ''; infoText.textContent = '';
}

function renderWords(words) {
    kataWrap.innerHTML = '';
    words.forEach(w => {
        const el = document.createElement('span');
        el.className = 'word'; el.textContent = w;
        el.addEventListener('click', () => selectWord(w, el));
        kataWrap.appendChild(el);
    });
}

// function selectWord(word, el) {
//     document.querySelectorAll('.word').forEach(n => n.classList.remove('active'));
//     el.classList.add('active');
//     const sentences = kalimatFor(word);
//     kalimatWrap.innerHTML = '';
//     sentences.forEach(s => {
//         const d = document.createElement('div'); d.className = 'sentence'; d.textContent = s;
//         d.addEventListener('click', () => selectSentence(s));
//         kalimatWrap.appendChild(d);
//     });
//     infoWrap.hidden = true; infoHint.style.display = 'block';
// }

function selectWord(word, el) {
    currentWord = word.toUpperCase();  // <- simpan kata aktif
    document.querySelectorAll('.word').forEach(n => n.classList.remove('active'));
    el.classList.add('active');

    const sentences = kalimatFor(word);
    kalimatWrap.innerHTML = '';
    sentences.forEach((s, idx) => {
        const d = document.createElement('div');
        d.className = 'sentence';
        d.textContent = s;
        d.dataset.index = idx;           // <- penting: simpan index kalimat
        d.addEventListener('click', () => selectSentence(idx, s));
        kalimatWrap.appendChild(d);
    });

    infoWrap.hidden = true; infoHint.style.display = 'block';
}


// function selectSentence(sentence) {
//     const info = informasiFor(sentence);
//     infoImg.src = info.img;
//     infoVid.src = info.vid;
//     infoText.textContent = info.text;
//     infoHint.style.display = 'none'; infoWrap.hidden = false;
// }

function selectSentence(idx, sentence) {
    // 1) Coba pakai MEDIA terkurasi (jika ada)
    const upper = currentWord || "";
    const mediaList = (window.MEDIA && window.MEDIA[upper]) ? window.MEDIA[upper] : null;
    let info;
    if (mediaList && mediaList[idx]) {
        const m = mediaList[idx];
        info = {
            img: m.img,
            vid: m.vid,
            text: m.text || `Penjelasan: ${sentence}`
        };
    } else {
        // 2) Fallback ke auto-search (tetap relevan dengan kalimat)
        info = informasiFor(sentence);
    }

    // Render
    infoImg.src = info.img;
    infoVid.src = info.vid;
    infoText.textContent = info.text;
    infoHint.style.display = 'none';
    infoWrap.hidden = false;
}

function handleSearch() {
    const ch = (charInput.value || '').trim().toUpperCase();
    resetAll();
    if (!ch || ch.length !== 1 || !/[A-Z]/.test(ch)) return;
    const words = (window.DATASET && window.DATASET[ch]) ? window.DATASET[ch] : [];
    renderWords(words);
}

btnCari.addEventListener('click', handleSearch);

btnReset.addEventListener('click', () => {
    charInput.value = ''; resetAll();
});

charInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
});

// Biar kursor langsung di input saat dibuka
window.addEventListener('DOMContentLoaded', () => {
    charInput.focus();
});


