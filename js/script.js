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


// 1. 判定の基準（オプション）を先に作る
const options = {
    root: null,
    rootMargin: "-10% 0px", // 画面の中央10%くらいに入ったら発動
    threshold: 0
};
// 監視した時の動き
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 画面に入ったら "show" クラスをつける
            entry.target.classList.add('show');
        }
    });
}, options);

// 監視対象をすべて取得して、ガードマンに渡す
const targets = document.querySelectorAll('.text-section, .gallery-item');
targets.forEach(target => {
    observer.observe(target);
});
if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // 【追加】一度表示したら、その要素の監視をやめる（動作も軽くなります）
            observer.unobserve(entry.target); 
        }