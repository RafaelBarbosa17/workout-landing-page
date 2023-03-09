
const navItems = document.querySelectorAll('.nav-item');
const navBox = document.querySelector('.nav-box');

const selected = document.createElement('div');
selected.classList.add('selected-item');

navBox.appendChild(selected)

console.log(navItems)

navItems[0].classList.add('active')
const actived = document.querySelector('.active')
selected.style.width = actived.offsetWidth + 'px';
selected.style.top = `${actived.offsetHeight + 3}px`;
selected.style.left = `${actived.offsetLeft}px`;

function toggleItemActive(e) {
    navItems.forEach(item => {
        item.classList.remove('active')
    })
    e.target.classList.add('active');
    selected.style.width = e.target.offsetWidth + 'px';
    selected.style.top = `${e.target.offsetHeight+ 3}px`;
    selected.style.left = `${e.target.offsetLeft}px`;
}

navItems.forEach(item => {
    item.addEventListener('click', e => {
        toggleItemActive(e)
    })
})
