/* ============================================================
   BASMET HAYAT — main.js
   ============================================================ */

/* ---- AOS init ---- */
AOS.init({ duration: 700, once: true, offset: 60 });

/* ---- Splash ---- */
function closeSplash() {
  const s = document.getElementById('splashScreen');
  const m = document.getElementById('mainSite');
  s.style.opacity = '0';
  s.style.transition = 'opacity 0.7s ease';
  setTimeout(() => { s.style.display = 'none'; m.style.display = 'block'; window.scrollTo(0,0); }, 700);
}

/* ---- Navbar scroll ---- */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- Contact form ---- */
const cf = document.getElementById('contactForm');
if (cf) cf.addEventListener('submit', e => { e.preventDefault(); alert('شكراً! سيتم التواصل معكم قريباً.'); cf.reset(); });

/* ============================================================
   BAGS DATA — بيانات الحقائب
   ============================================================ */

const BAG1 = [
  { id: 'b1_01', num: '١',  title: 'بازل السلحفاة',                     img: 'https://i.imgur.com/placeholder1.jpg',  desc: 'التعرف على الأشكال الهندسية ومطابقتها' },
  { id: 'b1_02', num: '٢',  title: 'الشكل وظله',                        img: '',  desc: 'التمييز بين الشكل وظله والربط بينهما' },
  { id: 'b1_03', num: '٣',  title: 'التشكيل بالخيوط',                   img: '',  desc: 'تنمية المهارات الحركية الدقيقة بالخيوط' },
  { id: 'b1_04', num: '٤',  title: 'لعبة الزهور التفاعلية',             img: '',  desc: 'فهم مفهوم الفتح والغلق وتطوير حركة الأصابع' },
  { id: 'b1_05', num: '٥',  title: 'تصنيف الأشكال والألوان',            img: '',  desc: 'تصنيف الأشكال وفق اللون والشكل بالاكتشاف' },
  { id: 'b1_06', num: '٦',  title: 'عالم المواصلات',                    img: '',  desc: 'التعرف على وسائل المواصلات وربطها ببيئاتها' },
  { id: 'b1_07', num: '٧',  title: 'رحلة الغذاء الصحي وغير الصحي',     img: '',  desc: 'التمييز بين الطعام الصحي وغير الصحي' },
  { id: 'b1_08', num: '٨',  title: 'لوحة المخاطر',                     img: '',  desc: 'التعرف على الأدوات الخطرة والابتعاد عنها' },
  { id: 'b1_09', num: '٩',  title: 'التعرف على المهن',                  img: '',  desc: 'ربط المهنة بالأدوات الخاصة بها' },
  { id: 'b1_10', num: '١٠', title: 'حل المشكلات مع عمود الحلقات',       img: '',  desc: 'ترتيب الحلقات حسب الحجم وتنمية المثابرة' },
  { id: 'b1_11', num: '١١', title: 'لعبة اللوجيكو',                    img: '',  desc: 'التعلم الذاتي وحل المشكلات والاكتشاف' },
  { id: 'b1_12', num: '١٢', title: 'بازل الأرقام',                     img: '',  desc: 'التعرف على الأرقام وترتيبها في أماكنها' },
  { id: 'b1_13', num: '١٣', title: 'بازل الحروف',                      img: '',  desc: 'التعرف على الحروف ومطابقتها' },
  { id: 'b1_14', num: '١٤', title: 'السلم الموسيقي',                   img: '',  desc: 'التمييز بين الأصوات وتقليد الأنماط الصوتية' },
  { id: 'b1_15', num: '١٥', title: 'مكعبات الليغو',                    img: '',  desc: 'تنمية الإبداع والبناء والتركيب' },
  { id: 'b1_16', num: '١٦', title: 'جهاز قارئ البطاقات التعليمي',      img: '',  desc: 'التعرف على مفردات جديدة ونطقها بشكل صحيح' },
  { id: 'b1_17', num: '١٧', title: 'تصنيف الكرات الملونة',             img: '',  desc: 'التمييز بين الألوان وتصنيف الكرات' },
  { id: 'b1_18', num: '١٨', title: 'لعبة الفك والتركيب',               img: '',  desc: 'فهم العلاقة بين الأجزاء وتنمية الاستقلالية' },
  { id: 'b1_19', num: '١٩', title: 'اكسسوارات الملابس',                img: '',  desc: 'فتح وغلق الأزرار والسحاب والفيلكرو' },
  { id: 'b1_20', num: '٢٠', title: 'لوحة التعرف على الألوان',           img: '',  desc: 'تمييز اللون والإشارة إليه عند سماع اسمه' },
];

