console.log('This file should be linked to every file. If this is not the case, then it is considered a bug.');

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var pageTitle = getCookie('title');
if (!(pageTitle == null)) {
    document.title = pageTitle
}
var faviconLink = getCookie('favicon');
if (!(faviconLink == null)) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconLink;
}

//When the game server is down, enable this.

//window.location.href = "/minecraftgoldfish3/index.html";

function newad() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-331773503037412";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    document.body.innerHTML += '<ins class="adsbygoogle" style="display:block; text-align: center;" data-ad-client="ca-pub-3317735030374126" data-ad-slot="4276812776" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    var script = document.createElement("script");
    script.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
    document.body.appendChild(script);
}

function insertads() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-331773503037412";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
}

insertads();