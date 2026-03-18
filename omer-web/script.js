/* ============================================================
   BÖLÜM 1: GİRİŞ EKRANI MANTIĞI (DOKUNULMAZ)
   Dil seçimi ve overlay'in pürüzsüzce kaybolmasını sağlar.
   ============================================================ */
function selectLang(lang) {
    const overlay = document.getElementById('language-overlay');
    const main = document.getElementById('main-content');
    
    // Dil Çeviri İşlemleri (Örnek)
    if(lang === 'en') {
        document.getElementById('welcome-msg').innerText = "Welcome to the System, Ömer.";
        // Diğer İngilizce çeviriler buraya...
    }

    // Overlay'i kapatma efekti
    overlay.classList.add('fade-out');
    
    setTimeout(() => {
        overlay.style.display = "none";
        main.style.display = "flex";
        setTimeout(() => { main.style.opacity = "1"; }, 50);
        document.body.style.overflow = "auto"; // Scroll açılır
        window.scrollTo(0, 0);
    }, 1000);
}

/* ============================================================
   BÖLÜM 2: CANVAS ARKA PLAN (DOKUNULMAZ)
   Giriş ekranındaki Selçuklu motiflerini çizen teknik bölümdür.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('heritageCanvas');
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; draw(); }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const spacing = canvas.width / 11;
        for (let i = 1; i <= 10; i++) {
            let x = i * spacing;
            for (let y = 50; y < canvas.height; y += 100) {
                ctx.save();
                ctx.translate(x, y);
                ctx.strokeStyle = 'rgba(197, 164, 126, 0.12)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                for(let a=0; a<8; a++) { ctx.rotate(Math.PI/4); ctx.lineTo(20, 0); ctx.lineTo(8, 8); }
                ctx.closePath(); ctx.stroke(); ctx.restore();
            }
        }
    }
    window.addEventListener('resize', resize);
    resize();
});

/* ============================================================
   BÖLÜM 3: ANA SAYFA FONKSİYONLARI
   ============================================================ */

// Navigasyon Linkleri İçin Smooth Scroll
document.querySelectorAll('.header-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90, // Header yüksekliği kadar boşluk bırakır
                behavior: 'smooth'
            });
        }
    });
});