// アルバムデータの作成。
var album = [
  { src: 'img1/oracle.jpg', msg: 'oracle'},
  { src: 'img1/ubuntu.jpg', msg: 'ubuntu'},
  { src: 'img1/anaconda.png', msg: 'anaconda'},
  { src: 'img1/django.png', msg: 'django'},
  { src: 'img1/rails.jpg', msg: 'rails'},
];

// 最初のデータを表示（デフォルトはRedHatEnterpriseLinux）
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像を表示します
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにでき、カーソルが動きます。
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
