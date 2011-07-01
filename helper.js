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


    // Attach events
    // document.addEventListener("DOMNodeInserted", DOMNodeInserted, false);
})();
// vim:set ts=4 sw=4 expandtab:
