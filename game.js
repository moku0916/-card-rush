// =========================
// CARD RUSH
// Ver 0.01
// =========================

const titleScreen = document.getElementById("titleScreen");
const raceScreen = document.getElementById("raceScreen");
const cardBookScreen = document.getElementById("cardBookScreen");
const settingScreen = document.getElementById("settingScreen");

const startButton = document.getElementById("startButton");
const cardBookButton = document.getElementById("cardBookButton");
const settingButton = document.getElementById("settingButton");

const backButtons = document.querySelectorAll(".backButton");

const courseName = document.getElementById("courseName");
const horseArea = document.getElementById("horseArea");
const logArea = document.getElementById("logArea");
const nextButton = document.getElementById("nextButton");

function hideAllScreens(){

    titleScreen.classList.add("hidden");
    raceScreen.classList.add("hidden");
    cardBookScreen.classList.add("hidden");
    settingScreen.classList.add("hidden");

}

startButton.onclick = function(){

    hideAllScreens();

    raceScreen.classList.remove("hidden");

    courseName.innerHTML = "🏇 コース抽選待ち";

    horseArea.innerHTML =
    "出走馬を準備しています...";

    logArea.innerHTML =
    "レース開始ボタンが押されました。";

}

cardBookButton.onclick = function(){

    hideAllScreens();

    cardBookScreen.classList.remove("hidden");

}

settingButton.onclick = function(){

    hideAllScreens();

    settingScreen.classList.remove("hidden");

}

backButtons.forEach(function(button){

    button.onclick = function(){

        hideAllScreens();

        titleScreen.classList.remove("hidden");

    }

});

nextButton.onclick = function(){

    logArea.innerHTML +=
    "\n\n▶ 次のフェーズへ（開発中）";

}