const horses = [
    { name: "ディープインパクト", x: 0 },
    { name: "オルフェーヴル", x: 0 },
    { name: "イクイノックス", x: 0 },
    { name: "アーモンドアイ", x: 0 },
    { name: "ドウデュース", x: 0 },
    { name: "レガレイラ", x: 0 },
    { name: "トウカイテイオー", x: 0 },
    { name: "エルコンドルパサー", x: 0 }
];

let phase = 0;

function startRace(){

    const area=document.getElementById("horseArea");
    const log=document.getElementById("logArea");

    area.innerHTML="";
    log.innerHTML="";

    horses.forEach(h=>{

        h.x=0;

        const div=document.createElement("div");

        div.className="horse";

        div.id=h.name;

        div.innerHTML=`
        <span>${h.name}</span>
        <div class="track">
            <div class="runner"></div>
        </div>
        `;

        area.appendChild(div);

    });

}

function nextPhase(){

    phase++;

    horses.forEach(h=>{

        h.x+=Math.random()*70+30;

        document.querySelector("#"+CSS.escape(h.name)+" .runner")
            .style.left=h.x+"px";

    });

    document.getElementById("logArea").innerHTML=
        "フェーズ "+phase;

    if(phase==6){

        horses.sort((a,b)=>b.x-a.x);

        document.getElementById("logArea").innerHTML=
        "🏆優勝："+horses[0].name;

        phase=0;

    }

}