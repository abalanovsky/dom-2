const list = document.querySelector('.list');

list.addEventListener('click', function (event) {
  const trigger = event.target.closest('span');
  if (trigger) {
    trigger.classList.toggle('hide');
  }
  if (event.target.innerHTML === 'Delete') {
    event.target.parentNode.remove();
    currentList--;
    list.innerHTML = '';
    for (let i = 1; i < currentList; i++) {
      list.appendChild(render(i));
    }
  }
});

const listAdd = document.querySelector('#list-add');
let currentList = 1

const render = (index) => {
  const li = document.createElement('li');
  li.innerHTML = '<span class="hide">' +
      `${listHeading[index]} list</span>` +
      '<button>Delete</button>' +
      '<ul>' +
      `<li>${index * 4 - 3} елемент списку</li>` +
      `<li>${index * 4 - 2} елемент списку</li>` +
      `<li>${index * 4 - 1} елемент списку</li>` +
      `<li>${index * 4} елемент списку</li>` +
      '</ul>'
  return li;
}
listAdd.addEventListener('click', function () {
  if (currentList <= 10) {
    list.appendChild(render(currentList));
    currentList++
  }
})

const listHeading = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth',
  6: 'Sixth',
  7: 'Seventh',
  8: 'Eight',
  9: 'Ninth',
  10: 'Tenth'
}
