//あなたが好きな食べ物を代入した変数名foodとあなたが行きたい県を代入した定数名areaを用意し、
//それぞれをalert使用してブラウザにalertを表示させましょう。
//let (変数宣言) food (変数名) = (変数名の内容);
// let food = "ジンギスカン";
// //areat ブラウザに表示する
// alert(food);
// let area = "北海道";
// alert(area);

// //四則演算をそれぞれ使用して合計値15になるように変数を用意し、
// //それぞれalertを使用して表示させましょう。
// //四則演算をするための変数を指定し、変数の内容の中で計算をする
// let add = 5 + 3;
// //答えは8
// alert(add);
// add += 10;
// //addの中身は8なので足されて18
// alert(add);
// add -= 3;
// //18に書き換えられた後から-3なので15
// alert(add);
// add *= 2;
// //*は掛け算 15×2で30
// alert(add);
// add /= 2;
// //スラッシュ/は割り算 30÷2で15
// alert(add);
// add--;
// //--は-1するので15-1で14
// alert(add);
// add++;
// //++は+1するので14+1で15
// alert(add);

// //HTMLに<div id="fishName">カクレクマノミ</div>と記載した上で、
// //idを取得し変数に代入してみましょう。
// //.getElementByIdでHTMLにあるIDから情報を取得している
// let fishName = document.getElementById("fishName");
// //イコール＝はいらないコンソールでの結果は<div id="fishName">カクレクマノミ</div>
// console.log(fishName);

// //textContentを使用して<div id="fishName">カクレクマノミ</div>と記載してる情報から
// //テキストを取得し、alertで表示させましょう。
// //変数.textContentで取得した情報の"テキスト"を取得する
// alert(fishName.textContent);

// //テキストボックスを作成後、valueの値に「ツノダシ」と記載し、
// //テキストボックスのvalueの値を取得後alertで表示させましょう。
// //ID名tunodasiのテキストボックスの情報を取得
// let tunodasi = document.getElementById("tunodasi");
// //ID名tunodasiのテキストボックスの変数名tunodasiの.valueと指定するとvalueの値が取得できる
// alert(tunodasi.value);

//pタグにテキスト用意し、テキストの色を白に背景を緑にstyleを適用しましょう。
//styleを指定したい情報を取得する
let text = document.getElementById("text");
//styleの指定には"ダブルコーテーション”をつけてその中に指定する
text.style.color = "white";
text.style.backgroundColor = "green";
text.style.width = "120px";

// テキストボックスとボタンを用意し、ボタンがクリックされたらテキストボックスのvalueを取得し、
// pタグのテキスト部分に反映させましょう。
//ID名getboxのtextboxのvalueの値の情報
let getBox = document.getElementById("getbox").value;
//value値をコンソールで見る
console.log(getBox);
//ID名clickbuttonのinputbuttonの値の情報
let clickBtn = document.getElementById("clickbutton");
//ID名getvalueのpタグの値の情報
let inValue = document.getElementById("getvalue");
//onclickはイベント
//clickBtnをクリックしたら関数名onclickBtn(){ 実行内容 }
clickBtn.onclick = function onclickBtn() {
  //textContentは変数名の中の値のテキストの取得、書き換えができる
  //書き換えたい値の変数名.textContent = 書き換えたい値を持った変数名
  inValue.textContent = getBox;
  //関数名onclickBtnの動作確認console.log
  console.log("test");
}

//イベントの活用で作成した内容のvalue値をconsole.logで参照し、
//開発者ツールで確認してみましょう。
//変数clickBtnをクリックしていイベント発火させると関数を実行する
clickBtn.addEventListener("click", function () {
  console.log("コンソールから見れる")
})

