/* Lampino — მთელი ტექსტი და ნივთების სია აქ არის.
   1) CONTACT  — ტელეფონი (WhatsApp)
   2) PRODUCTS — კოლექციის ბარათები (სახელი, აღწერა, ფასი, ფოტო)
   3) TEXT     — საიტის ყველა წარწერა ორ ენაზე (ka / en)
   ქვემოთ, ხაზის „ლოგიკა“ შემდეგ, არაფრის შეცვლა არ არის საჭირო. */

var CONTACT = { whatsapp: '995555955410' };

/* cat: 'lamps' | 'night' | 'souvenirs'
   price: რიცხვი ლარში. sample: true → ფასი ნიმუშია (გვერდზე ვარსკვლავით ჩანს).
   soon: true → „მალე“, ფასი არ ჩანს.
   TODO: ნამდვილი სახელები, აღწერები, ფასები და ფოტოები — ქეთისგან. */
var PRODUCTS = [
  { id: 'balcony', cat: 'lamps', img: 'images/lamp-1.jpg', price: 150, sample: true,
    ka: { name: 'თბილისური აივნის ლამპა', desc: 'ჩუქურთმიანი ხის აივანი, რომლის ფანჯრებიდანაც თბილი შუქი გამოდის.' },
    en: { name: 'Tbilisi balcony lamp', desc: 'A carved wooden balcony with warm light in its windows.' } },
  { id: 'sololaki', cat: 'lamps', img: 'images/lamp-2.jpg', price: 180, sample: true,
    ka: { name: 'სოლოლაკის სახლი', desc: 'ძველი უბნის ფასადი თაღოვანი ფანჯრებით.' },
    en: { name: 'Sololaki house', desc: 'A façade from the old quarter, with arched windows.' } },
  { id: 'stained', cat: 'lamps', img: 'images/lamp-3.jpg', price: 160, sample: true,
    ka: { name: 'ვიტრაჟიანი ლამპა', desc: 'ფერადი მინა ხის ჩარჩოში — შუქი კედელზე ფერებად იშლება.' },
    en: { name: 'Stained-glass lamp', desc: 'Coloured glass in a wooden frame; the light falls on the wall in colour.' } },
  { id: 'turret', cat: 'night', img: 'images/lamp-4.jpg', price: 70, sample: true,
    ka: { name: 'კოშკურა — ღამის სანათი', desc: 'პატარა კოშკურა რბილი შუქით, საძინებლისთვის.' },
    en: { name: 'Turret night light', desc: 'A small turret with a soft light for the bedroom.' } },
  { id: 'doorway', cat: 'night', img: 'images/lamp-5.jpg', price: 60, sample: true,
    ka: { name: 'ძველი კარი — ღამის სანათი', desc: 'თბილისური სადარბაზოს კარი, რომლის მიღმაც შუქი ანთია.' },
    en: { name: 'Old doorway night light', desc: 'A Tbilisi doorway with a light on behind it.' } },
  { id: 'magnets', cat: 'souvenirs', img: 'images/lamp-6.jpg', price: 15, sample: false,
    ka: { name: 'მაგნიტები', desc: 'თბილისური ფასადები მაცივარზე — პატარა საჩუქარი ქალაქიდან.' },
    en: { name: 'Magnets', desc: 'Tbilisi façades for the fridge: a small gift from the city.' } },
  { id: 'miniature', cat: 'souvenirs', img: 'images/lamp-7.jpg', price: 30, sample: true,
    ka: { name: 'მინიატურული სახლი', desc: 'ხელისგულის ზომის სახლი თაროსთვის ან სამუშაო მაგიდისთვის.' },
    en: { name: 'Miniature house', desc: 'A palm-sized house for a shelf or a desk.' } },
  { id: 'svan', cat: 'lamps', img: 'images/lamp-8.jpg', soon: true,
    ka: { name: 'სვანური კოშკის ლამპა', desc: 'ახალი დიზაინი — სვანური კოშკი, რომელიც შიგნიდან ანათებს.' },
    en: { name: 'Svan tower lamp', desc: 'A new design: a Svan tower lit from inside.' } },
  { id: 'oda', cat: 'lamps', img: 'images/lamp-9.jpg', soon: true,
    ka: { name: 'რაჭული ოდის ლამპა', desc: 'ახალი დიზაინი — ტრადიციული რაჭული ოდა-სახლი.' },
    en: { name: 'Racha oda lamp', desc: 'A new design: the traditional oda house of Racha.' } }
];

