document.addEventListener('DOMContentLoaded', function () {
    let splide = new Splide('.YOUR_SLIDER_CLASS', {
        perPage: 4,
        type: 'loop',
        pagination: false,
        speed: 860,
        arrows: false,
        lazyLoad: "nearby",
        drag: 'free',
        focus: 'center',
        autoScroll: {
            speed: -0.5,
            pauseOnHover: false,
        },
        mediaQuery: 'min',
        breakpoints: {
            1123: {
                perPage: 6,
                autoScroll: {
                    speed: 0.5,
                },
            },
        }
    });

    splide.on('ready', function () {
        document.querySelector('.YOUR_SLIDER_CLASS').classList.add('is-active');
    });

    splide.mount(window.splide.Extensions);
});