//pタグに「ハタタテダイ」と入力し、ボタンを用意します。
//cssでクラス名backColorにテキストの色を赤色にするよう準備していただき、
//クリックした時にpタグにbackColorというクラスを追加してください。
let redBtn = document.getElementById("redbtn");
let addClass = document.getElementById("addclass");
//関数を用意して関数名addStyleをつける{波かっこ内で処理する内容}
function addStyle() {
  //ID名addstyleの情報を取得
  //変数名addClassにclassを追加する.setAttributeをつけて("class", backColorをclass名にいれる)
  addClass.setAttribute("class", "backColor");
}
//redBtnをクリックしたらイベント発火で関数名addStyleの処理が入る
redBtn.addEventListener("click", addStyle);

//上記の内容と同じように属性を変更する方法としてclassListというのがあります。
//調べて同じように再現してみて下さい。
function addStyle2() {
  //classListでclassをadd,remove,contains,toggleできる
  addClass.classList.add("backColor");
  //containsはclassがついているか確認ができる
  //if文は条件分岐
  //もし変数addClassにbackColorというclass名がついていたら…
  if (addClass.classList.contains("backColor")) {
    console.log("backColorが含まれています");
  } else {
    console.log("backColorは含まれていません");
  }
}
//関数addStyle2を実行する記述{}内には書かない
redBtn.addEventListener("click", addStyle2);

//テキストボックスとボタンを用意し、
//valueの文字数によって以下の条件を用意して下さい。
//10文字以上ならテキストで「文字数が多すぎます」
//9文字以下6文字以上ならテキストで「適正な文字数です」
//5文字以下ならテキストで「文字が少なすぎます」
//valueの文字数を判別するにはlengthの使い方を調べてみましょう。
//グローバルスコープ
let ifBtn = document.getElementById("ifbutton");
//ifBtnを押したらイベント発火しif文の処理が行われるようにする
//addEventListener("イベント発火するアクション名", 関数名)
// ifBtn.addEventListener("click", textLength)
//if文の処理の塊をfunctionでまとめてtextLengthと名前を付ける
function textLength() {
  //ローカルスコープ
  let ifBox = document.getElementById("ifbox");
  //textboxのvalue情報
  let getText = ifBox.value;
  //lengthは数を数えるtextbox内の文字数を数える変数count
  let count = getText.length;
  //10文字以上>=の場合
  if (count >= 10) {
    alert("文字数が多ぎます");
    //二個目の条件分岐6文字以下
  } else if(count >= 6){
    alert("適正な文字数です");
    //上二つの条件分岐に合わなかった場合
  } else {
    alert("文字数が少なすぎます");
  }
};

//似たような使い方にswitch文というものがある。これを調べてみましょう。
//調べたらswitch文を好きな使用方法でいいので体験してみましょう。
//addEventListener("イベント発火するアクション名", 関数名)
ifBtn.addEventListener("click", switchFormula);
function switchFormula() {
  let ifBox2 = document.getElementById("ifbox");
  //textboxのvalue情報
  let getText2 = ifBox2.value;
  //lengthは数を数えるtextbox内の文字数を数える変数count
  let count2 = getText2.length;
  console.log(count2)
  //switchの（）内には変数は入れないtrue,false,数字などを入れる
  //比較が式今回の場合は以上以下を比較する条件式（>=）の場合は変数を入れたら動かない
  switch (true) {
    case count2 >= 10:
      console.log("文字が多すぎます")
      break;
    case count2 >= 6:
      console.log("適正な文字数です")
      break;
    default:
      console.log("文字数が少なすぎます")
      break;
  }
}

//テキストボックスとボタンを用意し、三項演算子を利用して
//テキストボックスの文字列がカクレクマノミだったら1200円、
//ナンヨウハギだったら6900円とテキストで表示して下さい。
//textboxの値の情報の変数fishBox
let fishBox = document.getElementById("fishbox");
//ボタンの情報の変数sankouBtn
let sankouBtn = document.getElementById("sankou");
//sankouBtnをクリックしたらテキストボックスのvalueと魚の名前を比較する？
sankouBtn.addEventListener("clicl", function () {
  
})
