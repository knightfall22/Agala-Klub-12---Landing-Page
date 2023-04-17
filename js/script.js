const container = [...document.querySelectorAll('.members__group')];
const next = [...document.querySelectorAll('.next')];
const prev = [...document.querySelectorAll('.prev')];

const mobileNavs = [...document.querySelectorAll('.mobile__navigation__link')];
const nav_toggle = document.getElementById('navi-toogle');
console.log(next);

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