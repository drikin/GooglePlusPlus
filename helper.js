(function() {
    function DOMNodeInserted(event) {
        if ((event.target instanceof Text) === false) {
            updateBadge();
        }
    }

    function updateBadge() {
        var target = document.getElementById('gbi1');
        if (target) {
            var tc = target.textContent;
            if (tc > 0) {
                chrome.extension.sendRequest({type:"updateBadge", text:tc});
            }
        } else {
            chrome.extension.sendRequest({type:"updateBadge", text:''});
        }
    }

    var scrollTimeoutId = null;
    function goTop() {
        if (document.body.scrollTop != 0) {
            window.scrollBy(0, -150);
            scrollTimeoutId = setTimeout(goTop, 16);
        } else {
            if (scrollTimeoutId) {
                clearTimeout(scrollTimeoutId);
                scrollTimeoutId = null;
            }
        }
    }

    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if(request["action"] === "scrollToTop") {
            //window.scrollTo(0, 0);
            goTop();
        }
        sendResponse();
    });


    // Attach events
    // document.addEventListener("DOMNodeInserted", DOMNodeInserted, false);
})();
// vim:set ts=4 sw=4 expandtab:
