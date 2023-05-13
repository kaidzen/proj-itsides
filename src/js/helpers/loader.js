export function addLoader() {
    document
        .querySelector("body")
        .insertAdjacentHTML(
            "afterbegin",
            '<div class="js-loader"><div></div><div></div><div></div><div></div></div>'
        );
}

export function removeLoader() {
    document.querySelector(".js-loader")?.remove();
}
