// アルバムデータの作成
var album = [
  { src: 'img/1.png', msg: '①立ち上がって左側のアイコンEnvironmentを選択します。'},
  { src: 'img/2.png', msg: '②Createのアイコンをクリックします。'},
  { src: 'img/3.png', msg: '③そこで名前と言語を設定する'},
  { src: 'img/4.png', msg: '④選択したmyspaceの横にある⇒をクリック後、リンクで表示されるopenterminalをクリック'},
  { src: 'img/5.png', msg: '⑤このterminalの中に次の画像のようにコマンドを入力'},
  { src: 'img/5.png', msg: '⑥'}
];

// 最初のデータ
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイルの表示
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインに。
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
