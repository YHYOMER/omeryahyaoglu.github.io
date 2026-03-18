/* ============================================================
   BÖLÜM 1: GİRİŞ EKRANI MANTIĞI (GÜNCELLENMİŞ)
   ============================================================ */
function selectLang(lang) {
    const overlay = document.getElementById('language-overlay');
    const main = document.getElementById('main-content');
    const body = document.body;
    
    // Sayfa yönü ve dil ayarı sıfırlama
    body.style.direction = (lang === 'ar') ? "rtl" : "ltr";

    // Dil Çeviri İşlemleri
    if(lang === 'tr') {
        updateContent("Sisteme Hoş Geldiniz", "Hakkımda", "Deneyim", "Projeler", "İletişim", 
                      "TUM'da Havacılık ve Uzay Bilimleri yüksek lisansı yapan bir mühendis ve girişimci adayıyım. Teknik uzmanlığımı stratejik vizyonla birleştirerek, havacılık ve derin teknoloji alanında yenilikçi çözümler üretmeyi hedefliyorum.", 
                      "Eğitim & Deneyim", "Eğitim", "Profesyonel Deneyim", "Akademik Araştırma", "Mesaj Gönder", "Devam");
    }
    else if(lang === 'en') {
        updateContent("Welcome to the System", "About Me", "Experience", "Projects", "Contact", 
                      "I am an engineer and aspiring entrepreneur pursuing a Master of Science in Aerospace Engineering at TUM. By combining technical expertise with strategic vision, I aim to create innovative solutions in aerospace and deep-tech sectors.", 
                      "Education & Experience", "Education", "Professional Experience", "Academic Research", "Send Message", "Present");
    } 
    else if(lang === 'de') {
        updateContent("Willkommen im System", "Über mich", "Erfahrung", "Projekte", "Kontakt", 
                      "Ich bin Ingenieur und angehender Unternehmer, der an der TUM einen Master in Luft- und Raumfahrttechnik absolviert. Durch die Kombination von technischem Fachwissen mit strategischer Vision möchte ich innovative Lösungen im Luft- und Raumfahrtsektor entwickeln.", 
                      "Ausbildung & Erfahrung", "Ausbildung", "Berufserfahrung", "Akademische Forschung", "Nachricht senden", "Aktuell");
    }
    else if(lang === 'ar') {
        updateContent("أهلاً بك في النظام", "حول", "خبرة", "مشاريع", "اتصال", 
                      "أنا مهندس ورائد أعمال طموح أتابع ماجستير العلوم في هندسة الطيران والفضاء في جامعة ميونيخ التقنية. من خلال الجمع بين الخبرة الفنية والرؤية الاستراتيجية ، أهدف إلى ابتكار حلول في قطاعات الطيران والتكنولوجيا العميقة.", 
                      "التعليم والخبرة", "تعليم", "خبرة مهنية", "بحث أكademi", "أرسل رسالة", "مستمر");
    }

    overlay.classList.add('fade-out');
    
    setTimeout(() => {
        overlay.style.display = "none";
        main.style.display = "flex";
        setTimeout(() => { main.style.opacity = "1"; }, 50);
        body.style.overflow = "auto";
        window.scrollTo(0, 0);
    }, 1000);
}

// Tüm dinamik alanları güncelleyen yardımcı fonksiyon
function updateContent(welcome, nav1, nav2, nav3, nav4, about, expHead, sub1, sub2, sub3, btnText, presentText) {
    // Hoş geldin mesajı
    document.getElementById('welcome-msg').innerText = welcome;
    
    // Navigasyon (Header)
    const navLinks = document.querySelectorAll('.header-nav a');
    navLinks[0].innerText = nav1; navLinks[1].innerText = nav2; navLinks[2].innerText = nav3; navLinks[3].innerText = nav4;
    
    // Hakkımda Bölümü
    document.querySelector('#about-section h2').innerText = nav1;
    document.querySelector('#about-section p').innerText = about;
    
    // Deneyim Başlıkları
    document.querySelector('#experience-section h2').innerText = expHead;
    const subTitles = document.querySelectorAll('.sub-section-title');
    subTitles[0].innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${sub1}`;
    subTitles[1].innerHTML = `<i class="fa-solid fa-gears"></i> ${sub2}`;
    subTitles[2].innerHTML = `<i class="fa-solid fa-microscope"></i> ${sub3}`;
    
    // Tarihteki "Devam" hatasını düzeltme (Eğitim kartı için)
    const dateSpan = document.querySelector('.education-card .card-date');
    if(dateSpan) {
        dateSpan.innerText = `2025 - ${presentText}`;
    }

    // İletişim Bölümü
    document.querySelector('#contact-section h2').innerText = nav4;
    const contactBtns = document.querySelectorAll('.contact-btns .action-btn');
    if(contactBtns.length > 0) {
        contactBtns[0].innerText = btnText;
        contactBtns[1].innerText = "LinkedIn"; // Bu sabit kalabilir veya dile göre değişebilir
    }
}
