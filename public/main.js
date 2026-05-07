/* ============================================================
   BASMET HAYAT — main.js
   ============================================================ */

AOS.init({ duration: 700, once: true, offset: 60 });

function closeSplash() {
  const s = document.getElementById('splashScreen');
  const m = document.getElementById('mainSite');
  s.style.opacity = '0';
  s.style.transition = 'opacity 0.7s ease';
  setTimeout(() => { s.style.display = 'none'; m.style.display = 'block'; window.scrollTo(0,0); }, 700);
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

const cf = document.getElementById('contactForm');
if (cf) cf.addEventListener('submit', e => { e.preventDefault(); alert('شكراً! سيتم التواصل معكم قريباً.'); cf.reset(); });

/* ============================================================
   BAGS DATA
   ============================================================ */

const BAG1 = [
  { id:'b1_01', num:'١', title:'بازل السلحفاة', img:'activities/b1_01.jpg', desc:'التعرف على الأشكال الهندسية ومطابقتها', duration:'١٥ دقيقة', place:'غرفة المصادر أو قاعة النشاط', strategy:'المحاولة والخطأ', goals:['يتعرف على الأشكال الهندسية الأساسية ويميز بينها','يطابق الأشكال الهندسية مع أماكنها الصحيحة بدقة','يُبدي اهتماماً ومشاركة إيجابية أثناء النشاط'], tools:'لوحة كرتونية أو من الفوم مقصوصة على شكل سلحفاة، قطع أشكال هندسية ملونة (دائرة، مثلث، مربع، مستطيل)، لاصق سكوتش، أدوات تزيين', steps:['التمهيد: جذب انتباه الطفل من خلال قصة قصيرة أو أغنية عن السلحفاة ثم تسمية الأشكال','التنفيذ: اعرض لوحة السلحفاة فارغة، ضع الأشكال مبعثرة، نمذج النشاط للطفل','التقييم: أين هو المكان الصحيح لشكل المثلث على ظهر السلحفاة؟'], eval:'أين هو المكان الصحيح لشكل المثلث على ظهر السلحفاة؟' },
  { id:'b1_02', num:'٢', title:'الشكل وظله', img:'activities/b1_02.jpg', desc:'التمييز بين الشكل وظله والربط بينهما', duration:'٢٠ دقيقة', place:'ركن الألعاب', strategy:'التعلم البصري المكاني', goals:['يميز بين الشكل وظله','يربط بين الشكل وظله المطابق له','يستمتع بالاكتشاف ويظهر دافعية للتعلم'], tools:'نصبيان وورق جوخ ملون وفوم أسود لرسم ظلال الكائنات، فوم ملون مقصوص بدقة، عيون متحركة، لاصق سكوتش', steps:['التمهيد: إثارة فضول الطفل من خلال الحديث عن الظل','التنفيذ: وضع القطع الملونة أمام الطفل وطلب إيجاد الظل المطابق','التقييم: هل هذا الظل الأسود يخص السمكة أم يخص السلحفاة؟'], eval:'هل هذا الظل الأسود يخص السمكة أم يخص السلحفاة؟' },
  { id:'b1_03', num:'٣', title:'التشكيل بالخيوط', img:'activities/b1_03.jpg', desc:'تنمية المهارات الحركية الدقيقة بالخيوط', duration:'٢٠ دقيقة', place:'ركن تنمية المهارات', strategy:'التشكيل', goals:['يتعرف على أشكال هندسية مختلفة','يمرر الخيط داخل الثقوب بتنظيم وتتابع','يُظهر صبراً وتركيزاً أثناء الأداء'], tools:'قطع من الخشب مقصوصة على شكل (دائرة، مربع، مثلث) بثقوب دائرية منتظمة، خيوط سميكة ذات أطراف مدببة', steps:['التمهيد: عرض القطع الخشبية وإخبار الطفل أننا سنعمل سواراً جميلاً','التنفيذ: المعلم يوضح كيفية إدخال الخيط وسحبه، الطفل يكمل باقي الثقوب','التقييم: قم بإدخال الخيط في هذا الثقب وسحبه من الجهة الأخرى'], eval:'قم بإدخال الخيط في هذا الثقب وسحبه من الجهة الأخرى' },
  { id:'b1_04', num:'٤', title:'لعبة الزهور التفاعلية', img:'activities/b1_04.jpg', desc:'فهم مفهوم الفتح والغلق وتطوير حركة الأصابع', duration:'١٥ دقيقة', place:'قاعة النشاط', strategy:'النمذجة', goals:['يفهم مفهوم الفتح والغلق','يفك ويربط الأغطية باستخدام حركة الأصابع','يشعر بالإنجاز عند إتمام المهمة'], tools:'نصبيان مغلف بورق الجوخ، فوم ملون على هيئة أصيص وسيقان وزهور، فوهات زجاجات بلاستيكية مع أغطيتها', steps:['التمهيد: عرض اللوحة التفاعلية ولفت انتباه الطفل إلى الزهور المغلقة','التنفيذ: المعلم ينمذج حركة التدوير للفك والإغلاق، الطفل يحاكي','التقييم: قم بتدوير الغطاء حتى يتم إغلاق الزهرة بشكل محكم'], eval:'قم بتدوير الغطاء حتى يتم إغلاق الزهرة بشكل محكم' },
  { id:'b1_05', num:'٥', title:'تصنيف الأشكال والألوان', img:'activities/b1_05.jpg', desc:'تصنيف الأشكال وفق اللون والشكل بالاكتشاف', duration:'١٥ دقيقة', place:'قاعة النشاط', strategy:'التعلم بالاكتشاف', goals:['يميز بين الأشكال والألوان المختلفة','يصنف الأشكال وفق اللون والشكل','يتفاعل بإيجابية مع النشاط'], tools:'هيكل من النصبيان على هيئة شخصية ثعلب، أسطوانات كرتونية مغلفة بالفوم (خضراء، زرقاء، حمراء)، أشكال هندسية من الفوم الملون على أعواد خشبية', steps:['التمهيد: عرض الوسيلة ودعوة الطفل لمساعدة الثعلب في تصنيف القطع','التنفيذ: المعلم ينمذج بوضع المثلث الأزرق في الأسطوانة المماثلة','التقييم: ضع الشكل الذي في يدك داخل الأسطوانة التي تشبهه في اللون والشكل'], eval:'ضع الشكل الذي في يدك داخل الأسطوانة التي تشبهه تماماً' },
  { id:'b1_06', num:'٦', title:'عالم المواصلات', img:'activities/b1_06.jpg', desc:'التعرف على وسائل المواصلات وربطها ببيئاتها', duration:'٢٥ دقيقة', place:'قاعة النشاط', strategy:'المحاكاة والنمذجة', goals:['يتعرف على وسائل المواصلات وبيئاتها','يربط كل وسيلة بالمكان المناسب لها','يُبدي اهتماماً واستمتاعاً بالنشاط'], tools:'قاعدة متينة من كرتون النصبيان مغلفة بورق الجوخ، مجسمات وسائل مواصلات من الفوم الملون مزودة بلاصق سكوتش', steps:['التمهيد: عرض اللوحة ولفت انتباه الطفل للعناصر البصرية (طريق، سحاب، ماء)','التنفيذ: المعلم يعرض وسيلة ويشرح خصائصها، الطفل يختار ويضع في المكان المناسب','التقييم: اختر وسيلة المواصلات التي تمشي في البحر'], eval:'اختر وسيلة المواصلات التي تمشي في البحر' },
  { id:'b1_07', num:'٧', title:'رحلة الغذاء الصحي وغير الصحي', img:'activities/b1_07.jpg', desc:'التمييز بين الطعام الصحي وغير الصحي وتصنيفه', duration:'٣٠ دقيقة', place:'ركن الرعاية الذاتية والصحة', strategy:'التعلم التمييزي', goals:['يميز بين الطعام الصحي وغير الصحي','يصنف الأطعمة بشكل صحيح','يُظهر وعياً بأهمية الغذاء الصحي'], tools:'قاعدة من كرتون النصبيان مغلفة بورق الجوخ، أشكال متنوعة للأطعمة من ورق الفوم الملون محددة بشريط فضي لامع', steps:['التمهيد: عرض لوحة الأطعمة وحوار بسيط عن الأطعمة المفيدة والضارة','التنفيذ: المعلم ينمذج بوضع الموز في جانب الطعام الصحي، الطفل يكمل','التقييم: اختر الطعام الذي يعطينا طاقة وقوة من على اللوحة'], eval:'اختر الطعام الذي يعطينا طاقة وقوة من على اللوحة' },
  { id:'b1_08', num:'٨', title:'لوحة المخاطر', img:'activities/b1_08.jpg', desc:'التعرف على الأدوات الخطرة والابتعاد عنها', duration:'١٥ دقيقة', place:'قاعة النشاط', strategy:'التحذير البصري والحوار والمناقشة', goals:['يتعرف على الأدوات والأشياء الخطرة في بيئته','يبتعد عن ملامسة الأدوات الخطرة عند رؤيتها','يشعر بالمسؤولية تجاه سلامته الشخصية'], tools:'لوحة من كرتون النصبيان مغلفة بورق الجوخ، نماذج للأدوات الخطرة (مقص، سكين، حقنة، دبابيس، مقبس كهرباء، نار، أدوية)، علامة تحذير مركزية', steps:['التمهيد: عرض اللوحة وتوجيه انتباه الطفل لعلامة التحذير الكبيرة في المنتصف','التنفيذ: المعلم يشير لكل أداة ويشرح خطورتها، الطفل يلمسها على اللوحة ويكرر اسمها','التقييم: أين هي الأداة التي تجرح يدنا على اللوحة؟'], eval:'أين هي الأداة التي تجرح يدنا على اللوحة؟' },
  { id:'b1_09', num:'٩', title:'التعرف على المهن', img:'activities/b1_09.jpg', desc:'ربط المهنة بالأدوات الخاصة بها وتقدير قيمة العمل', duration:'٢٠ دقيقة', place:'قاعة التدريب الجماعي', strategy:'التداعي البصري، التمثيل الدرامي، النمذجة', goals:['يتعرف على المهن الأساسية والوظيفة التي يقوم بها كل منهم','يربط بين صاحب المهنة وبين الأدوات الخاصة به','يقدر قيمة العمل والدور الذي يقوم به أصحاب المهن'], tools:'لوحات من الجوخ مطبوع عليها صور أصحاب المهن، نماذج لأدوات المهن مطبوعة على جوخ ومحشوة يدوياً، لاصق سكوتش', steps:['التمهيد: عرض صور المهن وسؤال الطفل ماذا يريد أن يصبح عندما يكبر','التنفيذ: عرض صورة الطبيب وتوجيه انتباه الطفل للأدوات وشرح وظيفة كل أداة','التقييم: اختار الأداة التي يقوم الطبيب باستخدامها'], eval:'اختار الأداة التي يقوم الطبيب باستخدامها' },
  { id:'b1_10', num:'١٠', title:'حل المشكلات مع عمود الحلقات', img:'activities/b1_10.jpg', desc:'ترتيب الحلقات حسب الحجم وتنمية المثابرة', duration:'١٥–٢٠ دقيقة', place:'داخل الفصل أو غرفة الأنشطة', strategy:'التعلم باللعب + الاكتشاف + النمذجة', goals:['يميز بين الأحجام المختلفة','يرتب الحلقات حسب الحجم','يُظهر المثابرة أثناء المحاولة'], tools:'عمود بلاستيكي + حلقات ملونة بأحجام مختلفة', steps:['التمهيد: عرض الحلقات وملاحظة الفرق بينها في الحجم','التنفيذ: المعلمة تبدأ بترتيب نموذج من الأكبر للأصغر ثم الطفل يجرب','التقييم: قم بترتيب الحلقات بشكل صحيح وفقاً للحجم'], eval:'قم بترتيب الحلقات بشكل صحيح وفقاً للحجم' },
  { id:'b1_11', num:'١١', title:'لعبة اللوجيكو', img:'activities/b1_11.jpg', desc:'التعلم الذاتي وحل المشكلات والاكتشاف', duration:'١٥–٢٠ دقيقة', place:'داخل الفصل', strategy:'التعلم الذاتي + حل المشكلات + الاكتشاف', goals:['يفهم العلاقات بين الصور والمعلومات','يختار الإجابات الصحيحة','يثق بقدرته على اتخاذ القرار'], tools:'لوحة لوجيكو + بطاقات تعليمية متنوعة بمستويات مختلفة', steps:['التمهيد: عرض لوحة اللوجيكو وتوضيح أنها لعبة تعتمد على التفكير','التنفيذ: المعلمة تحل مثالاً أمام الطفل ثم يجرب بنفسه مع التشجيع','التقييم: قم بترتيب الأشكال على لوحة اللوجيكو بما يتناسب مع البطاقة'], eval:'قم بترتيب الأشكال على لوحة اللوجيكو بما يتناسب مع البطاقة' },
  { id:'b1_12', num:'١٢', title:'بازل الأرقام', img:'activities/b1_12.jpg', desc:'التعرف على الأرقام وترتيبها في أماكنها', duration:'١٥ دقيقة', place:'داخل الفصل', strategy:'التعلم باللعب + المحاولة والخطأ', goals:['يتعرف على الأرقام','يرتب الأرقام في أماكنها الصحيحة','يُظهر رغبة في التعلم'], tools:'بازل أرقام خشبي أو كرتوني', steps:['التمهيد: سؤال الطفل عن الأرقام التي يعرفها وعرض البازل','التنفيذ: المعلمة تُظهر شكل كل رقم ومكانه ثم الطفل يعيد التركيب','التقييم: قم بتركيب الأرقام في أماكنها الصحيحة'], eval:'قم بتركيب الأرقام في أماكنها الصحيحة' },
  { id:'b1_13', num:'١٣', title:'بازل الحروف', img:'activities/b1_13.jpg', desc:'التعرف على الحروف ومطابقتها مع الكلمات', duration:'١٥ دقيقة', place:'داخل الفصل', strategy:'التعلم باللعب + التكرار', goals:['يتعرف على الحروف','يطابق الحروف مع أماكنها','يستمتع بتعلم الحروف'], tools:'بازل حروف يحتوي على حروف منفصلة وملونة مع قاعدة للتركيب وصور مرتبطة بكل حرف', steps:['التمهيد: عرض الحروف وسؤال الطفل إن كان يعرف بعضها','التنفيذ: توضيح كل حرف وربطه بكلمة مألوفة (أ – أسد، ب – بط) ثم الطفل يركب','التقييم: أشر إلى حرف (ب)'], eval:'أشر إلى حرف (ب)' },
  { id:'b1_14', num:'١٤', title:'السلم الموسيقي', img:'activities/b1_14.jpg', desc:'التمييز بين الأصوات وتقليد الأنماط الصوتية', duration:'١٥–٢٠ دقيقة', place:'غرفة الأنشطة', strategy:'التعلم بالموسيقى + النمذجة', goals:['يميز بين الأصوات المختلفة','يقلد الأنماط الصوتية','يتفاعل مع الموسيقى بإيجابية'], tools:'آلة موسيقية بسيطة مثل سلم موسيقي أو بيانو صغير بمفاتيح ملونة', steps:['التمهيد: المعلمة تبدأ بإصدار أصوات موسيقية لجذب انتباه الطفل','التنفيذ: توضيح كيفية الضغط على المفاتيح والطفل يقلد النمط الصوتي','التقييم: قم بالعزف على السلم الموسيقي وتقليد الأصوات'], eval:'قم بالعزف على السلم الموسيقي وتقليد الأصوات' },
  { id:'b1_15', num:'١٥', title:'مكعبات الليغو', img:'activities/b1_15.jpg', desc:'تنمية الإبداع والبناء والتركيب', duration:'٢٠ دقيقة', place:'داخل الفصل', strategy:'التعلم باللعب + الاكتشاف', goals:['يفهم فكرة البناء والتركيب','يبني أشكالاً باستخدام المكعبات','يُظهر الإبداع والاستمتاع'], tools:'مكعبات ليغو بأحجام وألوان مختلفة، لوحات أرضية صغيرة، نماذج صور بسيطة (برج–منزل–سيارة)', steps:['التمهيد: عرض المكعبات وسؤال الطفل ماذا يمكن أن نبني بها','التنفيذ: المعلمة تبني نموذجاً بسيطاً ثم الطفل يقلد ثم يبني بحرية','التقييم: قم بتركيب المكعبات لتكوين هذا الشكل'], eval:'قم بتركيب المكعبات لتكوين هذا الشكل' },
  { id:'b1_16', num:'١٦', title:'جهاز قارئ البطاقات التعليمي', img:'activities/b1_16.jpg', desc:'التعرف على مفردات جديدة ونطقها بشكل صحيح', duration:'١٠–١٥ دقيقة', place:'داخل الفصل', strategy:'التعلم بالوسائط + النمذجة', goals:['يتعرف على مفردات جديدة','ينطق الكلمات بشكل صحيح','يُبدي تفاعلاً مع الأصوات'], tools:'جهاز قارئ بطاقات تعليمي ناطق، مجموعة بطاقات مصورة ملونة بصور واضحة', steps:['التمهيد: تشغيل الجهاز لإصدار صوت بسيط لجذب انتباه الطفل','التنفيذ: إدخال البطاقة والطفل يسمع الكلمة ثم ينطقها بعد المعلمة','التقييم: قم بالإشارة إلى صورة المعكرونة من الصور التي أمامك'], eval:'قم بالإشارة إلى صورة المعكرونة من الصور التي أمامك' },
  { id:'b1_17', num:'١٧', title:'تصنيف الكرات الملونة', img:'activities/b1_17.jpg', desc:'التمييز بين الألوان وتصنيف الكرات', duration:'١٥ دقيقة', place:'داخل الفصل', strategy:'التعلم باللعب + المحاولة والخطأ', goals:['يميز بين الألوان','يصنف الكرات حسب اللون','يشارك بحماس في النشاط'], tools:'كرات ملونة (أحمر–أصفر–أزرق–أخضر) + أوعية أو صناديق ملونة بنفس الألوان', steps:['التمهيد: عرض الكرات وطلب تسميتها والإشارة إلى لون معين','التنفيذ: المعلمة تمسك كرة حمراء وتضعها في الوعاء الأحمر مع الشرح اللفظي','التقييم: قم بالإشارة إلى الكرة الحمراء'], eval:'قم بالإشارة إلى الكرة الحمراء' },
  { id:'b1_18', num:'١٨', title:'لعبة الفك والتركيب', img:'activities/b1_18.jpg', desc:'فهم العلاقة بين الأجزاء وتنمية الاستقلالية', duration:'١٥–٢٠ دقيقة', place:'داخل الفصل', strategy:'التعلم بالممارسة + النمذجة + التدرج', goals:['يفهم العلاقة بين الأجزاء','يفك ويركب الأجزاء بشكل صحيح','يُظهر استقلالية أثناء الأداء'], tools:'لعبة فك وتركيب (مسامير بلاستيكية – أجزاء يتم تركيبها وفكها)', steps:['التمهيد: عرض اللعبة وسؤال الطفل كيف تنفتح','التنفيذ: المعلمة تفك جزءاً ببطء مع شرح كل خطوة ثم الطفل يجرب','التقييم: قم بفك وتركيب أجزاء اللعبة بشكل صحيح ومتسلسل'], eval:'قم بفك وتركيب أجزاء اللعبة بشكل صحيح ومتسلسل' },
  { id:'b1_19', num:'١٩', title:'اكسسوارات الملابس', img:'activities/b1_19.jpg', desc:'فتح وغلق الأزرار والسحاب والفيلكرو باستقلالية', duration:'١٥–٢٠ دقيقة', place:'داخل الفصل أو ركن المهارات الحياتية', strategy:'التعلم بالممارسة + النمذجة + التكرار', goals:['يتعرف على أدوات الملابس ووظائفها','يفتح ويغلق الأزرار والسحاب والفيلكرو','يشعر بالاعتماد على النفس'], tools:'لوحة تدريب أو قطع قماش تحتوي على (أزرار – سحاب – فيلكرو)', steps:['التمهيد: عرض قطعة الملابس وسؤال الطفل كيف نقفلها','التنفيذ: المعلمة تنمذج ببطء فتح كل أداة وإغلاقها ثم الطفل يقلد','التقييم: قم بغلق السحاب بشكل صحيح'], eval:'قم بغلق السحاب بشكل صحيح' },
  { id:'b1_20', num:'٢٠', title:'لوحة التعرف على الألوان', img:'activities/b1_20.jpg', desc:'تمييز اللون والإشارة إليه عند سماع اسمه', duration:'١٥ دقيقة', place:'ركن تنمية المهارات', strategy:'التركيز اللوني الموحد + تمثيل الصفة', goals:['يُميز اللون من بين مجموعة صور مختلفة','يُشير إلى الأشكال التي تحمل اللون المطلوب','يشعر بالنجاح عند تمييز اللون الصحيح'], tools:'لوحة عرض من النصبيان، أشكال متنوعة مصنوعة من الفوم باللون المطلوب', steps:['التمهيد: عرض اللوحة ولفت انتباه الطفل لأشكال الفوم الملونة','التنفيذ: الإشارة لكل شكل وقول اسم لونه، الطفل يكرر مع كل شكل','التقييم: أي من هذه الأشكال لونه أزرق؟'], eval:'أي من هذه الأشكال لونه أزرق؟' },
];

const BAG2 = [
  { id:'b2_01', num:'١', title:'تلفزيون المشاعر', img:'activities/b2_01.jpg', desc:'التعرف على المشاعر الأساسية والتعبير عنها', duration:'٢٥ دقيقة', place:'ركن التفاعل الاجتماعي', strategy:'التعلم بالقصة المصورة', goals:['يتعرف على المشاعر الأساسية','يحدد المشاعر من خلال الصور','يعبر عن مشاعره بشكل مناسب'], tools:'صندوق كرتوني على هيئة تلفزيون كلاسيكي مغلف بورق الفوم، مزود بأزرار تحكم وهوايات جانبية وفتحة لعرض صفحات القصة', steps:['التمهيد: دعوة الطفل للجلوس أمام تلفزيون المشاعر وإخباره أننا سنشاهد قصة جميلة','التنفيذ: تحريك صفحات القصة وفي كل مشهد سؤال الطفل عن شعور الأبطال','التقييم: ماهي الصورة التي تعبر عن شعور (السعادة) في التلفزيون؟'], eval:'ماهي الصورة التي تعبر عن شعور (السعادة) في التلفزيون؟' },
  { id:'b2_02', num:'٢', title:'لعبة الحواس الخمس', img:'activities/b2_02.jpg', desc:'الربط بين كل حاسة ووظيفتها واستخدامها السليم', duration:'٢٠ دقيقة', place:'قاعة النشاط', strategy:'التعلم القائم على الرموز', goals:['يربط بين كل حاسة وبين الوظيفة التي تؤديها','يصنف الصور المختلفة ويضعها تحت الحاسة المناسبة','يبدي اهتماماً باكتشاف العالم المحيط به'], tools:'مجسم على هيئة حقيبة مصنوع من كرتون النصبيان مغلف بورق الجوخ، خمس دوائر تمثل الحواس بصور توضيحية، لاصق سكوتش', steps:['التمهيد: عرض الحقيبة الجميلة وإثارة فضول الطفل','التنفيذ: تفريغ قطع الحواس الخمس أمام الطفل ووضع كل قطعة في مكانها الصحيح','التقييم: أين هو الشكل التي نستخدم فيها حاسة الشم؟'], eval:'أين هو الشكل التي نستخدم فيها حاسة الشم؟' },
  { id:'b2_03', num:'٣', title:'لعبة سلم البطاريق', img:'activities/b2_03.jpg', desc:'التتبع البصري ومفهوم الصعود والهبوط', duration:'٢٠ دقيقة', place:'ركن الألعاب', strategy:'التعلم باللعب + التتبع الحركي', goals:['يتعرف على مفهوم الصعود والهبوط والمسار الدائري','ينمي مهارة التتبع البصري من خلال ملاحقة حركة البطاريق','يستمتع بالنشاط الجماعي ويبدي صبراً في الانتظار'], tools:'لعبة سلم البطريق الكهربائية بسلم تصاعدي ومنحدرات منزلقة ملونة ومجسمات البطاريق، تعمل بوصلة USB أو بطاريات', steps:['التمهيد: تشغيل اللعبة لجذب انتباه الطفل بالأضواء والحركة','التنفيذ: الطفل يضع البطريق ويراقب الصعود والهبوط مع تسمية الألوان','التقييم: ما هو البطريق الذي يقوم بالصعود؟'], eval:'ما هو البطريق الذي يقوم بالصعود؟' },
  { id:'b2_04', num:'٤', title:'لعبة ميزان الدب الحسابي', img:'activities/b2_04.jpg', desc:'ربط الرقم بكمية الفاكهة وتنمية الحساب الملموس', duration:'١٥ دقيقة', place:'قاعة النشاط', strategy:'التعلم باللعب + المحاولة والخطأ + النمذجة', goals:['يربط بين شكل الرقم وكمية الفاكهة المناسبة له','يوازن بين كفتي الميزان بوضع الأوزان الصحيحة','يشعر بالثقة والقدرة على حل المسائل الحسابية البسيطة'], tools:'ميزان الدب الخشبي، أوزان على شكل أرقام ملونة، أوزان على شكل ثمار فاكهة (تفاح، موز، فراولة)', steps:['التمهيد: عرض الميزان وجعل الطفل يلمس الأرقام والفاكهة ويلاحظ الاختلاف','التنفيذ: وضع رقم 2 في الكفة اليمنى وطلب من الطفل إيجاد ثمرتين','التقييم: أي عدد من الفواكه نضعه في الكفة الفارغة ليتساوى الميزان مع الرقم (٣)؟'], eval:'أي عدد من الفواكه نضعه في الكفة الفارغة ليتساوى الميزان مع الرقم (٣)؟' },
  { id:'b2_05', num:'٥', title:'لعبة شيف السوشي', img:'activities/b2_05.jpg', desc:'تنمية المهارات الحركية الدقيقة ولعب الأدوار', duration:'٢٠ دقيقة', place:'ركن اللعب الإيهامي', strategy:'لعب الأدوار + التسلسل + المحاكاة البصرية', goals:['يتعرف على خطوات تجهيز الطعام','ينمي مهاراته الحركية الدقيقة من خلال التحكم في القطع الصغيرة','يعزز خياله وإبداعه من خلال تقمص دور الشيف'], tools:'صندوق لعبة قطع سوشي خشبية، أعواد خشبية، كروت نماذج، مفرش تحضير', steps:['التمهيد: حكاية قصة قصيرة عن الشيف الماهر وعرض الأدوات','التنفيذ: الطفل يختار كارتاً ويحاول مطابقة القطع الخشبية واستخدام الأعواد','التقييم: أين قطعة السوشي التي تتشابه مع النموذج المعروض؟'], eval:'أين قطعة السوشي التي تتشابه مع النموذج المعروض؟' },
  { id:'b2_06', num:'٦', title:'حقيبة الحيوانات (الغابة – مزرعة وطيور)', img:'activities/b2_06.jpg', desc:'التعرف على أسماء الحيوانات وأشكالها وبيئاتها', duration:'١٥ دقيقة', place:'قاعة النشاط (ركن اللغة / ركن الطبيعة)', strategy:'الحوار والمناقشة + التعلم البصري', goals:['يتعرف على أسماء حيوانات الغابة وأشكالها','ينمي مهاراته الحركية الدقيقة من خلال فك وتركيب القطع','يظهر اهتماماً بمعرفة الحيوانات وحب استكشاف الطبيعة'], tools:'حقيبة خشبية ونماذج حيوانات مصنوعة يدوياً من قماش الجوخ (دب، ثعلب، بومة، سنجاب)، لاصق سكوتش', steps:['التمهيد: وضع الحقيبة أمام الطفل والتمهيد برحلة إلى الغابة','التنفيذ: عرض الحيوانات واحداً تلو الآخر مع نطق الاسم وطلب التكرار','التقييم: قم باختيار الشكل الصحيح لشكل البومة'], eval:'قم باختيار الشكل الصحيح لشكل البومة' },
  { id:'b2_07', num:'٧', title:'لعبة دب المغناطيس', img:'activities/b2_07.jpg', desc:'التآزر البصري الحركي وتصنيف الألوان بالقلم المغناطيسي', duration:'٢٠ دقيقة', place:'ركن تنمية المهارات', strategy:'النمذجة + المطابقة البصرية', goals:['يتعرف على الألوان المختلفة من خلال الكرات الملونة','ينمي التآزر البصري الحركي من خلال تحريك الكرات','يشعر بالإنجاز عند إتمام تشكيل المخطط المختار'], tools:'لوحة المخطط الذكي، بطاقات النماذج، مجموعة من الكرات الملونة (الأحمر، الأزرق، الأخضر، الأصفر)', steps:['التمهيد: عرض لوحة الدب وإخبار الأطفال أنها ستحملنا إلى عالم الألوان','التنفيذ: الطفل يختار بطاقة نموذج ويحرك الكرات لتطابق النموذج','التقييم: أكمل الشكل الآتي'], eval:'أكمل الشكل الآتي من خلال تحريك الكرات' },
  { id:'b2_08', num:'٨', title:'لعبة لوحة الألوان', img:'activities/b2_08.jpg', desc:'تصنيف الكرات الملونة في الكؤوس بالقلم المغناطيسي', duration:'٢٠ دقيقة', place:'ركن تنمية المهارات', strategy:'التآزر البصري الحركي + التعلم بالاكتشاف', goals:['يصنف الكرات الملونة بوضع كل كرة في الكأس المطابق لها في اللون','يستخدم القلم المغناطيسي في تحريك الكرات بدقة داخل ممرات المتاهة','ينمي مهارة الصبر والتركيز أثناء إتمام المهمة الحركية'], tools:'لوحة خشبية مغطاة بالأكريليك تحتوي على ممرات (متاهة)، كرات معدنية ملونة، قلم مغناطيسي، ١٠ كؤوس مرقمة وملونة', steps:['التمهيد: جذب انتباه الطفل للوحة وعرض القلم السحري وقدرته على تحريك الكرات','التنفيذ: المعلم يسحب كرة للكأس المماثل في اللون ثم الطفل يكمل بقية الكرات','التقييم: صنف الكرات حسب اللون وضع كل لون في المكان المناسب له'], eval:'صنف الكرات حسب اللون وضع كل لون في المكان المناسب له' },
  { id:'b2_09', num:'٩', title:'فصول السنة – كتاب تفاعلي', img:'activities/b2_09.jpg', desc:'التمييز بين فصول السنة ومظاهرها الطبيعية', duration:'٢٠ دقيقة', place:'ركن تنمية المهارات', strategy:'النمذجة + الحوار + التوجيه اليدوي', goals:['يُميز المظاهر الطبيعية المميزة لكل فصل من فصول السنة الأربعة','يضع الأجزاء المتحركة (أوراق شجر، ثلج، شمس) في مكانها الصحيح','يدرك التغيرات في البيئة من حوله ويتفاعل معها بمرونة'], tools:'كتاب تفاعلي مصنوع من الجوخ يحتوي على صفحات لفصول السنة وأشكال متنوعة من الجوخ مزودة بالاسكوتش', steps:['التمهيد: سؤال الطفل لماذا يتغير حال الجو ثم فتح كتاب الفصول','التنفيذ: عرض كل صفحة وشرح مظاهرها وجعل الطفل يركب القطع المناسبة','التقييم: قم باختيار الشكل الذي يمثل فصل الصيف'], eval:'قم باختيار الشكل الذي يمثل فصل الصيف' },
  { id:'b2_10', num:'١٠', title:'بازل مواقف حياتية', img:'activities/b2_10.jpg', desc:'التعرف على المواقف الاجتماعية اليومية واكتساب آداب السلوك', duration:'٢٠ دقيقة', place:'قاعة تنمية المهارات', strategy:'النمذجة + المحاولة والخطأ + التعلم باللعب', goals:['يتعرف على المواقف الاجتماعية اليومية المختلفة','يوفق بين قطع البازل لتكوين صورة كاملة لموقف حياتي صحيح','يكتسب آداب السلوك في المواقف المختلفة'], tools:'لوحة بازل خشبية مقسمة لمواقف حياتية (الذهاب للمدرسة، زيارة المريض، التسوق مع العائلة، وقت اللعب)', steps:['التمهيد: عرض اللوحة كاملة وإثارة حوار شيق عن الصور اليومية','التنفيذ: فك قطع موقف وطلب من الطفل تجميعها ثم الانتقال للموقف التالي','التقييم: أكمل البازل الآتي بالشكل الصحيح'], eval:'أكمل البازل الآتي بالشكل الصحيح' },
  { id:'b2_11', num:'١١', title:'أدوات المائدة – كتاب تفاعلي', img:'activities/b2_11.jpg', desc:'التعرف على أدوات المائدة وتنمية سلوكيات الطعام', duration:'١٥ دقيقة', place:'ركن الرعاية الذاتية', strategy:'النمذجة + التوجيه اللفظي', goals:['يتعرف على أدوات المائدة الأساسية وبعض أنواع الخضروات','يضع كل أداة في مكانها الصحيح حول الطبق','يكتسب سلوكيات إيجابية أثناء تناول الطعام'], tools:'كتاب تفاعلي من النصبيان مغلف بالجوخ يحتوي على (طبق، ملعقة، شوكة، سكين، كوب، مجموعة خضروات) مصنوعة من الجوخ', steps:['التمهيد: إثارة دافعية الطفل بسؤاله عن كيفية تناول الطعام والأدوات المستخدمة','التنفيذ: عرض الأدوات مبعثرة وتثبيت الطبق أولاً ثم توجيه الطفل لترتيب الباقي','التقييم: أشر إلى الأداة التي نستطيع من خلالها تناول الأرز'], eval:'أشر إلى الأداة التي نستطيع من خلالها تناول الأرز' },
  { id:'b2_12', num:'١٢', title:'بازل أجزاء الوجه', img:'activities/b2_12.jpg', desc:'التعرف على أجزاء الوجه ومطابقتها وإدراك الجسم', duration:'٢٠ دقيقة', place:'قاعة النشاط', strategy:'التعلم بالمطابقة والتركيب', goals:['يتعرف على أجزاء الوجه','يطابق أجزاء الوجه مع أماكنها','يُبدي اهتماماً بالتعلم الذاتي'], tools:'لوحة خشبية متينة تحتوي على رسم توضيحي لوجه طفل مقسمة إلى أجزاء بنظام البازل القابل للفك والتركيب', steps:['التمهيد: عرض لوحة الوجه وتوجيه أسئلة بسيطة مثل: أين عينك؟ أين فمك؟','التنفيذ: نزع القطع ووضعها أمام الطفل ثم الطفل يضعها في مكانها المطابق','التقييم: قم بوضع قطعة (الأنف) في مكانها الصحيح على وجه الطفل'], eval:'قم بوضع قطعة (الأنف) في مكانها الصحيح على وجه الطفل' },
  { id:'b2_13', num:'١٣', title:'بازل خضار وفاكهة', img:'activities/b2_13.jpg', desc:'التعرف على الخضار والفاكهة والتمييز بينها', duration:'١٥ دقيقة', place:'غرفة المصادر أو قاعة النشاط', strategy:'المحاولة والخطأ', goals:['يتعرف على أنواع الخضار والفاكهة ويميز بينها','يطابق القطع مع أماكنها الصحيحة','يُظهر رغبة في المشاركة والتعلم'], tools:'لوحة بازل تحتوي على صور خضروات وفواكه، قطع بازل منفصلة (تفاح–موز–جزر–خيار)، لاصق أو تجويف للتثبيت', steps:['التمهيد: سؤال الطفل عن الأطعمة التي يحبها وعرض صور الخضار والفاكهة','التنفيذ: عرض اللوحة فارغة ثم نمذجة النشاط والطفل يضع القطع','التقييم: قم باختيار الخضار من الصور الآتية'], eval:'قم باختيار الخضار من الصور الآتية' },
  { id:'b2_14', num:'١٤', title:'بازل زهور وحشرات', img:'activities/b2_14.jpg', desc:'التعرف على الزهور والحشرات وتمييزها', duration:'١٥ دقيقة', place:'غرفة المصادر أو قاعة النشاط', strategy:'المحاولة والخطأ', goals:['يتعرف على أشكال الزهور والحشرات ويميز بينها','يطابق كل جزء من البازل مع مكانه الصحيح بدقة','يُبدي اهتماماً واستمتاعاً أثناء النشاط'], tools:'لوحة بازل مصممة تحتوي على صور زهور وحشرات، قطع بازل منفصلة (زهرة–نحلة–فراشة–دعسوقة)', steps:['التمهيد: جذب انتباه الطفل بالحديث عن الزهور والحشرات وتسمية كل عنصر','التنفيذ: عرض اللوحة فارغة ثم نمذجة النشاط والطفل يضع القطع','التقييم: قم باختيار صورة الحشرة من بين الصور التالية'], eval:'قم باختيار صورة الحشرة من بين الصور التالية' },
  { id:'b2_15', num:'١٥', title:'مجسم فم وفرشة ومعجون', img:'activities/b2_15.jpg', desc:'تعلم تنظيف الأسنان بالطريقة الصحيحة', duration:'١٥ دقيقة', place:'ركن العناية الذاتية أو قاعة النشاط', strategy:'النمذجة', goals:['يتعرف على أدوات تنظيف الأسنان ووظيفتها','يستخدم الفرشاة والمعجون بطريقة صحيحة على المجسم','يُبدي اهتماماً بالنظافة الشخصية'], tools:'مجسم فم كبير بأسنان واضحة، فرشاة أسنان بلاستيكية، معجون أسنان (حقيقي أو مجسم)', steps:['التمهيد: سؤال الطفل عن تنظيف الأسنان وأهميته وعرض الأدوات','التنفيذ: نمذجة طريقة وضع المعجون وتنظيف الأسنان بحركات بسيطة على المجسم','التقييم: قم باختيار الفرشاة واستخدمها لتنظيف الأسنان على المجسم بشكل صحيح'], eval:'قم باختيار الفرشاة واستخدمها لتنظيف الأسنان على المجسم بشكل صحيح' },
];

/* ============================================================
   STORAGE HELPERS
   ============================================================ */
const STORAGE_KEY_BAGS = 'basmet_bag_videos';
const ADMIN_PASS       = 'basmet2025';

function loadBagVideos()  { try { return JSON.parse(localStorage.getItem(STORAGE_KEY_BAGS) || '{}'); } catch(e){ return {}; } }
function saveBagVideos(d) { localStorage.setItem(STORAGE_KEY_BAGS, JSON.stringify(d)); }

/* ============================================================
   YOUTUBE HELPERS
   ============================================================ */
function extractYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}
function ytThumb(id) { return 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg'; }
function ytEmbed(id) { return 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0'; }
function escapeAttr(str) { return (str||'').replace(/'/g,"\\'").replace(/"/g,'&quot;'); }

/* ============================================================
   RENDER BAG GRID
   ============================================================ */
function renderBagGrid(activities, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const videos = loadBagVideos();
  grid.innerHTML = '';

  activities.forEach(function(act) {
    const vid   = videos[act.id] || null;
    const vidId = vid ? extractYouTubeId(vid.url) : null;

    const thumbHtml = vidId
      ? '<div class="activity-video-thumb" onclick="openVideoModal(\'' + vidId + '\',\'' + escapeAttr(act.title) + '\')">'
        + '<img src="' + ytThumb(vidId) + '" alt="' + act.title + '" loading="lazy" />'
        + '<div class="play-overlay"><i class="bi bi-play-circle-fill"></i></div>'
        + '<div class="video-label"><i class="bi bi-camera-video-fill me-1"></i>شاهد الفيديو</div>'
        + '</div>'
      : '<div class="activity-no-video"><i class="bi bi-camera-video-off"></i><span>لا يوجد فيديو بعد</span></div>';

    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';
    col.setAttribute('data-aos', 'zoom-in');
    col.innerHTML =
      '<div class="activity-card" onclick="openActivityModal(\'' + act.id + '\')">'
      + '<div class="activity-num">' + act.num + '</div>'
      + '<div class="activity-img-wrap"><img src="' + act.img + '" alt="' + act.title + '" loading="lazy" '
      + 'onerror="this.parentElement.innerHTML=\'<div class=activity-img-placeholder><i class=bi-bi-image></i></div>\'" /></div>'
      + '<div class="activity-info">'
      + '<h6 class="activity-title">' + act.title + '</h6>'
      + '<p class="activity-desc">' + act.desc + '</p>'
      + '<span class="activity-more-btn">تفاصيل <i class="bi bi-arrow-left"></i></span>'
      + '</div>'
      + thumbHtml
      + '</div>';
    grid.appendChild(col);
  });
}

/* ============================================================
   ACTIVITY DETAIL MODAL
   ============================================================ */
function openActivityModal(actId) {
  const all = BAG1.concat(BAG2);
  const act = all.find(function(a){ return a.id === actId; });
  if (!act) return;

  const videos = loadBagVideos();
  const vid = videos[act.id];
  const vidId = vid ? extractYouTubeId(vid.url) : null;

  const videoSection = vidId
    ? '<div class="act-modal-video" onclick="closeActivityModal(); setTimeout(function(){ openVideoModal(\'' + vidId + '\',\'' + escapeAttr(act.title) + '\'); },200)">'
      + '<img src="' + ytThumb(vidId) + '" alt="' + act.title + '" />'
      + '<div class="play-overlay"><i class="bi bi-play-circle-fill"></i></div>'
      + '<div class="video-label"><i class="bi bi-camera-video-fill me-1"></i>شاهد الفيديو</div>'
      + '</div>'
    : '<div class="act-modal-novideo"><i class="bi bi-camera-video-off"></i><span>لم يُضف فيديو لهذا النشاط بعد</span></div>';

  const goalsHtml = act.goals.map(function(g){ return '<li>' + g + '</li>'; }).join('');
  const stepsHtml = act.steps.map(function(s,i){
    return '<div class="act-step"><span class="step-num">' + (i+1) + '</span><span>' + s + '</span></div>';
  }).join('');

  let modal = document.getElementById('activityModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'activityModal';
    modal.className = 'act-modal-overlay';
    modal.addEventListener('click', function(e){ if (e.target === modal) closeActivityModal(); });
    document.body.appendChild(modal);
  }

  modal.innerHTML =
    '<div class="act-modal-box">'
    + '<div class="act-modal-header">'
    + '<div><span class="act-modal-num">النشاط ' + act.num + '</span>'
    + '<h5 class="act-modal-title">' + act.title + '</h5></div>'
    + '<button onclick="closeActivityModal()"><i class="bi bi-x-lg"></i></button>'
    + '</div>'
    + '<div class="act-modal-body">'
    + '<div class="act-modal-img-wrap"><img src="' + act.img + '" alt="' + act.title + '" onerror="this.style.display=\'none\'" /></div>'
    + videoSection
    + '<div class="act-meta-row">'
    + '<span><i class="bi bi-clock me-1"></i>' + act.duration + '</span>'
    + '<span><i class="bi bi-geo-alt me-1"></i>' + act.place + '</span>'
    + '<span><i class="bi bi-lightbulb me-1"></i>' + act.strategy + '</span>'
    + '</div>'
    + '<div class="act-section"><h6><i class="bi bi-bullseye me-2 text-primary"></i>الأهداف</h6>'
    + '<ul class="act-goals">' + goalsHtml + '</ul></div>'
    + '<div class="act-section"><h6><i class="bi bi-tools me-2 text-primary"></i>الأدوات المستخدمة</h6>'
    + '<p class="act-tools-text">' + act.tools + '</p></div>'
    + '<div class="act-section"><h6><i class="bi bi-list-check me-2 text-primary"></i>خطوات النشاط</h6>'
    + stepsHtml + '</div>'
    + '<div class="act-eval"><i class="bi bi-patch-question-fill me-2"></i><strong>سؤال التقييم:</strong> ' + act.eval + '</div>'
    + '</div></div>';

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeActivityModal() {
  const modal = document.getElementById('activityModal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}

/* ============================================================
   VIDEO MODAL
   ============================================================ */
function openVideoModal(vidId, title) {
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'video-modal-overlay';
    modal.innerHTML =
      '<div class="video-modal-box">'
      + '<div class="video-modal-header"><h5 id="videoModalTitle"></h5>'
      + '<button onclick="closeVideoModal()"><i class="bi bi-x-lg"></i></button></div>'
      + '<div class="video-modal-body"><iframe id="videoModalFrame" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe></div>'
      + '</div>';
    modal.addEventListener('click', function(e){ if (e.target === modal) closeVideoModal(); });
    document.body.appendChild(modal);
  }
  document.getElementById('videoModalTitle').textContent = title;
  document.getElementById('videoModalFrame').src = ytEmbed(vidId);
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) { modal.style.display = 'none'; document.getElementById('videoModalFrame').src = ''; document.body.style.overflow = ''; }
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
  if (document.getElementById('adminPass').value === ADMIN_PASS) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    renderAdminDashboard();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function renderAdminDashboard() {
  const allOpts1 = BAG1.map(function(a){ return '<option value="' + a.id + '">' + a.num + ' - ' + a.title + '</option>'; }).join('');
  const allOpts2 = BAG2.map(function(a){ return '<option value="' + a.id + '">' + a.num + ' - ' + a.title + '</option>'; }).join('');
  document.getElementById('adminDashboard').innerHTML =
    '<p class="text-muted small mb-3">أضف رابط يوتيوب لأي نشاط من الـ ٣٥ نشاطاً</p>'
    + '<div class="mb-3"><label class="form-label fw-bold">اختر النشاط</label>'
    + '<select class="form-select custom-input mb-2" id="bagActivitySelect">'
    + '<optgroup label="الحقيبة الأولى — رحلة المهارات الحياتية">' + allOpts1 + '</optgroup>'
    + '<optgroup label="الحقيبة الثانية — عبّر وأتفاعل">' + allOpts2 + '</optgroup>'
    + '</select>'
    + '<input type="url" id="bagVideoUrl" class="form-control custom-input mb-2" placeholder="https://www.youtube.com/watch?v=..." />'
    + '<button class="btn btn-hero-primary w-100" onclick="saveBagVideo()"><i class="bi bi-plus-circle me-2"></i>حفظ الفيديو</button>'
    + '</div><hr/><h6 class="mb-3">الفيديوهات المضافة</h6><div id="bagVideoList"></div>';
  renderBagVideoList();
}

function saveBagVideo() {
  const id  = document.getElementById('bagActivitySelect').value;
  const url = document.getElementById('bagVideoUrl').value.trim();
  if (!url) return alert('أدخل رابط الفيديو');
  if (!extractYouTubeId(url)) return alert('الرابط غير صحيح، تأكد من رابط يوتيوب');
  const data = loadBagVideos();
  data[id] = { url: url };
  saveBagVideos(data);
  document.getElementById('bagVideoUrl').value = '';
  renderBagVideoList();
  renderBagGrid(BAG1, 'bag1Grid');
  renderBagGrid(BAG2, 'bag2Grid');
  alert('تم حفظ الفيديو بنجاح ✓');
}

function deleteBagVideo(id) {
  if (!confirm('حذف فيديو هذا النشاط؟')) return;
  const data = loadBagVideos();
  delete data[id];
  saveBagVideos(data);
  renderBagVideoList();
  renderBagGrid(BAG1, 'bag1Grid');
  renderBagGrid(BAG2, 'bag2Grid');
}

function renderBagVideoList() {
  const container = document.getElementById('bagVideoList');
  if (!container) return;
  const data = loadBagVideos();
  const allActs = BAG1.concat(BAG2);
  const entries = allActs.filter(function(a){ return data[a.id]; });
  if (entries.length === 0) { container.innerHTML = '<p class="text-muted small">لا توجد فيديوهات مضافة بعد</p>'; return; }
  container.innerHTML = entries.map(function(a) {
    const vidId = extractYouTubeId(data[a.id].url);
    return '<div class="admin-vid-item">'
      + '<img src="' + ytThumb(vidId) + '" style="width:60px;border-radius:6px;margin-left:10px;flex-shrink:0" />'
      + '<span class="flex-grow-1">' + a.num + ' — ' + a.title + '</span>'
      + '<button class="btn btn-sm btn-danger" onclick="deleteBagVideo(\'' + a.id + '\')"><i class="bi bi-trash"></i></button>'
      + '</div>';
  }).join('');
}

/* ============================================================
   GALLERY — عرض كل صور الأنشطة
   ============================================================ */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const all = BAG1.concat(BAG2);
  grid.innerHTML = '';
  all.forEach(function(act) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'zoom-in');
    item.innerHTML =
      '<div class="gallery-img-wrap" onclick="openActivityModal(\'' + act.id + '\')">'
      + '<img src="' + act.img + '" alt="' + act.title + '" loading="lazy" '
      + 'onerror="this.parentElement.classList.add(\'gallery-error\')" />'
      + '<div class="gallery-overlay">'
      + '<span class="gallery-num">' + act.num + '</span>'
      + '<span class="gallery-name">' + act.title + '</span>'
      + '<i class="bi bi-zoom-in"></i>'
      + '</div>'
      + '</div>';
    grid.appendChild(item);
  });
}

/* ============================================================
   CHATBOT — Gemini AI
   ============================================================ */
const GEMINI_KEY = 'AIzaSyD-REPLACE_WITH_YOUR_KEY';
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_KEY;

const SYSTEM_PROMPT = `أنت مساعد ذكي متخصص في مشروع "بصمة حياة" التعليمي.
المشروع يتعلق بتصميم بيئة تعليمية مرنة لتنمية المهارات الحياتية لدى الأطفال ذوي الإعاقة العقلية.
يحتوي المشروع على حقيبتين تعليميتين:
- الحقيبة الأولى "رحلة المهارات الحياتية": 20 نشاطاً
- الحقيبة الثانية "عبّر وأتفاعل": 15 نشاطاً
أجب باللغة العربية بشكل مختصر وواضح وودود. لا تتجاوز 3 أسطر في إجاباتك إلا إذا طُلب منك شرح تفصيلي.`;

let chatHistory = [];
let isChatOpen = false;

function toggleChatbot() {
  const box = document.getElementById('chatbotBox');
  const icon = document.getElementById('chatFabIcon');
  isChatOpen = !isChatOpen;
  box.style.display = isChatOpen ? 'flex' : 'none';
  icon.className = isChatOpen ? 'bi bi-x-lg' : 'bi bi-chat-dots-fill';
  if (isChatOpen) document.getElementById('chatInput').focus();
}

function appendMsg(text, isBot) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + (isBot ? 'bot-msg' : 'user-msg');
  div.innerHTML = '<div class="chat-bubble">' + text + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot-msg';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="chat-bubble typing-bubble"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

async function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMsg(text, false);
  chatHistory.push({ role: 'user', parts: [{ text: text }] });
  showTyping();
  document.getElementById('chatSendBtn').disabled = true;

  try {
    const messages = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'حسناً، أنا مستعد للمساعدة في كل ما يتعلق بمشروع بصمة حياة.' }] }
    ].concat(chatHistory);

    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: messages, generationConfig: { maxOutputTokens: 300, temperature: 0.7 } })
    });
    const data = await res.json();
    const reply = data.candidates && data.candidates[0]
      ? data.candidates[0].content.parts[0].text
      : 'عذراً، لم أتمكن من الرد. تأكد من إضافة مفتاح Gemini API.';
    removeTyping();
    appendMsg(reply, true);
    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
  } catch(e) {
    removeTyping();
    appendMsg('⚠️ تأكد من إضافة مفتاح Gemini API الصحيح في ملف main.js', true);
  }
  document.getElementById('chatSendBtn').disabled = false;
}

