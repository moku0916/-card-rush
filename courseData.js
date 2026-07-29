/*
=========================================
 CARD RUSH
 Course Database
=========================================
*/

const COURSES = [

    {
        id:1,

        no:"001",

        name:"フェブラリーS",

        distance:1600,

        turn:"左",

        laps:1,

        straight:501,

        corner:4,

        surface:"ダート",

        weather:true,

        icon:["💪","↩️","📏","🎯"],

        pace:"MIDDLE"

    },

    {
        id:2,

        no:"002",

        name:"高松宮記念",

        distance:1200,

        turn:"左",

        laps:1,

        straight:412,

        corner:4,

        surface:"芝",

        weather:true,

        icon:["🏃","📏","↩️","🌧"],

        pace:"HIGH"

    },

    {
        id:3,

        no:"003",

        name:"大阪杯",

        distance:2000,

        turn:"右",

        laps:1,

        straight:473,

        corner:4,

        surface:"芝",

        weather:true,

        icon:["❤️","🏔","↪️","🎯"],

        pace:"MIDDLE"

    }

];


/*
=========================================
 Utility
=========================================
*/

function getCourseByNo(no){

    return COURSES.find(c=>c.no===no);

}

function getCourseById(id){

    return COURSES.find(c=>c.id===id);

}

function getRandomCourse(){

    return COURSES[
        Math.floor(
            Math.random()*COURSES.length
        )
    ];

}