/* TheHungaryBrit Main entry point */

(() => {

    "use strict";

    const config = window.THB_CONFIG;


    if (!config) {

        console.error(
            "THB_CONFIG failed to load."
        );
        
        return;

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

    if (config.debug) {

        console.info(`THB ${config.site.name} v${config.site.version}`);
        
    }

})();