const allRanges = document.querySelectorAll(".slider-style");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".slider-input");
    const pin = wrap.querySelector(".pin");
    range.addEventListener("input", () => {
        setPin(range, pin);
    });
    setPin(range, pin);
});

function setPin(range, pin) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 1000;
    const newVal = Number(((val - min) * 1000) / (max - min));
    pin.innerHTML = val;
    pin.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}