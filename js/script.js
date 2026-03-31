const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

// 1. メニュー内のリンクをクリックした時の処理（ひとつにまとめました）
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // リンクの種類に関わらず、クリックされたらメニューを閉じる
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  });
});

// 2. ハンバーガーボタン（バツ印）自体のクリック処理
menuBtn.addEventListener('click', () => {
  // activeを付けたり外したり（トグル）することで開閉させる
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

// 1. 判定の基準（オプション）
const options = {
    root: null,
    rootMargin: "-10% 0px", 
    threshold: 0
};

// 2. 監視した時の動き
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { // ← ここで entry を定義しています
        if (entry.isIntersecting) { // 【43行目付近】ここが中に入っている必要があります
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    }); // ← forEach の閉じ
}, options); // ← observer の閉じ

// 3. 監視を開始する
const targets = document.querySelectorAll('.text-section, .gallery-item');
targets.forEach(target => {
    observer.observe(target);
});

// --- この下に Read More のコードを続けて書きます ---

const galleryBtn = document.getElementById('read-more-btn');
const galleryContainer = document.getElementById('gallery-container');

galleryBtn.addEventListener('click', () => {
    galleryContainer.classList.add('open'); // 高さを全開にする
    galleryBtn.style.display = 'none'; // ボタンを消す
});