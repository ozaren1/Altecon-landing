

const container1 = document.getElementById("myCarousel1");
const container2 = document.getElementById("myCarousel2");
const container3 = document.getElementById("myCarousel3");
const container4 = document.getElementById("myCarousel4");
const options = { infinite: false };

new Carousel(container1, options);
new Carousel(container2, options);
new Carousel(container3, options);
new Carousel(container4, options);
const burger = document.querySelector('.header__burger');
const header__nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    header__nav.classList.toggle('active');
});

const animItems = document.querySelectorAll("._anim-items");

function AnimScrol() {
    if (animItems.length > 0) {
        window.addEventListener("scroll", animOnScrol);
        function animOnScrol() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 9;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if (
                    scrollY > animItemOffset - animItemPoint &&
                    scrollY < animItemOffset + animItemHeight
                ) {
                    animItem.classList.add("_anim");
                } else {
                    if (!animItem.classList.contains("_anim-hiden")) {
                        animItem.classList.remove("_anim");
                    }
                }
            }
        }
        function offset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
        setTimeout(() => {
            animOnScrol();
        }, 300);
    }
}
AnimScrol();