const BAG2 = [
  { id: 'b2_01', num: '١',  title: 'تلفزيون المشاعر',                   img: '',  desc: 'التعرف على المشاعر الأساسية والتعبير عنها' },
  { id: 'b2_02', num: '٢',  title: 'لعبة الحواس الخمس',                 img: '',  desc: 'الربط بين كل حاسة ووظيفتها' },
  { id: 'b2_03', num: '٣',  title: 'لعبة سلم البطاريق',                 img: '',  desc: 'التتبع البصري ومفهوم الصعود والهبوط' },
  { id: 'b2_04', num: '٤',  title: 'لعبة ميزان الدب الحسابي',           img: '',  desc: 'ربط الرقم بكمية الفاكهة وتنمية الحساب الملموس' },
  { id: 'b2_05', num: '٥',  title: 'لعبة شيف السوشي',                  img: '',  desc: 'تنمية المهارات الحركية الدقيقة ولعب الأدوار' },
  { id: 'b2_06', num: '٦',  title: 'حقيبة الحيوانات (الغابة – مزرعة وطيور)', img: '', desc: 'التعرف على أسماء الحيوانات وأشكالها' },
  { id: 'b2_07', num: '٧',  title: 'لعبة دب المغناطيس',                img: '',  desc: 'التآزر البصري الحركي وتصنيف الألوان' },
  { id: 'b2_08', num: '٨',  title: 'لعبة لوحة الألوان',                img: '',  desc: 'تصنيف الكرات الملونة بالقلم المغناطيسي' },
  { id: 'b2_09', num: '٩',  title: 'فصول السنة – كتاب تفاعلي',         img: '',  desc: 'التمييز بين فصول السنة ومظاهرها' },
  { id: 'b2_10', num: '١٠', title: 'بازل مواقف حياتية',                 img: '',  desc: 'التعرف على المواقف الاجتماعية اليومية' },
  { id: 'b2_11', num: '١١', title: 'أدوات المائدة – كتاب تفاعلي',      img: '',  desc: 'التعرف على أدوات المائدة وتنمية سلوكيات الطعام' },
  { id: 'b2_12', num: '١٢', title: 'بازل أجزاء الوجه',                 img: '',  desc: 'التعرف على أجزاء الوجه ومطابقتها' },
  { id: 'b2_13', num: '١٣', title: 'بازل خضار وفاكهة',                 img: '',  desc: 'التعرف على الخضار والفاكهة والتمييز بينها' },
  { id: 'b2_14', num: '١٤', title: 'بازل زهور وحشرات',                 img: '',  desc: 'التعرف على الزهور والحشرات وتمييزها' },
  { id: 'b2_15', num: '١٥', title: 'مجسم فم وفرشة ومعجون',             img: '',  desc: 'تعلم تنظيف الأسنان بالطريقة الصحيحة' },
];

/* ============================================================
   STORAGE HELPERS
   ============================================================ */
const STORAGE_KEY_BAGS  = 'basmet_bag_videos';
const STORAGE_KEY_IMGS  = 'basmet_bag_images';
const ADMIN_PASS        = 'basmet2025';

