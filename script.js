//RANDOMISE THE VERSES
const api_url = "/verses.json"
async function getVerses() {
    const response = await fetch(api_url);
    const data = await response.json();

    const values = Object.values(data);
    const randomValue = values[parseInt(Math.random() * values.length)];
    console.log(randomValue);

    document.getElementById("verse").innerHTML = randomValue;
}
getVerses();


function changeVerse() {
    var icon = document.querySelector(".fa-refresh");
    var qoute = document.querySelector(".quote");
    icon.classList.remove("fa-refresh");
    icon.classList.add("fa-spin", "fa-circle-o-notch");
    qoute.classList.add("fade");
    getVerses();
    setTimeout(function() {
        qoute.classList.remove("fade");
        icon.classList.add("fa-refresh");
        icon.classList.remove("fa-spin", "fa-circle-o-notch");
    }, 1000);
}
var randomBtn = document.querySelector(".randombutton");
randomBtn.addEventListener("click", changeVerse, false);


//COPY TO CLIPBOARD

function copyToClipboard() {
    var versetext = document.createRange();
    versetext.selectNode(document.getElementById("verse"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(versetext);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    showSnackBar();
}
var copy = document.querySelector(".copy");
copy.addEventListener("click", copyToClipboard, false);


//GET THE CURRENT DATE

const dayFormat = {
    weekday: "long",
};

const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
};
var date = new Date().toLocaleDateString(undefined, dateFormat);
var day = new Date().toLocaleDateString(undefined, dayFormat);
document.querySelector(".date").textContent = date;
document.querySelector(".day").textContent = day;

// MAIN LOADING ANIMATION

window.addEventListener("load", function() {
    document.getElementById("loading").remove();
});


//SNACK BAR COPIED

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}


//MAIN CONTENT ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddentElements = document.querySelectorAll(".hidden");
hiddentElements.forEach((el) => observer.observe(el));