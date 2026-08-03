/* Defo not debugged with AI */

(() => {

    "use strict";


    const elements =
        document.querySelectorAll("[data-reveal]");


    if (!elements.length) {
        return;
    }

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "is-visible"
                );

            }
        );

        return;

    }

    const configuredThreshold =
        Number(
            window.THB_CONFIG
                ?.animation
                ?.revealThreshold
        );


    /*
     * IntersectionObserver only accepts
     * values between 0 and 1.
     *
     * Rather than allowing bad configuration
     * to crash the entire animation system,
     * we validate and clamp it here.
     */

    const threshold =
        Number.isFinite(configuredThreshold)
            ? Math.min(
                1,
                Math.max(
                    0,
                    configuredThreshold
                )
            )
            : 0.12;

    let observer;


    try {

        observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (!entry.isIntersecting) {
                                return;
                            }


                            entry.target.classList.add(
                                "is-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold
                }
            );


    } catch (error) {

        /*
         * Fail gracefully.
         *
         * If the browser refuses the observer,
         * content should still be visible.
         */

        console.warn(
            "[THB] Scroll reveal unavailable. " +
            "Showing content normally.",
            error
        );


        elements.forEach(
            (element) => {

                element.classList.add(
                    "is-visible"
                );

            }
        );


        return;

    }
    
    elements.forEach(
        (element) => {

            observer.observe(element);

        }
    );

})();