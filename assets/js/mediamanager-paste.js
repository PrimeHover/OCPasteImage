(function() {

    /**
     * Upload an image to the dropzone instance
     *
     * @param item
     * @param dropZone
     */
    uploadImage = function(item, dropZone) {
        var file     = item.getAsFile();
        var blob     = file.slice(0, file.size, item.type);
        var newFile  = new File([ blob ], new Date().getTime() + '.' + item.type.replace('image/', ''), { type: item.type });
        dropZone.addFile(newFile);
    };

    /**
     * Event that listens to a paste command
     *
     * @param event
     * @return {boolean}
     */
    listenPaste = function(event) {
        var selector = 'div[data-control=media-manager]';
        if (!document.querySelector(selector)) {
            return false;
        }

        var items    = (event.clipboardData || event.originalEvent.clipboardData).items;
        var dropZone = Dropzone.forElement(selector);
        if (items.length <= 0 || !dropZone) {
            return false;
        }

        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                uploadImage(items[i], dropZone);
            }
        }
    }

    /**
     * Removing paste event listeners before adding to prevent stacking
     */
    document.removeEventListener('paste', listenPaste);

    /**
     * Adding the paste listener to the document
     */
    document.addEventListener('paste', listenPaste);

})();
