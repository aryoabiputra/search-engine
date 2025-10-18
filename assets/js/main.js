// ===== DATASET =====
const DATASET = {
  N: ["Nasi", "Nanas", "Nama", "Nenek", "Naik", "Nakal", "Napas", "Nampak", "Nasehat", "Negeri", "Negatif", "Nuri", "Nira", "Nomor", "November"],
  // Tambah huruf lain (minimal 15 kata per huruf):
  // A:["Apel","Ayam", ...], B:[...]
};

// ===== MEDIA MAP =====
const IMAGE_MAP = {
  "Nasi": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "Nanas": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "Nama": "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=1200&auto=format&fit=crop"
};
const VIDEO_MAP = {
  "Nasi": "https://youtu.be/0YvgbP21tdE?si=6WVO5c_YSz27PZM4",
};
const SENTENCE_MEDIA_MAP = {
  /* "Kalimat spesifik":{image:"...",video:"..."} */
};

// ===== GENERATORS =====
function generateSentences(word) {
  return [
    `${word} sering dibahas dalam konteks sehari-hari.`,
    `${word} memiliki makna dan penggunaan yang beragam.`,
    `Contoh penggunaan ${word} dapat ditemukan dalam percakapan sederhana.`,
    `${word} penting untuk dipahami dalam konteks budaya dan bahasa.`,
    `Informasi tambahan tentang ${word} membantu memperluas wawasan.`
  ];
}
function generateInfo(word, sentence) {
  const sent = SENTENCE_MEDIA_MAP[sentence] || {};
  let imageUrl = sent.image || IMAGE_MAP[word] || `https://picsum.photos/seed/${encodeURIComponent(word)}/1200/700`;
  let videoRef = sent.video || VIDEO_MAP[word];
  let videoUrl = videoRef
    ? (/^https?:\/\//.test(videoRef) ? videoRef : `https://www.youtube.com/watch?v=${videoRef}`)
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(sentence)}`;
  const desc = `${sentence} Kalimat ini berkaitan dengan kata dasar “${word}”. Media dipetakan dari konfigurasi. ` +
    `Anda bisa mengganti gambar/video di IMAGE_MAP atau SENTENCE_MEDIA_MAP.`;
  return { imageUrl, videoUrl, desc };
}

// ===== STATE & DOM =====
const q = document.getElementById('q');
const suggest = document.getElementById('suggest');
const home = document.getElementById('home');
const titlesView = document.getElementById('titlesView');
const articleView = document.getElementById('articleView');

const wordHead = document.getElementById('wordHead');
const crumbWord = document.getElementById('crumbWord');
const titlesList = document.getElementById('titlesList');

const articleTitle = document.getElementById('articleTitle');
const articleSub = document.getElementById('articleSub');
const articleImg = document.getElementById('articleImg');
const articleVideo = document.getElementById('articleVideo');
const articleDesc = document.getElementById('articleDesc');

let currentWord = null;
let currentTitles = [];

// ===== Helpers tampilan =====
function show(el) { el.style.display = 'block'; }
function hide(el) { el.style.display = 'none'; }

function openHome() {
  hide(titlesView); hide(articleView); show(home);
  suggest.style.display = 'none';
}
function openTitles(word) {
  currentWord = word;
  const titles = generateSentences(word);
  currentTitles = titles;
  titlesList.innerHTML = '';
  titles.forEach((t, i) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = t;
    div.addEventListener('click', () => openArticle(word, t));
    titlesList.appendChild(div);
  });
  wordHead.textContent = word;
  crumbWord.textContent = word;
  hide(home); hide(articleView); show(titlesView);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Paksa HTTPS + proxy anti-hotlink untuk gambar eksternal
function getSafeImageUrl(raw) {
  if (!raw) return null;
  try {
    if (!/^https?:\/\//i.test(raw)) return raw;
    const u = new URL(raw);
    u.protocol = 'https:';
    const proxied = `https://wsrv.nl/?url=${encodeURIComponent(u.hostname + u.pathname)}&w=1200&output=webp`;
    return proxied;
  } catch {
    return raw;
  }
}

