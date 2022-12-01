

const sliderValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slider.Value.textContent = value;
    sliderValue.style.left = (value/2) + "%";
});