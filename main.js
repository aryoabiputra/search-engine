// ====== Index kalimat (mirip mesin pencari kecil) ======
const DOCS = [];              // { id, word, sentIndex, text, tokens }
const INVERTED = new Map();   // term -> Set(docId)

function tokenize(s){
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\s]/g, " ")
    .split(/\s+/).filter(Boolean);
}

function addToIndex(doc){
  DOCS.push(doc);
  const seen = new Set();
  doc.tokens.forEach(t=>{
    if (seen.has(t)) return; seen.add(t);
    if (!INVERTED.has(t)) INVERTED.set(t, new Set());
    INVERTED.get(t).add(doc.id);
  });
}

function buildIndex(){
  let id = 0;
  Object.keys(window.SENTENCES).forEach(word=>{
    const arr = window.SENTENCES[word];
    arr.forEach((text, idx)=>{
      const tokens = tokenize(text);
      addToIndex({ id:id++, word, sentIndex: idx, text, tokens });
    });
  });
}

// Skor sederhana: kecocokan term query dengan dokumen
function scoreDocs(queryWord){
  const q = tokenize(queryWord);
  const candidates = new Set();
  q.forEach(term=>{
    const s = INVERTED.get(term);
    if (s) s.forEach(id=>candidates.add(id));
  });

  const res = [];
  candidates.forEach(id=>{
    const d = DOCS[id];
    let score = 0;
    q.forEach(term=>{
      const cnt = d.tokens.filter(t=>t===term).length;
      score += cnt;
      if (term === d.word.toLowerCase()) score += 1.5;
    });
    score += Math.min(d.text.length/80, 1.0); // sedikit bonus
    res.push({doc:d, score});
  });
  res.sort((a,b)=>b.score-a.score);
  return res.map(r=>r.doc);
}

// ====== PER-KALIMAT: generator media spesifik ======
// Stopwords (ID+EN) ringkas agar keyword kalimat lebih “isi”.
const STOP = new Set([
  "yang","dan","atau","dengan","di","ke","dari","untuk","pada","sebagai","agar","karena","dalam","itu","ini",
  "the","a","an","of","to","for","in","on","is","are","be","as","by","at","from","that","this","it","and","or"
]);

function extractKeywords(sentence, maxK=4){
  const words = tokenize(sentence).filter(w=>w.length>3 && !STOP.has(w));
  if (!words.length) return tokenize(sentence).slice(0, maxK);
  // Ambil yang unik & agak informatif
  const uniq = [];
  for (const w of words){
    if (!uniq.includes(w)) uniq.push(w);
    if (uniq.length >= maxK) break;
  }
  return uniq;
}

// Hash ringan untuk beda kalimat -> beda seed (agar gambar beda)
function hashString(s){
  let h = 0;
  for (let i=0; i<s.length; i++){
    h = (h*31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// === Inti: informasi spesifik per kalimat ===
function informasiPerKalimat(sentence){
  const kws  = extractKeywords(sentence, 4);

  // >>> perbaikan: pisahkan keyword dengan koma, tanpa spasi/encode %20
  const topicForImg = kws.map(k => k.trim().replace(/\s+/g,'-')).join(',');

  // seed unik per kalimat agar gambar beda, tapi konsisten
  const seed = hashString(sentence) % 999999;

  // Gambar: loremflickr stabil dengan format ".../<w>/<h>/<katakunci,katakunci>?lock=seed"
  const img = `https://loremflickr.com/1200/600/${topicForImg}?lock=${seed}`;

  // Video: pakai domain "youtube-nocookie" (lebih toleran embed)
  const q   = encodeURIComponent(kws.join(' '));
  const vid = `https://www.youtube-nocookie.com/embed?listType=search&list=${q}`;

  const text = `Ringkasan kalimat: ${sentence}`;
  return { img, vid, text, query:q };
}



// ====== DOM dan interaksi ======
const charInput   = document.getElementById('charInput');
const btnCari     = document.getElementById('btnCari');
const btnReset    = document.getElementById('btnReset');
const kataWrap    = document.getElementById('kataWrap');
const kalimatWrap = document.getElementById('kalimatWrap');
const infoWrap    = document.getElementById('infoWrap');
const infoHint    = document.getElementById('infoHint');
const infoImg     = document.getElementById('infoImg');
const infoVid     = document.getElementById('infoVid');
const infoText    = document.getElementById('infoText');

let currentWord = null;

function resetAll(){
  kataWrap.innerHTML=''; kalimatWrap.innerHTML='';
  infoWrap.hidden = true; infoHint.style.display='block';
  infoImg.src=''; infoVid.src=''; infoText.textContent='';
  currentWord = null;
}

function renderWords(words){
  kataWrap.innerHTML='';
  words.forEach(w=>{
    const el = document.createElement('span');
    el.className='word';
    el.textContent=w;
    el.addEventListener('click', ()=>selectWord(w, el));
    kataWrap.appendChild(el);
  });
}

function selectWord(word, el){
  currentWord = word.toUpperCase();
  document.querySelectorAll('.word').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');

  // Ambil & rank kalimat milik kata ini (agar urutan terasa “mesin pencari”)
  const base = window.SENTENCES[currentWord] || [];
  const ranked = scoreDocs(currentWord)
    .filter(d=>d.word===currentWord)
    .map(d=>({ idx:d.sentIndex, text:d.text }));
  const list = ranked.length ? ranked : base.map((t,i)=>({idx:i, text:t}));

  kalimatWrap.innerHTML='';
  list.forEach(({idx,text})=>{
    const d = document.createElement('div');
    d.className='sentence';
    d.textContent = text;
    d.dataset.index = idx;
    d.addEventListener('click', ()=>selectSentence(idx, text));
    kalimatWrap.appendChild(d);
  });

  infoWrap.hidden = true; infoHint.style.display='block';
}

function selectSentence(idx, sentence){
  const info = informasiPerKalimat(sentence);

  infoImg.src = info.img;
  infoVid.src = info.vid;
  infoText.textContent = info.text;

  // Tambah/link fallback ke hasil search YouTube
  // (buat elemen kecil di bawah teks, atau reuse infoText)
  const ytLink = document.createElement('a');
  ytLink.href = `https://www.youtube.com/results?search_query=${info.query}`;
  ytLink.target = "_blank";
  ytLink.rel = "noopener";
  ytLink.textContent = "Buka pencarian YouTube (jika embed gagal)";
  ytLink.style.display = "inline-block";
  ytLink.style.marginTop = "6px";
  ytLink.style.color = "#fff";
  ytLink.style.textDecoration = "underline";
  // pastikan tidak menumpuk banyak link saat klik kalimat lain
  const old = document.getElementById('yt-fallback-link');
  if (old) old.remove();
  ytLink.id = 'yt-fallback-link';
  infoText.parentElement.appendChild(ytLink);

  infoHint.style.display = 'none';
  infoWrap.hidden = false;
}


function handleSearch(){
  const ch = (charInput.value || '').trim().toUpperCase();
  resetAll();
  if (!ch || ch.length!==1 || !/[A-Z]/.test(ch)) return;
  const words = (window.DATASET && window.DATASET[ch]) ? window.DATASET[ch] : [];
  renderWords(words);
}

btnCari.addEventListener('click', handleSearch);
btnReset.addEventListener('click', ()=>{ charInput.value=''; resetAll(); });
charInput.addEventListener('keydown', e=>{ if(e.key==='Enter') handleSearch(); });

window.addEventListener('DOMContentLoaded', ()=>{
  buildIndex();        // bangun indeks (supaya mirip search engine)
  charInput.focus();   // UX
});
