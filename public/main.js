// ============================================================
// BASMET HAYAT — main.js
// ============================================================

if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse && navCollapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navCollapse)?.hide();
    }
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check-circle-fill ms-2"></i> تم الإرسال بنجاح!';
    btn.style.background = '#1D9E75';
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; btn.disabled = false; contactForm.reset(); }, 3000);
  });
}

// ─── SPLASH ──────────────────────────────────────────────────
function closeSplash() {
  const splash = document.getElementById('splashScreen');
  const site   = document.getElementById('mainSite');
  if (!splash || !site) return;
  splash.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  splash.style.opacity = '0';
  splash.style.transform = 'scale(1.04)';
  setTimeout(() => {
    splash.style.display = 'none';
    site.style.display = 'block';
    site.style.opacity = '0';
    site.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => { site.style.opacity = '1'; });
    if (typeof AOS !== 'undefined') AOS.refresh();
  }, 600);
}

// ─── VIDEOS ───────────────────────────────────────────────────
const STORAGE_KEY = 'basmeta_videos';

function getVideos() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}

function saveVideos(videos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
}

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  url = url.trim();
  let id = null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
    /embed\/([a-zA-Z0-9_-]{11})/,
    /shorts\/([a-zA-Z0-9_-]{11})/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) { id = m[1]; break; }
  }
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

function renderVideos() {
  const grid = document.getElementById('videosGrid');
  const noMsg = document.getElementById('noVideosMsg');
  if (!grid) return;
  const videos = getVideos();
  Array.from(grid.children).forEach(c => { if (c.id !== 'noVideosMsg') c.remove(); });
  if (videos.length === 0) { if (noMsg) noMsg.style.display = 'block'; return; }
  if (noMsg) noMsg.style.display = 'none';
  videos.forEach((video, index) => {
    const embedUrl = getYouTubeEmbedUrl(video.url);
    if (!embedUrl) return;
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', String(index * 80));
    col.innerHTML = `<div class="video-card">
      <div class="video-embed-wrap">
        <iframe src="${embedUrl}" allowfullscreen loading="lazy" title="${video.title}"></iframe>
      </div>
      <div class="video-card-body">
        <h6>${video.title}</h6>
        ${video.desc ? `<p>${video.desc}</p>` : ''}
      </div>
    </div>`;
    grid.appendChild(col);
  });
  if (typeof AOS !== 'undefined') AOS.refresh();
}

document.addEventListener('DOMContentLoaded', () => {
  renderVideos();
  const overlay = document.getElementById('adminOverlay');
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeAdminPanel(); });
  const passInput = document.getElementById('adminPass');
  if (passInput) passInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkAdminLogin(); });
});

// ─── ADMIN ────────────────────────────────────────────────────
const ADMIN_PASSWORD = 'basmeta2025';

function openAdminPanel() {
  const overlay = document.getElementById('adminOverlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminDashboard').style.display = 'none';
  const err = document.getElementById('loginError');
  if (err) err.style.display = 'none';
  const p = document.getElementById('adminPass');
  if (p) { p.value = ''; setTimeout(() => p.focus(), 100); }
}

function closeAdminPanel() {
  const overlay = document.getElementById('adminOverlay');
  if (overlay) overlay.style.display = 'none';
}

function checkAdminLogin() {
  const pass = document.getElementById('adminPass')?.value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    renderAdminVideoList();
  } else {
    const err = document.getElementById('loginError');
    if (err) err.style.display = 'block';
    document.getElementById('adminPass').value = '';
    document.getElementById('adminPass').focus();
  }
}

function addVideo() {
  const titleInput = document.getElementById('videoTitle');
  const descInput  = document.getElementById('videoDesc');
  const urlInput   = document.getElementById('videoUrl');
  const title = titleInput?.value.trim();
  const desc  = descInput?.value.trim();
  const url   = urlInput?.value.trim();
  if (!title) { alert('يرجى إدخال عنوان الفيديو'); titleInput?.focus(); return; }
  if (!url)   { alert('يرجى إدخال رابط الفيديو'); urlInput?.focus(); return; }
  if (!getYouTubeEmbedUrl(url)) { alert('الرابط غير صالح. يرجى إدخال رابط يوتيوب صحيح.'); urlInput?.focus(); return; }
  const videos = getVideos();
  videos.push({ id: Date.now(), title, desc, url });
  saveVideos(videos);
  if (titleInput) titleInput.value = '';
  if (descInput)  descInput.value  = '';
  if (urlInput)   urlInput.value   = '';
  renderAdminVideoList();
  renderVideos();
  const btn = document.querySelector('#adminDashboard .btn-hero-primary');
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i> تمت الإضافة!';
    btn.style.background = '#1D9E75';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 2000);
  }
}

function deleteVideo(id) {
  if (!confirm('هل تريد حذف هذا الفيديو؟')) return;
  saveVideos(getVideos().filter(v => v.id !== id));
  renderAdminVideoList();
  renderVideos();
}

function renderAdminVideoList() {
  const list = document.getElementById('adminVideoList');
  if (!list) return;
  const videos = getVideos();
  if (videos.length === 0) { list.innerHTML = '<p class="text-muted text-center small py-3">لا توجد فيديوهات بعد</p>'; return; }
  list.innerHTML = videos.map(v => `
    <div class="admin-video-item">
      <div class="video-thumb"><i class="bi bi-play-fill"></i></div>
      <div class="video-info">
        <strong>${v.title}</strong>
        <small>${v.url}</small>
      </div>
      <button class="delete-btn" onclick="deleteVideo(${v.id})" title="حذف"><i class="bi bi-trash"></i></button>
    </div>`).join('');
}
