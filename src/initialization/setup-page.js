export function setupPage() {
    const title = document.createElement("title");
    title.innerHTML = window.imports.settings.title;
    document.head.appendChild(title);

    // Root setup
    document.body.className = "overflow-hidden";
    const contentWrapper = document.createElement("main");
    contentWrapper.className =
        "absolute top-12 left-0 bottom-0 right-0 overflow-scroll";
    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";
    mainContainer.className = "min-h-screen relative";
    contentWrapper.appendChild(mainContainer);
    document.body.appendChild(contentWrapper);

    // Top bar
    const topBar = document.createElement("header");
    topBar.className = `
        absolute top-0 left-0 right-0 h-12 bg-bg-light dark:bg-bg-dark
        shadow-black shadow-lg flex items-center justify-between px-4
    `;
    document.body.appendChild(topBar);
    const placeholder = document.createElement("div");
    topBar.appendChild(placeholder);

    // Theme switcher link
    const themeSwitcher = document.createElement("a");
    themeSwitcher.id = "theme-switcher";
    themeSwitcher.className = "cursor-pointer";
    topBar.appendChild(themeSwitcher);

    // Map container
    const mapContainer = document.createElement("div");
    mapContainer.id = "map-container";
    mapContainer.className = "h-full w-full";
    mainContainer.appendChild(mapContainer);

    // Article container
    const articleContainerOuter = document.createElement("div");
    articleContainerOuter.id = "article-container-outer";
    articleContainerOuter.className = `
        fixed top-12 bottom-0 w-screen flex flex-col lg:max-w-screen-lg
        transition-all duration-200 data-[hidden=false]:-translate-x-full
        -right-full lg:right-[-1024px]
    `;
    mainContainer.appendChild(articleContainerOuter);
    const articleContainerMid = document.createElement("div");
    articleContainerMid.className =
        "m-4 grow relative shadow-black shadow-lg bg-bg-light dark:bg-bg-dark";
    articleContainerOuter.appendChild(articleContainerMid);
    const articleContainerInner = document.createElement("article");
    articleContainerInner.id = "article-container-inner";
    articleContainerInner.className =
        "absolute top-8 bottom-0 left-0 right-0 px-4 pb-4 overflow-scroll";
    articleContainerMid.appendChild(articleContainerInner);

    // Container for the close article and theme switcher
    const articleControlPanel = document.createElement("div");
    articleControlPanel.className =
        "absolute top-0 left-4 right-4 h-8 flex justify-between items-center";
    articleContainerMid.appendChild(articleControlPanel);

    // Close article link
    const closeArticleBtn = document.createElement("a");
    closeArticleBtn.setAttribute("toarticle", "");
    closeArticleBtn.innerHTML = window.imports.settings.labels.closeArticle;
    articleControlPanel.appendChild(closeArticleBtn);
}