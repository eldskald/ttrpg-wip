// This is to override the default behavior of anchors (<a></a> tags). We want
// them to not reload the page, just change search params and re-render. This
// function scans for anchors and does that. We're using the custom attributes
// `toarticle` and `tomap` to move around instead of `href` so we can just
// point to the name of the article/map and it will modify it without changing
// the other.
export function setAnchors() {
    const anchors = document.querySelectorAll("a");
    anchors.forEach((a) => {
        if (!a.hasAttribute("toarticle") && !a.hasAttribute("tomap")) return;

        const url = new URL(window.location.href);
        let onclick = "";
        if (a.hasAttribute("toarticle")) {
            const article = a.getAttribute("toarticle");
            url.searchParams.set("article", article);
            onclick += `toArticle('${article}'); `;
        }
        if (a.hasAttribute("tomap")) {
            const map = a.getAttribute("tomap");
            url.searchParams.set("map", map);
            onclick += `toMap('${map}'); `;
        }
        onclick += "return false;";
        a.setAttribute("href", url.toString());
        a.setAttribute("onclick", onclick);
    });
}
