var drag = function drag() {
    var boxhd = document.getElementsByClassName('box-hd')[0],
        box = document.getElementsByClassName('box')[0];
    var mv = function mv () {
        // body...
    }
    var md = function md(e) {
        alert("Hi");
        document.title = e.target.clientX;
        box.addEventListener('mousemove', mv, false);
    };

    boxhd.addEventListener('mousedown', md, false);
};

window.onLoad = drag();