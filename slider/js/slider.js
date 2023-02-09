const imageData = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg']

const imageTag = document.getElementsByClassName('image')[0]
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

prevButton.addEventListener('click', () => loadSlider('prev'))
nextButton.addEventListener('click', () => loadSlider('next'))

let currentImg = 0
prevButton.style.visibility = 'hidden'
imageTag.src = imageData[currentImg]
function loadSlider(step) {
    if (step === 'next') {
        currentImg++
        imageTag.src = imageData[currentImg]
    } else {
        currentImg--
        imageTag.src = imageData[currentImg]
    }

    if (currentImg > 0) {
        prevButton.style.visibility = 'visible'
    } else { prevButton.style.visibility = 'hidden' }

    if (currentImg + 1 === imageData.length) {
        nextButton.style.visibility = 'hidden'
    } else { nextButton.style.visibility = 'visible' }
}