function toYouTubeEmbed(urlOrId) {
  if (!urlOrId) return null;
  if (/^https?:\/\//i.test(urlOrId)) {
    try {
      const u = new URL(urlOrId);
      if (u.hostname.includes('youtube.com')) {
        const id = u.searchParams.get('v');
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.replace('/', '');
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      return null;
    } catch { return null; }
  }
  return `https://www.youtube.com/embed/${urlOrId}`;
}

function openArticle(word, title) {
  const sent = SENTENCE_MEDIA_MAP[title] || {};
  const wordImage = IMAGE_MAP[word];
  const wordVideo = VIDEO_MAP[word];

  const imgWrap = document.getElementById('imgWrap');
  const articleImg = document.getElementById('articleImg');
  imgWrap.style.display = 'none';
  articleImg.src = '';
  const imageChosen = sent.image || wordImage || `https://picsum.photos/seed/${encodeURIComponent(word)}/1200/700`;
  articleImg.src = getSafeImageUrl(imageChosen);
  imgWrap.style.display = 'block';

  const iframe = document.getElementById('articleIframe');
  const vidWrap = document.getElementById('vidWrap');
  const videoLinkWrap = document.getElementById('videoLinkWrap');
  const articleVideo = document.getElementById('articleVideo');

  iframe.src = '';
  vidWrap.style.display = 'none';
  videoLinkWrap.style.display = 'none';
  articleVideo.href = '#';

  const pref = sent.video || wordVideo;
  const embedUrl = toYouTubeEmbed(pref);
  if (embedUrl) {
    iframe.src = embedUrl;
    vidWrap.style.display = 'block';
  } else {
    const link = pref && /^https?:\/\//i.test(pref)
      ? pref
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}`;
    articleVideo.href = link;
    videoLinkWrap.style.display = 'block';
  }

  document.getElementById('articleTitle').textContent = title;
  document.getElementById('articleSub').textContent = `Kata dasar: ${word}`;
  document.getElementById('articleDesc').textContent =
    `${title} Kalimat ini berkaitan dengan kata dasar “${word}”. Media dipetakan dari konfigurasi.`;

  hide(home); hide(titlesView); show(articleView);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ===== Autocomplete =====
function getSuggestions(query) {
  if (!query) return [];
  const ch = query[0].toUpperCase();
  const pool = DATASET[ch] || [];
  return pool.filter(w => w.toUpperCase().startsWith(query.toUpperCase())).slice(0, 10);
}
function renderSuggestions(items) {
  if (!items.length) { suggest.style.display = 'none'; suggest.innerHTML = ''; return; }
  suggest.innerHTML = items.map(w => `<div class="s-item" data-word="${w}">${w}</div>`).join('');
  suggest.style.display = 'block';
  [...suggest.querySelectorAll('.s-item')].forEach(el => {
    el.addEventListener('click', () => {
      const w = el.dataset.word;
      q.value = w.toUpperCase();
      suggest.style.display = 'none';
      openTitles(w);
    });
  });
}

let t = null;
q.addEventListener('input', () => {
  clearTimeout(t);
  const val = q.value.trim();
  t = setTimeout(() => renderSuggestions(getSuggestions(val)), 120);
});
document.addEventListener('click', (e) => {
  if (!document.querySelector('.searchWrap').contains(e.target)) {
    suggest.style.display = 'none';
  }
});

document.getElementById('backToHome').addEventListener('click', (e) => { e.preventDefault(); openHome(); });
document.getElementById('backToTitles').addEventListener('click', (e) => { e.preventDefault(); if (currentWord) openTitles(currentWord); });

const modeBtn = document.getElementById('mode');
const setMode = (dark) => { document.body.classList.toggle('dark', dark); modeBtn.textContent = dark ? 'Mode Terang' : 'Mode Gelap'; };
setMode(false);
modeBtn.addEventListener('click', () => setMode(!document.body.classList.contains('dark')));
