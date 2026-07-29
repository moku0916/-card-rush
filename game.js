const titleScreen = document.getElementById("titleScreen");
const raceScreen = document.getElementById("raceScreen");

const startButton = document.getElementById("startButton");

const courseName = document.getElementById("courseName");
const horseArea = document.getElementById("horseArea");
const logArea = document.getElementById("logArea");

const courses = [
"日本ダービー",
"有馬記念",
"皐月賞",
"天皇賞（秋）",
"ジャパンカップ"
];

const horses = [

"ディープインパクト",
"オルフェーヴル",
"イクイノックス",
"アーモンドアイ",
"キタサンブラック",
"ドウデュース",
"レガレイラ",
"ナイスネイチャ",
"ハルウララ",
"シンボリルドルフ",
"サイレンススズカ",
"エルコンドルパサー"

];

startButton.onclick = () => {

titleScreen.classList.add("hidden");
raceScreen.classList.remove("hidden");

startRace();

};

function startRace(){

courseName.textContent =
courses[Math.floor(Math.random()*courses.length)];

const list=[...horses]
.sort(()=>Math.random()-0.5)
.slice(0,8);

horseArea.innerHTML="";

list.forEach((horse,index)=>{

horseArea.innerHTML+=`

<div class="horse">

${index+1}. ${horse}

</div>

`;

});

logArea.innerHTML=`

🏇 出走馬決定！

<br><br>

レース開始ボタン実装予定

`;

}