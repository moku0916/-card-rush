/*
=========================================
 CARD RUSH
 Horse Database
=========================================
*/

const HORSES = [

    // ===== Legend =====

    {
        id:1,
        no:"001",
        name:"ディープインパクト",
        rarity:"LEGEND",
        stars:5,
        style:"差し",
        favoriteGate:"内枠",
        heavy:"○",
        abilities:["英雄の末脚"]
    },

    {
        id:2,
        no:"002",
        name:"オルフェーヴル",
        rarity:"LEGEND",
        stars:5,
        style:"差し",
        favoriteGate:"中枠",
        heavy:"◎",
        abilities:["金色の暴君"]
    },

    {
        id:3,
        no:"003",
        name:"イクイノックス",
        rarity:"LEGEND",
        stars:5,
        style:"先行",
        favoriteGate:"中枠",
        heavy:"○",
        abilities:["世界最強"]
    },

    {
        id:4,
        no:"004",
        name:"アーモンドアイ",
        rarity:"LEGEND",
        stars:5,
        style:"先行",
        favoriteGate:"内枠",
        heavy:"▲",
        abilities:["九冠の輝き"]
    }

];


/*
=========================================
 Utility
=========================================
*/

function getHorseByNo(no){

    return HORSES.find(h=>h.no===no);

}

function getHorseById(id){

    return HORSES.find(h=>h.id===id);

}

function getRandomHorse(){

    return HORSES[
        Math.floor(
            Math.random()*HORSES.length
        )
    ];

}