// hepl-mmi/meet-canvas-animation - exo-four

( function( CanvApp, Bubble ) {

    "use strict";

    var oApp,
        iBubbleCount = 50;

    CanvApp.prototype.prepare = function() {
        var self = this;

        this.bubbles = [];
        while ( iBubbleCount-- ) {
            this.bubbles.push( new Bubble( this ) );
        }
        this.animate();

        this.canvas.addEventListener( "click", function( oEvent ) {
            // var oBoundingRect = this.getBoundingClientRect(),
            //     iPositionX = oEvent.clientX - oBoundingRect.left,
            //     iPositionY = oEvent.clientY - oBoundingRect.top;
            var iPositionX = oEvent.offsetX,
                iPositionY = oEvent.offsetY;

            self.bubbles.push( new Bubble( self, iPositionX, iPositionY, true ) );
        } );
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
