// LOADING SCREEN
var loadingScreen = document.querySelector(".loading-screen");

window.addEventListener('load', function() {
    loadingScreen.style.opacity = '0';
})
loadingScreen.addEventListener('transitionend', function() {
    loadingScreen.style.display = 'none';
})
// 


// ROW-TYPE-BANNER#LOCKINGSECTION
var w;
var topThreshold;

const content = document.querySelector('.content');
const lockingSection = document.querySelector('#lockingSection');

if (lockingSection !== null) {
    w = window.innerWidth;
    lockedSection(w);

    window.onresize = () => {
        w = window.innerWidth;
        lockedSection(w);
    }
}

function lockedSection(w) {
    topThreshold = document.querySelector("#lockOffset").offsetHeight;

    window.addEventListener("scroll", () => {
        if (w > 650) {
            if (window.scrollY > topThreshold) {
                lockingSection.classList.add("locked");
                content.style.paddingTop = "150px";  // magic number 
            } else {
                lockingSection.classList.remove("locked");
                content.style.paddingTop = "95px";  // static value which needs to match $nav-height in css
            }
        } else {
            lockingSection.classList.remove("locked");
        }
    })
}
//