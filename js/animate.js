const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const box = document.querySelectorAll('.box');
box.forEach((el) => observer.observe(el))

const gallery__item = document.querySelectorAll('.gallery__item');
gallery__item.forEach((el) => observer.observe(el))