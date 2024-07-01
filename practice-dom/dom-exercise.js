//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
h2 = document.querySelector('h2#ex42');
p = document.createElement('p');
p.textContent = "写真表と都市の緯度軽度のページです";
h2.insertAdjacentElement('afterend',p);
p.style.textEmphasis = 'sesame green';


// 練習4-3 写真表作成プログラム
let phototable1 = "taro.png";
let img1 = document.createElement('img');
img1.setAttribute('src', phototable1);
img1.setAttribute('alt','顔写真');
img1.setAttribute('width','200');
let d1 = document.querySelector('div#phototable');
d1.insertAdjacentElement('beforeend', img1);

let phototable2 = "jiro.png";
let img2 = document.createElement('img');
img2.setAttribute('src', phototable2);
img2.setAttribute('alt','顔写真');
img2.setAttribute('width','200');
let d2 = document.querySelector('div#phototable');
d2.insertAdjacentElement('beforeend', img2);

let phototable3 = "hanako.png";
let img3 = document.createElement('img');
img3.setAttribute('src', phototable3);
img3.setAttribute('alt','顔写真');
img3.setAttribute('width','200');
let d3 = document.querySelector('div#phototable'); 
d3.insertAdjacentElement('beforeend', img3);

// 練習4-4 箇条書き削除プログラム
let youso = document.querySelectorAll("ul#location > li");
for(let yousos of youso){
	yousos.remove();
} 

// 練習4-5 箇条書き追加プログラム
let ul1 = document.querySelector('ul#location');
for(let list of data){
	let li = document.createElement('li');
	li.textContent = (list.name +"...緯度:" + list.lat + ", 経度:" + list.lng);
	ul1.insertAdjacentElement('beforeend', li);
}
