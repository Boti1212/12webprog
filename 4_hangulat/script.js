const moodslider = document.querySelector('#moodSlider');
console.log(moodslider);



moodslider.addEventListener('input', () => {
    const slidervalue = parseInt(moodslider.value);
    const moodimage = document.querySelector('#moodImage')

    moodimage.src = `./img/${slidervalue}.png`
})