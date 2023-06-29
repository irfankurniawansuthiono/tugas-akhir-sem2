const swiperEl = document.querySelector('swiper-container')

const params = {
    injectStyles: [`
    .swiper-pagination-bullet-active {
        background: rgb(244, 42, 96);
    }
    `],
}

Object.assign(swiperEl, params)

swiperEl.initialize();