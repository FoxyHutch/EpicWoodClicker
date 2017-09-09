
//Upgrades Progressbar
function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            var numNahrung = 1000;
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}
