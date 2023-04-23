var progress = document.getElementById('progress');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var circle = document.querySelectorAll('.circle');
var Password = document.getElementById('Password');
var Email = document.getElementById('message');
var currentActive = 1;
next === null || next === void 0 ? void 0 : next.addEventListener('click', function () {
    console.log(Email === null || Email === void 0 ? void 0 : Email.value);
    if (Email.value == "") {
    }
    else {
        currentActive++;
        if (currentActive > circle.length) {
            currentActive = circle.length;
            Password.disabled = false;
        }
        update();
        console.log(currentActive);
    }
});
prev === null || prev === void 0 ? void 0 : prev.addEventListener('click', function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive);
    update();
});
function update() {
    circle.forEach(function (circle, idx) {
        if (idx < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });
    var actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';
    if (currentActive === 1) {
        if (prev != null) {
            prev.disabled = true;
        }
    }
    else if (currentActive === circle.length) {
        if (next != null) {
            next.disabled = true;
        }
    }
    else {
        if (prev != null || next != null) {
            prev.disabled = false;
            next.disabled = false;
        }
    }
}