function loadBagVideos()  { try { return JSON.parse(localStorage.getItem(STORAGE_KEY_BAGS) || '{}'); } catch(e){ return {}; } }
function saveBagVideos(d) { localStorage.setItem(STORAGE_KEY_BAGS, JSON.stringify(d)); }
function loadBagImages()  { try { return JSON.parse(localStorage.getItem(STORAGE_KEY_IMGS) || '{}'); } catch(e){ return {}; } }
function saveBagImages(d) { localStorage.setItem(STORAGE_KEY_IMGS, JSON.stringify(d)); }
function loadVideos()     { try { return JSON.parse(localStorage.getItem(STORAGE_KEY_VIDS) || '[]'); } catch(e){ return []; } }
function saveVideos(d)    { localStorage.setItem(STORAGE_KEY_VIDS, JSON.stringify(d)); }

/* ============================================================
   YOUTUBE HELPERS
   ============================================================ */
function extractYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function ytThumb(id) { return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }
function ytEmbed(id) { return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`; }

/* ============================================================
   RENDER BAG GRID
   ============================================================ */
function renderBagGrid(activities, gridId, bagKey) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const videos = loadBagVideos();
  const images = loadBagImages();
  grid.innerHTML = '';

  activities.forEach(act => {
    const vid   = videos[act.id] || null;   // { url, title, desc }
    const imgSrc = images[act.id] || act.img || '';
    const vidId  = vid ? extractYouTubeId(vid.url) : null;

    const card = document.createElement('div');
    card.className = 'col-sm-6 col-md-4 col-lg-3';
    card.setAttribute('data-aos', 'zoom-in');

    const thumbHtml = vidId
      ? `<div class="activity-video-thumb" onclick="openVideoModal('${vidId}','${escapeAttr(act.title)}')">
           <img src="${ytThumb(vidId)}" alt="${act.title}" loading="lazy" />
           <div class="play-overlay"><i class="bi bi-play-circle-fill"></i></div>
         </div>`
      : `<div class="activity-no-video">
           <i class="bi bi-camera-video-off"></i>
           <span>لا يوجد فيديو بعد</span>
         </div>`;

    const actImgHtml = imgSrc
      ? `<div class="activity-img-wrap"><img src="${imgSrc}" alt="${act.title}" loading="lazy" /></div>`
      : `<div class="activity-img-placeholder"><i class="bi bi-image"></i></div>`;

    card.innerHTML = `
      <div class="activity-card" id="card-${act.id}">
        <div class="activity-num">${act.num}</div>
        ${actImgHtml}
        <div class="activity-info">
          <h6 class="activity-title">${act.title}</h6>
          <p class="activity-desc">${act.desc}</p>
        </div>
        ${thumbHtml}
      </div>`;

    grid.appendChild(card);
  });
}

function escapeAttr(str) { return str.replace(/'/g, "\\'").replace(/"/g, '&quot;'); }

/* ============================================================
   VIDEO MODAL
   ============================================================ */
function openVideoModal(vidId, title) {
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal-overlay';
    modal.innerHTML = `
      <div class="video-modal-box">
        <div class="video-modal-header">
          <h5 id="videoModalTitle"></h5>
          <button onclick="closeVideoModal()"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="video-modal-body">
          <iframe id="videoModalFrame" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
        </div>
      </div>`;
    modal.addEventListener('click', e => { if (e.target === modal) closeVideoModal(); });
    document.body.appendChild(modal);
  }
  document.getElementById('videoModalTitle').textContent = title;
  document.getElementById('videoModalFrame').src = ytEmbed(vidId);
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    modal.style.display = 'none';
    document.getElementById('videoModalFrame').src = '';
    document.body.style.overflow = '';
  }
}

/* ============================================================
   ADMIN PANEL
   ============================================================ */
function openAdminPanel() {
  document.getElementById('adminOverlay').style.display = 'flex';
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('adminPass').value = '';
  document.getElementById('loginError').style.display = 'none';
}

function closeAdminPanel() {
  document.getElementById('adminOverlay').style.display = 'none';
}

function checkAdminLogin() {
  const pass = document.getElementById('adminPass').value;
  if (pass === ADMIN_PASS) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    renderAdminDashboard();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

/* ============================================================
   ADMIN DASHBOARD — enhanced with bag videos management
   ============================================================ */
function renderAdminDashboard() {
  const dashboard = document.getElementById('adminDashboard');

  dashboard.innerHTML = `
    <!-- Tabs -->
    <ul class="nav nav-tabs mb-4" id="adminTabs">
      <li class="nav-item"><button class="nav-link active" data-tab="bagVideos" onclick="switchAdminTab('bagVideos',this)"><i class="bi bi-bag me-1"></i>فيديوهات الحقائب</button></li>
      <li class="nav-item"><button class="nav-link" data-tab="bagImages" onclick="switchAdminTab('bagImages',this)"><i class="bi bi-image me-1"></i>صور الأنشطة</button></li>
    </ul>

    <!-- Tab: Bag Videos -->
    <div id="tab-bagVideos" class="admin-tab">
      <p class="text-muted small mb-3">أضف رابط يوتيوب لكل نشاط في الحقائب</p>
      <div class="mb-3">
        <label class="form-label fw-bold">اختر النشاط</label>
        <select class="form-select custom-input mb-2" id="bagActivitySelect">
          <optgroup label="الحقيبة الأولى — رحلة المهارات الحياتية">
            ${BAG1.map(a => `<option value="${a.id}">${a.num} - ${a.title}</option>`).join('')}
          </optgroup>
          <optgroup label="الحقيبة الثانية — عبّر وأتفاعل">
            ${BAG2.map(a => `<option value="${a.id}">${a.num} - ${a.title}</option>`).join('')}
          </optgroup>
        </select>
        <input type="url" id="bagVideoUrl" class="form-control custom-input mb-2" placeholder="https://www.youtube.com/watch?v=..." />
        <button class="btn btn-hero-primary w-100" onclick="saveBagVideo()"><i class="bi bi-plus-circle me-2"></i>حفظ الفيديو</button>
      </div>
      <hr/>
      <h6 class="mb-3">الفيديوهات المضافة</h6>
      <div id="bagVideoList"></div>
    </div>

    <!-- Tab: Bag Images -->
    <div id="tab-bagImages" class="admin-tab" style="display:none">
      <p class="text-muted small mb-3">أضف رابط صورة لكل نشاط (رابط مباشر للصورة)</p>
      <div class="mb-3">
        <label class="form-label fw-bold">اختر النشاط</label>
        <select class="form-select custom-input mb-2" id="bagImgSelect">
          <optgroup label="الحقيبة الأولى — رحلة المهارات الحياتية">
            ${BAG1.map(a => `<option value="${a.id}">${a.num} - ${a.title}</option>`).join('')}
          </optgroup>
          <optgroup label="الحقيبة الثانية — عبّر وأتفاعل">
            ${BAG2.map(a => `<option value="${a.id}">${a.num} - ${a.title}</option>`).join('')}
          </optgroup>
        </select>
        <input type="url" id="bagImgUrl" class="form-control custom-input mb-2" placeholder="https://example.com/image.jpg" />
        <button class="btn btn-hero-primary w-100" onclick="saveBagImage()"><i class="bi bi-image me-2"></i>حفظ الصورة</button>
      </div>
      <hr/>
      <div id="bagImageList"></div>
    </div>
  `;

  renderBagVideoList();
  renderBagImageList();
}

function switchAdminTab(tabName, btn) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('#adminTabs .nav-link').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabName).style.display = 'block';
  btn.classList.add('active');
}

/* --- Bag Videos --- */
function saveBagVideo() {
  const id  = document.getElementById('bagActivitySelect').value;
  const url = document.getElementById('bagVideoUrl').value.trim();
  if (!url) return alert('أدخل رابط الفيديو');
  if (!extractYouTubeId(url)) return alert('الرابط غير صحيح، تأكد من رابط يوتيوب');
  const data = loadBagVideos();
  data[id] = { url };
  saveBagVideos(data);
  document.getElementById('bagVideoUrl').value = '';
  renderBagVideoList();
  renderBagGrid(BAG1, 'bag1Grid', 'bag1');
  renderBagGrid(BAG2, 'bag2Grid', 'bag2');
  alert('تم حفظ الفيديو بنجاح ✓');
}

function deleteBagVideo(id) {
  if (!confirm('حذف فيديو هذا النشاط؟')) return;
  const data = loadBagVideos();
  delete data[id];
  saveBagVideos(data);
  renderBagVideoList();
  renderBagGrid(BAG1, 'bag1Grid', 'bag1');
  renderBagGrid(BAG2, 'bag2Grid', 'bag2');
}

function renderBagVideoList() {
  const container = document.getElementById('bagVideoList');
  if (!container) return;
  const data = loadBagVideos();
  const allActs = [...BAG1, ...BAG2];
  const entries = allActs.filter(a => data[a.id]);
  if (entries.length === 0) { container.innerHTML = '<p class="text-muted small">لا توجد فيديوهات مضافة بعد</p>'; return; }
  container.innerHTML = entries.map(a => {
    const vidId = extractYouTubeId(data[a.id].url);
    return `<div class="admin-vid-item">
      <img src="${ytThumb(vidId)}" style="width:60px;border-radius:6px;margin-left:10px" />
      <span class="flex-grow-1">${a.num} — ${a.title}</span>
      <button class="btn btn-sm btn-danger" onclick="deleteBagVideo('${a.id}')"><i class="bi bi-trash"></i></button>
    </div>`;
  }).join('');
}

/* --- Bag Images --- */
function saveBagImage() {
  const id  = document.getElementById('bagImgSelect').value;
  const url = document.getElementById('bagImgUrl').value.trim();
  if (!url) return alert('أدخل رابط الصورة');
  const data = loadBagImages();
  data[id] = url;
  saveBagImages(data);
  document.getElementById('bagImgUrl').value = '';
  renderBagImageList();
  renderBagGrid(BAG1, 'bag1Grid', 'bag1');
  renderBagGrid(BAG2, 'bag2Grid', 'bag2');
  alert('تم حفظ الصورة بنجاح ✓');
}

function deleteBagImage(id) {
  if (!confirm('حذف صورة هذا النشاط؟')) return;
  const data = loadBagImages();
  delete data[id];
  saveBagImages(data);
  renderBagImageList();
  renderBagGrid(BAG1, 'bag1Grid', 'bag1');
  renderBagGrid(BAG2, 'bag2Grid', 'bag2');
}

function renderBagImageList() {
  const container = document.getElementById('bagImageList');
  if (!container) return;
  const data = loadBagImages();
  const allActs = [...BAG1, ...BAG2];
  const entries = allActs.filter(a => data[a.id]);
  if (entries.length === 0) { container.innerHTML = '<p class="text-muted small">لا توجد صور مضافة بعد</p>'; return; }
  container.innerHTML = entries.map(a => `
    <div class="admin-vid-item">
      <img src="${data[a.id]}" style="width:60px;border-radius:6px;margin-left:10px;object-fit:cover;height:45px" onerror="this.src=''" />
      <span class="flex-grow-1">${a.num} — ${a.title}</span>
      <button class="btn btn-sm btn-danger" onclick="deleteBagImage('${a.id}')"><i class="bi bi-trash"></i></button>
    </div>`).join('');
}


/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderBagGrid(BAG1, 'bag1Grid', 'bag1');
  renderBagGrid(BAG2, 'bag2Grid', 'bag2');
});