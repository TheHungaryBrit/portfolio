/* I swear I've done this in Scratch before....*/

(() => {

    "use strict";


    const elements =
        document.querySelectorAll("[data-parallax]");


    if (!elements.length) {

        return;

    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (reducedMotion || !finePointer) {

        return;

    }


    const strength =
        window.THB_CONFIG
            ?.animation
            ?.parallaxStrength ?? 0.025;


    let mouseX = 0;
    let mouseY = 0;


    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
        "pointermove",
        (event) => {

            mouseX =
                (event.clientX /
                    window.innerWidth - 0.5)
                * 2;

            mouseY =
                (event.clientY /
                    window.innerHeight - 0.5)
                * 2;

        },
        { passive: true }
    );


    const animate =
        () => {

            currentX +=
                (mouseX - currentX) * 0.06;

            currentY +=
                (mouseY - currentY) * 0.06;


            elements.forEach(
                (element) => {

                    const x =
                        currentX * strength * 100;

                    const y =
                        currentY * strength * 100;


                    element.style.transform =
                        `translate3d(${x}px, ${y}px, 0)`;

                }
            );


            requestAnimationFrame(
                animate
            );

        };


    animate();

})();