var TEXT = {
  ka: {
    'meta.title': 'Lampino — ხელნაკეთი ლამპები ძველი თბილისის მოტივებით',
    'demo': 'დემო / კონცეფცია — ფოტოები და ფასები ნიმუშია',
    'nav.label': 'მთავარი მენიუ', 'nav.foot': 'ფუტერის მენიუ',
    'nav.collection': 'კოლექცია', 'nav.custom': 'შენი სახლი', 'nav.story': 'ისტორია', 'nav.process': 'პროცესი', 'nav.contact': 'კონტაქტი',
    'hero.title': 'ძველი თბილისი —<br>შენი სახლის შუქში',
    'hero.lead': 'ხელნაკეთი ლამპები და ღამის სანათები ძველი თბილისის აივნებით, კარებითა და ვიტრაჟებით. ყველა ნამუშევარს ქეთი ნოზაძე თავად ქმნის — ესკიზიდან შეფუთვამდე.',
    'hero.alt': 'ანთებული ხელნაკეთი ლამპა ძველი თბილისის აივნიანი სახლის ფორმით, ბნელ ოთახში',
    'cta.order': 'შეუკვეთე WhatsApp-ით', 'cta.view': 'ნახე კოლექცია',
    'light.on': 'შუქი ანთია — გამორთე', 'light.off': 'შუქი ჩამქრალია — აანთე',
    'col.title': 'კოლექცია',
    'col.lead': 'თითოეული ნამუშევარი ერთდროულად სანათიცაა და ძველი ქალაქის პატარა ნაწილიც.',
    'col.filter': 'ფილტრი',
    'col.note': '* ფასები ნიმუშია და დაზუსტდება. ყველა ნივთი ხელით მზადდება, ამიტომ ორი ერთნაირი არ არსებობს.',
    'f.all': 'ყველა', 'f.lamps': 'ლამპები', 'f.night': 'ღამის სანათები', 'f.souvenirs': 'სუვენირები',
    'card.from': '{p} ₾-დან', 'card.sample': 'ნიმუში ფასი', 'card.soon': 'მალე',
    'card.order': 'შეკვეთა', 'card.notify': 'შემატყობინე',
    'card.alt': 'ფოტოს ადგილი: {n}',
    'wa.general': 'გამარჯობა! Lampino-ს საიტიდან გწერთ, მინდა შეკვეთა.',
    'wa.product': 'გამარჯობა! მაინტერესებს: {n}.',
    'wa.soon': 'გამარჯობა! შემატყობინეთ, როცა მზად იქნება: {n}.',
    'wa.custom': 'გამარჯობა! მინდა ინდივიდუალური შეკვეთა — ჩემი სახლი ლამპად. ფოტოს ახლავე გამოგიგზავნით.',
    'wa.visit': 'გამარჯობა! მინდა სტუდიაში მოსვლა. როდის შეიძლება?',
    'cus.title': 'შენი სახლი — ლამპად',
    'cus.lead': 'ქეთი ინდივიდუალურ შეკვეთებსაც იღებს — მაგალითად, ლამპას, რომელიც ზუსტად შენს სახლს იმეორებს.',
    'cus.s1.t': 'გამოგზავნე ფოტო', 'cus.s1.d': 'გამოგვიგზავნე სახლის ფოტო WhatsApp-ით და მოგვწერე, რა ზომის ლამპა გინდა.',
    'cus.s2.t': 'მიიღე ესკიზი', 'cus.s2.d': 'ქეთი ესკიზს გიმზადებს და დეტალებს ერთად აზუსტებთ.',
    'cus.s3.t': 'მიიღე შენი ლამპა', 'cus.s3.d': 'ლამპა ხელით იჭრება, იხატება, იწყობა და იფუთება.',
    'cus.say': 'გამოგვიგზავნე სახლის ფოტო WhatsApp-ით — აქედან იწყება შენი ლამპა.',
    'cus.word': 'შეკვეთა',
    'st.title': 'ქალაქი, რომელიც<br>ხელით კეთდება',
    'st.alt': 'ფოტოს ადგილი: ქეთი ნოზაძე სახელოსნოში',
    'st.b1.t': 'ხელოვნებათმცოდნე, რომელმაც ხელობა თავად ისწავლა',
    'st.b1.d': 'ქეთი (ქეთევან) ნოზაძე განათლებით ხელოვნებათმცოდნეა, ხელობა კი თავად ისწავლა. Lampino 2019 წელს დააარსა, პირველი შვილის დაბადების შემდეგ.',
    'st.b2.t': 'სანათი და მიძღვნა ქალაქს',
    'st.b2.d': 'ძველი თბილისის ჩუქურთმიანი აივნები, კარები, ვიტრაჟები და კოშკურები მის ნამუშევრებში ბრუნდება. ყველა ნივთი ერთდროულად მოქმედი სანათიცაა და ქალაქის კულტურის პატივისცემაც.',
    'st.mat': '<strong>მასალა:</strong> ხე, დეკორატიული ცემენტი, მინა, ქსოვილი, ლითონი, საღებავი.',
    'pr.title': 'ესკიზიდან შუქამდე',
    'pr.lead': 'ქეთი ყველაფერს თავად აკეთებს. ასე ჩნდება ერთი ლამპა.',
    'pr.1.t': 'ესკიზი', 'pr.1.d': 'ყველა ნამუშევარი ნახატით იწყება.',
    'pr.2.t': 'ხე', 'pr.2.d': 'ხის დეტალები ხელით იჭრება და ეწყობა.',
    'pr.3.t': 'საღებავი', 'pr.3.d': 'მოხატვა და გრავირება — ფუნჯით და ხელით.',
    'pr.4.t': 'შუქი', 'pr.4.d': 'ელექტროგაყვანილობა, აწყობა და შეფუთვა.',
    'ct.title': 'სტუდია და კონტაქტი',
    'ct.address': 'ანტონ ფურცელაძის ქ. 30, თბილისი',
    'ct.appoint': 'ვიზიტი მხოლოდ წინასწარი შეთანხმებით — მოგვწერე ან დაგვირეკე.',
    'ct.phone': 'ტელეფონი / WhatsApp', 'ct.email': 'ელფოსტა', 'ct.visit': 'შეთანხმდი ვიზიტზე',
    'ct.map': 'Lampino — რუკა: ანტონ ფურცელაძის ქ. 30, თბილისი',
    'ft.ship': 'გაგზავნა მსოფლიოს ნებისმიერ ქვეყანაში — პირობები ზუსტდება, დეტალებისთვის მოგვწერე.',
    'ft.by': 'საიტის კონცეფცია: Gridline'
  },
  en: {
    'meta.title': 'Lampino — handmade lamps inspired by Old Tbilisi',
    'demo': 'Demo / concept — photos and prices are placeholders',
    'nav.label': 'Main menu', 'nav.foot': 'Footer menu',
    'nav.collection': 'Collection', 'nav.custom': 'Your house', 'nav.story': 'Story', 'nav.process': 'Process', 'nav.contact': 'Contact',
    'hero.title': 'Old Tbilisi, in the<br>light of your home',
    'hero.lead': 'Handmade lamps and night lights with the carved balconies, doorways and stained glass of Old Tbilisi. Keti Nozadze makes each one herself, from the first sketch to the packaging.',
    'hero.alt': 'A glowing handmade lamp shaped like an Old Tbilisi house with a balcony, in a dark room',
    'cta.order': 'Order on WhatsApp', 'cta.view': 'View collection',
    'light.on': 'The light is on — switch it off', 'light.off': 'The light is off — switch it on',
    'col.title': 'The collection',
    'col.lead': 'Each piece is a working light and a small part of the old city.',
    'col.filter': 'Filter',
    'col.note': '* Prices are placeholders and will be confirmed. Everything is made by hand, so no two pieces are the same.',
    'f.all': 'All', 'f.lamps': 'Lamps', 'f.night': 'Night lights', 'f.souvenirs': 'Souvenirs',
    'card.from': 'from {p} GEL', 'card.sample': 'placeholder price', 'card.soon': 'Coming soon',
    'card.order': 'Order', 'card.notify': 'Notify me',
    'card.alt': 'Photo placeholder: {n}',
    'wa.general': 'Hello! I am writing from the Lampino website and would like to order.',
    'wa.product': 'Hello! I am interested in: {n}.',
    'wa.soon': 'Hello! Please let me know when this is ready: {n}.',
    'wa.custom': 'Hello! I would like a custom order: my house as a lamp. I will send a photo now.',
    'wa.visit': 'Hello! I would like to visit the studio. When would suit you?',
    'cus.title': 'Your house as a lamp',
    'cus.lead': 'Keti also takes custom orders, for example a lamp modelled on your own house.',
    'cus.s1.t': 'Send a photo', 'cus.s1.d': 'Send a photo of the house on WhatsApp and tell us what size of lamp you want.',
    'cus.s2.t': 'Receive a sketch', 'cus.s2.d': 'Keti draws a sketch and you agree the details together.',
    'cus.s3.t': 'Get your lamp', 'cus.s3.d': 'The lamp is cut, painted, assembled and packed by hand.',
    'cus.say': 'Send a photo of your house on WhatsApp. Your lamp starts there.',
    'cus.word': 'Order',
    'st.title': 'A city<br>made by hand',
    'st.alt': 'Photo placeholder: Keti Nozadze in her studio',
    'st.b1.t': 'An art historian who taught herself the craft',
    'st.b1.d': 'Keti (Ketevani) Nozadze trained as an art historian and is self-taught as a maker. She founded Lampino in 2019, after the birth of her first child.',
    'st.b2.t': 'A light and a tribute to the city',
    'st.b2.d': 'The carved balconies, doorways, stained glass and turrets of Old Tbilisi return in her work. Each piece is a working light and a tribute to the culture of the city.',
    'st.mat': '<strong>Materials:</strong> wood, decorative cement, glass, textiles, metal, paint.',
    'pr.title': 'From sketch to light',
    'pr.lead': 'Keti does everything herself. This is how one lamp is made.',
    'pr.1.t': 'Sketch', 'pr.1.d': 'Every piece starts as a drawing.',
    'pr.2.t': 'Wood', 'pr.2.d': 'The wooden parts are cut and fitted by hand.',
    'pr.3.t': 'Paint', 'pr.3.d': 'Painting and engraving, by brush and by hand.',
    'pr.4.t': 'Light', 'pr.4.d': 'Wiring, assembly and packaging.',
    'ct.title': 'Studio and contact',
    'ct.address': '30 Anton Purtseladze St, Tbilisi',
    'ct.appoint': 'Visits by appointment only. Write or call first.',
    'ct.phone': 'Phone / WhatsApp', 'ct.email': 'Email', 'ct.visit': 'Arrange a visit',
    'ct.map': 'Lampino on the map: 30 Anton Purtseladze St, Tbilisi',
    'ft.ship': 'Worldwide shipping: terms to be confirmed. Write to us for details.',
    'ft.by': 'Site concept: Gridline'
  }
};

