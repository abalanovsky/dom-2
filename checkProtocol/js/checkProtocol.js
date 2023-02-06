const checkButton = document.getElementsByClassName('check-button')[0]
checkButton.addEventListener('click', checkProtocols)

function checkProtocols(){
    const buttons = [...document.getElementsByClassName('button')]
    buttons.forEach((button) => {
        if (!button.href.includes('https://')) {
            if (button.href.includes('http://')){
                button.href = button.href.replace('http://', 'https://')
            } else {
                button.href = 'https://' + button.href
            }
        }
        button.className = 'button green'
    })
    checkButton.textContent = 'SUCCESSFULLY CHECKED'
    checkButton.style.backgroundColor = 'grey'
}

const checkSearchButton = document.getElementById('goButton')
checkSearchButton.addEventListener('click', checkSearchProtocols)

const searchInput = document.getElementById('checkSearch')
const searchLabel = document.getElementById('searchLabel')

function checkSearchProtocols(){
    if (searchInput.value.includes('.')) {
        if (!searchInput.value.includes('https://')) {
            if (searchInput.value.includes('http://')) {
                searchInput.value = searchInput.value.replace('http://', 'https://')
            } else {
                searchInput.value = 'https://' + searchInput.value
            }
        }
        searchLabel.textContent = 'Redirect in 3 sec...'
        searchInput.style.borderBottomColor = 'green'
        setTimeout(() => { window.location.href = searchInput.value }, 3000)
    } else {
        searchLabel.textContent = 'Invalid address'
        searchInput.style.borderBottomColor = 'red'
    }

}
