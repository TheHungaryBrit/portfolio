/* TheHungaryBrit Main entry point */

(() => {

    "use strict";

    const config = window.THB_CONFIG;


    if (!config) {

        throw new Error(
            "THB_CONFIG failed to load."
        );

    }

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            String(config.site.year);

    }

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    document.documentElement.dataset.reducedMotion =
        prefersReducedMotion
            ? "true"
            : "false";


})();