/* ============================ ლოგიკა ============================ */
(function () {
  var doc = document, root = doc.documentElement;
  root.classList.add('js');

  var lang = 'ka';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('lampino.lang');
    if (q === 'en' || q === 'ka') lang = q; else if (saved === 'en' || saved === 'ka') lang = saved;
  } catch (e) {}
  var filter = 'all';
  var lightOn = true;

  function t(key, vars) {
    var s = (TEXT[lang] && TEXT[lang][key]) || TEXT.ka[key] || '';
    if (vars) for (var k in vars) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  function wa(text) { return 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(text); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function renderGrid() {
    var grid = doc.getElementById('grid');
    if (!grid) return;
    grid.innerHTML = PRODUCTS.map(function (p) {
      var x = p[lang] || p.ka;
      var hidden = filter !== 'all' && p.cat !== filter ? ' hidden' : '';
      var price = p.soon
        ? '<span class="soon">' + esc(t('card.soon')) + '</span>'
        : '<span class="price">' + esc(t('card.from', { p: p.price })) + (p.sample ? '* <small>' + esc(t('card.sample')) + '</small>' : '') + '</span>';
      var msg = t(p.soon ? 'wa.soon' : 'wa.product', { n: x.name });
      return '<li class="card" data-cat="' + p.cat + '"' + hidden + '>' +
        '<div class="arch card-img"><img class="lit" src="' + p.img + '" width="800" height="1000" loading="lazy" alt="' + esc(t('card.alt', { n: x.name })) + '"></div>' +
        '<div class="card-body"><h3>' + esc(x.name) + '</h3><p>' + esc(x.desc) + '</p>' +
        '<div class="card-foot">' + price +
        '<a class="btn ' + (p.soon ? 'btn-quiet' : 'btn-main') + '" href="' + wa(msg) + '" target="_blank" rel="noopener">' +
        '<svg aria-hidden="true"><use href="#i-wa"/></svg><span>' + esc(t(p.soon ? 'card.notify' : 'card.order')) + '</span></a>' +
        '</div></div></li>';
    }).join('');
  }

  function applyLang() {
    root.lang = lang;
    doc.title = t('meta.title');
    doc.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n')); });
    doc.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    doc.querySelectorAll('[data-i18n-alt]').forEach(function (el) { el.alt = t(el.getAttribute('data-i18n-alt')); });
    doc.querySelectorAll('[data-i18n-title]').forEach(function (el) { el.title = t(el.getAttribute('data-i18n-title')); });
    doc.querySelectorAll('[data-wa]').forEach(function (el) { el.href = wa(t('wa.' + el.getAttribute('data-wa'))); });
    doc.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    var label = doc.getElementById('light-label');
    if (label) label.textContent = t(lightOn ? 'light.on' : 'light.off');
    renderGrid();
  }

  doc.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('lampino.lang', lang); } catch (e) {}
      applyLang();
    });
  });

  doc.querySelectorAll('[data-filter]').forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-filter');
      doc.querySelectorAll('[data-filter]').forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      doc.querySelectorAll('#grid .card').forEach(function (c) { c.hidden = filter !== 'all' && c.getAttribute('data-cat') !== filter; });
    });
  });

  /* შუქის ჩამრთველი: მთელი გვერდის ლამპები ერთად ინთება და ქრება */
  var sw = doc.getElementById('light');
  if (sw) sw.addEventListener('click', function () {
    lightOn = !lightOn;
    root.classList.toggle('lights-off', !lightOn);
    sw.setAttribute('aria-pressed', String(lightOn));
    doc.getElementById('light-label').textContent = t(lightOn ? 'light.on' : 'light.off');
  });

  /* რბილი გამოჩენა გადახვევისას */
  var items = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var y = doc.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  applyLang();
})();