/* ============================================================
   TTS — القارئ الصوتي
   ============================================================ */
let ttsUtterance = null;
let ttsActive = false;
let ttsChunks = [];
let ttsIndex = 0;

function getPageText() {
  const ignore = ['SCRIPT','STYLE','NOSCRIPT','NAV','FOOTER'];
  let texts = [];
  document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span.section-eyebrow,.hero-badge,.activity-title,.bag-title,.hfy-title,.hfy-desc,.hfy-feature span,.act-modal-title').forEach(function(el) {
    if (ignore.indexOf(el.tagName) >= 0) return;
    const txt = el.innerText.trim();
    if (txt.length > 3) texts.push(txt);
  });
  return texts;
}

function ttsToggle() {
  if (ttsActive) { ttsStop(); return; }
  ttsStart();
}

function ttsStart() {
  if (!window.speechSynthesis) { alert('متصفحك لا يدعم القراءة الصوتية'); return; }
  window.speechSynthesis.cancel();
  ttsChunks = getPageText();
  ttsIndex = 0;
  ttsActive = true;
  document.getElementById('ttsBar').classList.add('tts-playing');
  const icon = document.getElementById('ttsPlayIcon');
  if (icon) icon.className = 'bi bi-pause-fill';
  ttsReadNext();
}

