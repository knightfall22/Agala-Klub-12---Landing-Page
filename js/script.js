import { profiles } from "./profile";
const container = [...document.querySelectorAll('.members__group')];
const next = [...document.querySelectorAll('.next')];
const prev = [...document.querySelectorAll('.prev')];

const mobileNavs = [...document.querySelectorAll('.mobile__navigation__link')];
const nav_toggle = document.getElementById('navi-toogle');

const boxes = document.querySelectorAll('.members__box')
const modal = document.getElementById('modal')
const outputDiv = document.getElementById('modal__paragraph')
const modal__image = document.getElementById('modal__image')

modal.addEventListener('click', () => {
    outputDiv.innerHTML = ``
    modal.classList.remove('visible')
})

boxes.forEach((item, i) => {

    item.addEventListener('click', () => {
        if (profiles[i]) {
            modal.classList.add('visible')
        
            const img = {...item.getElementsByTagName('img')}
            const imgSrc = img[0].src
    
            modal__image.src = imgSrc
            let textIndex = 0;
            outputDiv.innerHTML = ``
            const intervalId =  setInterval(function () {
                outputDiv.innerHTML += profiles[i][textIndex]
                textIndex++;
                if (textIndex === profiles[i].length  || !modal.classList.contains('visible')) {
                    clearInterval(intervalId)
                }
            }, 40)
        }
        
    })
})






mobileNavs.forEach((item, i) => {
    item.addEventListener('click', () => {
        console.log('test');
        nav_toggle.checked = false;
    })
})

container.forEach((item,i) => { 
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log('test', containerWidth);

    next[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
     })

    prev[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log('not working');
     })
})


// const next = document.querySelector('.next');
// console.log(document.querySelector('.members__group').scrollLeft += 100);

// next.addEventListener('click', () => { 
//     document.querySelector('.members__group').scrollLeft += 100;
// });