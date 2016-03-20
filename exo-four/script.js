// hepl-mmi/meet-canvas-animation - exo-four

( function( CanvApp, Bubble ) {

    "use strict";

    var oApp,
        iBubbleCount = 50;

    CanvApp.prototype.prepare = function() {
        this.bubbles = [];
        while ( --iBubbleCount ) {
            this.bubbles.push( new Bubble( this ) );
        }
        this.animate();
    };

    CanvApp.prototype.animate = function() {
        this.context.clearRect( 0, 0, this.width, this.height );
        this.bubbles.map( function( oBubble ) {
            oBubble.update();
        } );
        window.requestAnimationFrame( this.animate.bind( this ) );
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.prepare();

} )( window.CanvApp, window.Bubble );
