function registerSW() {
    navigator.serviceWorker.register('./loadsw.js', {
        scope: __uv$config.prefix
    })
}

function getLink(url) {
    if (!__uv$config) throw new Error("UV is not imported")
    try {
        new URL(url)
    } catch (e) {
        throw new Error("Invalid URL provided!")
    }
    return __uv$config.prefix + __uv$config.encodeUrl(url);
}