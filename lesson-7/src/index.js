document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed.");
});

document.body.style.background = "goldenrod";

let chooseTask = +prompt("enter number of task, you want to check (1-3).");

// Task #1 //

var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STRAIRWAY TO HEAAVEN",
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK",
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
    },
];

function showPlayList() {
    document.getElementById(`1-st-task`).style.display = "block";
    let ol = document.getElementById(`playlist`);

    playList.forEach(element => {
        let li = document.createElement(`li`);
        li.innerHTML = `Author: ${element.author}<br\/>Song: ${element.song}<hr>`;
        ol.append(li);
    });
    
}

// Task #1 //
// Task #2 //

function showModalWindow() {
    document.getElementById(`2-nd-task`).style.display = "block";

    let opnBtn = document.getElementById(`openBtn`),
        clsBtn = document.getElementById(`closeBtn`),
        modal = document.getElementById(`modal-window`);

    opnBtn.onclick = function() {
        modal.style.display = "block";
    }

    clsBtn.onclick = function() {
        modal.style.display = "none";
    }
}


// Task #2 //
// Task #3 //

function showTrafficLights() {
    document.getElementById(`3-rd-task`).style.display = "block";

    let i = 0;
        swtchBtn = document.getElementById(`switch-btn`),
        lgths = document.querySelectorAll(`.lights`),
        colorArray = ["red", "yellow", "green"];

    swtchBtn.onclick = function(){
        i++;
        if (lgths[i-1]) {
            lgths[i-1].style.backgroundColor = "";
        }
        if (i == colorArray.length) {
            i = 0;
        }
        lgths[i].style.backgroundColor = colorArray[i];
    }
        

}

// Task #3 //

switch (chooseTask) {
    case 1:
        showPlayList();

        break;
    case 2:
        showModalWindow();

        break;
    case 3:
        showTrafficLights();

        break;
    default:
        break;
}