const timeLine = gsap.timeline({ defaults: { duration: 1 } });

timeLine
    .from('header', { y: '-20vh', ease: 'bounce' })
    .from('header ul li', { opacity: 0, duration: .4, delay: .4, stagger: .2 })
    .from('.main-left', { scaleY: '0', ease: 'sine.out' })
    .from('.main-right', { scaleY: '0', ease: 'sine.out' }, '<.2')
    .fromTo('footer', { y: '200px' }, { y: 0, ease: 'elastic' })
    .fromTo('main button', { opacity: 0, scale: 0, rotation: 400 }, { opacity: 1, scale: 1, rotation: 0 })

const restart = document.querySelector('main button:nth-child(2)');
restart.addEventListener('click', () => {
    timeLine.restart();
});

const reverse = document.querySelector('main button:nth-child(3)');
reverse.addEventListener('click', () => {
    timeLine.timeScale(2);
    timeLine.reverse();
})