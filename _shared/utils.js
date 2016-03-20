// hepl-mmi/meet-canvas-animation - utils

( function() {

    "use strict";

    var _isCanvasSupported;

    _isCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

    window.isCanvasSupported = _isCanvasSupported;

} )();
