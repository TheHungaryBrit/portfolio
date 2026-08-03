/* Yes, I copied this, but from another project of mine. (An unreleased one, don't ask for it...)*/

(() => {

    "use strict";


    const header =
        document.querySelector("[data-header]");

    const toggle =
        document.querySelector("[data-menu-toggle]");

    const mobileNavigation =
        document.querySelector("[data-mobile-navigation]");

    const mobileLinks =
        document.querySelectorAll("[data-mobile-link]");


    if (!header) {

        return;

    }

    const updateHeader =
        () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 30
            );

        };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    if (!toggle || !mobileNavigation) {

        return;

    }


    const setMenuState =
        (open) => {

            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );

            toggle.setAttribute(
                "aria-label",
                open
                    ? "Close navigation"
                    : "Open navigation"
            );

            mobileNavigation.classList.toggle(
                "is-open",
                open
            );

            mobileNavigation.setAttribute(
                "aria-hidden",
                String(!open)
            );

            document.body.classList.toggle(
                "menu-open",
                open
            );

        };


    toggle.addEventListener(
        "click",
        () => {

            const isOpen =
                toggle.getAttribute(
                    "aria-expanded"
                ) === "true";

            setMenuState(!isOpen);

        }
    );


    mobileLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => setMenuState(false)
            );

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                setMenuState(false);

            }

        }
    );

})();