function ttsReadNext() {
  if (!ttsActive || ttsIndex >= ttsChunks.length) { ttsStop(); return; }
  const pct = Math.round((ttsIndex / ttsChunks.length) * 100);
  document.getElementById('ttsProgressBar').style.width = pct + '%';
  document.getElementById('ttsLabel').textContent = (ttsIndex + 1) + ' / ' + ttsChunks.length;
  ttsUtterance = new SpeechSynthesisUtterance(ttsChunks[ttsIndex]);
  ttsUtterance.lang = 'ar-SA';
  ttsUtterance.rate = 0.9;
  ttsUtterance.pitch = 1;
  // Pick Arabic voice if available
  const voices = window.speechSynthesis.getVoices();
  const arVoice = voices.find(function(v){ return v.lang.startsWith('ar'); });
  if (arVoice) ttsUtterance.voice = arVoice;
  ttsUtterance.onend = function() { ttsIndex++; ttsReadNext(); };
  ttsUtterance.onerror = function() { ttsIndex++; ttsReadNext(); };
  window.speechSynthesis.speak(ttsUtterance);
}

function ttsStop() {
  ttsActive = false;
  ttsIndex = 0;
  window.speechSynthesis.cancel();
  document.getElementById('ttsProgressBar').style.width = '0%';
  document.getElementById('ttsLabel').textContent = 'القارئ الصوتي';
  document.getElementById('ttsBar').classList.remove('tts-playing');
  const icon = document.getElementById('ttsPlayIcon');
  if (icon) icon.className = 'bi bi-volume-up-fill';
}

// Keep speech alive (Chrome bug)
setInterval(function() {
  if (ttsActive && window.speechSynthesis.speaking && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}, 5000);

/* ============================================================
   INIT — add gallery to DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  renderBagGrid(BAG1, 'bag1Grid');
  renderBagGrid(BAG2, 'bag2Grid');
  renderGallery();
  // Load voices
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function() { window.speechSynthesis.getVoices(); };
  }
});
