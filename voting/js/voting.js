const variants = document.getElementsByClassName('variant');
[...variants].forEach((variant, index) => {
    variant.addEventListener('click', () => voting(index))
})
const counters = document.getElementsByClassName('counter')
function voting(variantNumber) {
    const counter = counters[variantNumber]
    counter.innerText = `${Number(counter.innerText) + 1}`
}
