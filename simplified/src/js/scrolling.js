document.addEventListener('DOMContentLoaded', () => {
  sr = ScrollReveal({ reset: false })

  sr.reveal('.js--fadeInLeft')

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800
  })

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800
  })

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800
  })
})
