// hepl-mmi/meet-canvas - canvapp

( function() {

    "use strict";

    var CanvApp;

    CanvApp = function( sCanvasSelector ) {
        this.canvas = document.querySelector( sCanvasSelector );
        if ( !window.isCanvasSupported( this.canvas ) ) {
            return console.error( "Canvas isn't supported!" );
        }
        this.context = this.canvas.getContext( "2d" );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    };

    window.CanvApp = CanvApp;

} )();
