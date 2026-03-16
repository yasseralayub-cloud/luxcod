const langToggle = document.getElementById("langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const animated = document.querySelectorAll(".fade-in");

const translations = {
  ar: {
    navServices: "الخدمات",
    navPortfolio: "الأعمال",
    navContact: "تواصل",
    heroEyebrow: "حلول رقمية بمستوى فاخر",
    heroTitle: "نصمم مواقع احترافية تنقل عملك إلى مستوى آخر",
    heroDesc:
      "نحن في LuxCod نقوم بإنشاء مواقع إلكترونية وصفحات هبوط احترافية تساعد الشركات على جذب العملاء وزيادة المبيعات وبناء حضور رقمي قوي.",
    heroBtnPortfolio: "مشاهدة أعمالنا",
    heroBtnContact: "تواصل معنا",
    heroStatsTitle: "لماذا موقعك مهم؟",
    stat1: "75٪ يحكمون على مصداقية الشركة من تصميم موقعها.",
    stat2: "97٪ يبحثون عن الشركات عبر الإنترنت قبل الشراء.",
    stat3: "69٪ يعتبرون الموقع شرطًا أساسيًا للثقة.",
    whyTitle: "لماذا تحتاج موقع إلكتروني؟",
    whyDesc:
      "الموقع هو الواجهة الرقمية لشركتك: يجذب العملاء، يعزز المصداقية، يعمل 24 ساعة، ويدعم زيادة المبيعات بشكل مستمر.",
    whyPoint1: "✔ يزيد ثقة العملاء",
    whyPoint2: "✔ يعرّف بخدماتك بشكل احترافي",
    whyPoint3: "✔ يساعد في ظهورك في Google",
    whyPoint4: "✔ يعمل كموظف تسويق 24 ساعة",
    servicesTitle: "خدماتنا",
    service1Title: "تصميم مواقع إلكترونية",
    service1Desc: "إنشاء مواقع احترافية للشركات والمتاجر والخدمات.",
    service2Title: "تصميم صفحات هبوط",
    service2Desc: "صفحات مخصصة لجذب العملاء وتحويلهم إلى مبيعات.",
    service3Title: "تحسين تجربة المستخدم",
    service3Desc: "تصميم مواقع سهلة الاستخدام وسريعة الأداء.",
    service4Title: "ربط الموقع بالخدمات",
    service4Desc:
      "ربط الموقع مع واتساب وخرائط Google ووسائل التواصل الاجتماعي.",
    portfolioTitle: "أعمالنا",
    viewProject: "عرض المشروع",
    chooseTitle: "لماذا تختار LuxCod؟",
    choose1: "تصميم احترافي",
    choose2: "سرعة في التنفيذ",
    choose3: "مواقع متوافقة مع الجوال",
    choose4: "تجربة مستخدم ممتازة",
    choose5: "دعم فني مستمر",
    testimonialsTitle: "آراء العملاء",
    testimonial1:
      "“فريق LuxCod قدّم لنا موقعًا أنيقًا وسريعًا، والنتيجة كانت زيادة واضحة في الاستفسارات.”",
    testimonial2:
      "“تنفيذ احترافي ودقة في التفاصيل، أنصح بهم لأي شركة تبحث عن حضور رقمي قوي.”",
    testimonial3:
      "“صفحة الهبوط التي صمموها حسّنت معدل التحويل بشكل ممتاز خلال فترة قصيرة.”",
    contactTitle: "تواصل معنا",
    contactDesc: "جاهزون لمساعدتك في إطلاق موقع احترافي يعكس جودة عملك.",
    phoneLabel: "رقم الاتصال:",
    whatsappBtn: "واتساب مباشر",
    callBtn: "اتصال مباشر",
    formName: "الاسم",
    formPhone: "رقم الهاتف",
    formMessage: "الرسالة",
    formSubmit: "إرسال",
    footerDesc:
      "LuxCod شركة متخصصة في تصميم المواقع وصفحات الهبوط الاحترافية التي تساعد الشركات على بناء حضور رقمي قوي وجذب المزيد من العملاء."
  },
  en: {
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    heroEyebrow: "Premium Digital Solutions",
    heroTitle: "We design professional websites that elevate your business",
    heroDesc:
      "At LuxCod, we build high-converting websites and landing pages that help businesses attract clients, grow sales, and build a strong online presence.",
    heroBtnPortfolio: "View Portfolio",
    heroBtnContact: "Contact Us",
    heroStatsTitle: "Why your website matters",
    stat1: "75% judge a company's credibility by its website design.",
    stat2: "97% search online before making a purchase.",
    stat3: "69% see having a website as essential for trust.",
    whyTitle: "Why do you need a website?",
    whyDesc:
      "Your website is your digital storefront: it attracts customers, boosts credibility, works 24/7, and supports sales growth.",
    whyPoint1: "✔ Builds customer trust",
    whyPoint2: "✔ Presents your services professionally",
    whyPoint3: "✔ Helps you appear on Google",
    whyPoint4: "✔ Works as a 24/7 marketing employee",
    servicesTitle: "Our Services",
    service1Title: "Website Design",
    service1Desc: "Professional websites for companies, stores, and service brands.",
    service2Title: "Landing Page Design",
    service2Desc: "Conversion-focused pages built to turn visitors into customers.",
    service3Title: "UX Improvement",
    service3Desc: "Fast, intuitive, and user-friendly website experiences.",
    service4Title: "Service Integrations",
    service4Desc: "Integrations with WhatsApp, Google Maps, and social channels.",
    portfolioTitle: "Portfolio",
    viewProject: "View Project",
    chooseTitle: "Why choose LuxCod?",
    choose1: "Professional design",
    choose2: "Fast delivery",
    choose3: "Fully mobile responsive",
    choose4: "Excellent user experience",
    choose5: "Ongoing technical support",
    testimonialsTitle: "Testimonials",
    testimonial1:
      "“LuxCod delivered an elegant, high-speed website, and we quickly noticed more inquiries.”",
    testimonial2:
      "“Professional execution and strong attention to detail. Highly recommended.”",
    testimonial3:
      "“Their landing page improved our conversion rate in a short time.”",
    contactTitle: "Get in touch",
    contactDesc: "We're ready to launch a professional website that reflects your brand quality.",
    phoneLabel: "Phone:",
    whatsappBtn: "WhatsApp",
    callBtn: "Call Now",
    formName: "Name",
    formPhone: "Phone Number",
    formMessage: "Message",
    formSubmit: "Send",
    footerDesc:
      "LuxCod is specialized in professional websites and landing pages that help businesses build a powerful online presence and attract more clients."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("en", lang === "en");
  langToggle.textContent = lang === "ar" ? "EN" : "AR";
  localStorage.setItem("luxcod-lang", lang);
}

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "ar" ? "ar" : "en";
  applyLanguage(current === "ar" ? "en" : "ar");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

animated.forEach((node) => observer.observe(node));

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const lang = document.documentElement.lang;
  alert(lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
  event.target.reset();
});

const savedLang = localStorage.getItem("luxcod-lang") || "ar";
applyLanguage(savedLang);
