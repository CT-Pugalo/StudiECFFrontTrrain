function createCard(imgSrc, imgDec, DOMdest) {
    if ('content' in document.createElement('template')) {
        var template = document.getElementById('card_template');

        var clone = template.content.cloneNode(true);
        var ul = clone.querySelector("ul");
        var li = ul.querySelectorAll("li");
        li[0].textContent = '<img src"' + imgSrc + '" alt="error while loading"></img>';
        li[1].textContent = '<p>' + imgDec + '</p>';

        document.getElementById(DOMdest).appendChild(clone);
    }
}