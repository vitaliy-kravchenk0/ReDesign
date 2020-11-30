window.addEventListener("DOMContentLoaded", () => {
    // Slider

    function slider(slidesParentUrl, slidesUrl, slideUrl, arrowLeftUrl, arrowRightUrl, bulletUrl) {
        const slidesParent = document.querySelector(slidesParentUrl),
              slides = document.querySelector(slidesUrl),
              slide = document.querySelectorAll(slideUrl),
              arrowLeft = document.querySelector(arrowLeftUrl),
              arrowRight = document.querySelector(arrowRightUrl),
              bullet = document.querySelectorAll(bulletUrl),
              width = window.getComputedStyle(slidesParent).width;

        let slideCounter = 1;
        let offset = 0;
        let touchCounter = 0;

        slides.style.transition = "0.5s ease-out";
        bullet.forEach(item => {
            item.style.transition = "0.5s ease-out";
        });

        function bulletActive(item) {
            bullet.forEach(item => {
                item.style.opacity = "0.5";
            });

            bullet[item].style.opacity = "1";
        }

        bulletActive(slideCounter - 1);

        arrowLeft.addEventListener("click", () => {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slide.length - 1);
                slideCounter = slide.length;
            } else {
                offset -= +width.slice(0, width.length - 2);
                slideCounter--;
            }

            bulletActive(slideCounter - 1);

            slides.style.transform = `translateX(-${offset}px)`;
        });

        arrowRight.addEventListener("click", () => {
            if (offset == +width.slice(0, width.length - 2) * (slide.length - 1)) {
                offset = 0;
                slideCounter = 1;
            } else {
                offset += +width.slice(0, width.length - 2);
                slideCounter++;
            }

            bulletActive(slideCounter - 1);

            slides.style.transform = `translateX(-${offset}px)`;
        });

        bullet.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                bulletActive(index);
                slideCounter = index + 1;
                offset = +width.slice(0, width.length - 2) * (index);
                slides.style.transform = `translateX(-${offset}px)`;
            });
        });

        slidesParent.addEventListener("touchmove", (e) => {
            touchCounter++;
        });

        slidesParent.addEventListener("touchend", () => {
            if (touchCounter >= 30) {
                console.log("ok");
            } else {
                touchCounter = 0;
            }
        });
    }

    slider(".slider-content_one", ".slider-general_one", ".slider-content__img_one", ".arrow-left_one", ".arrow-right_one", ".bullets__item_one");

    slider(".slider-content_two", ".slider-general_two", ".slider-content__img_two", ".arrow-left_two", ".arrow-right_two", ".bullets__item_two");
});