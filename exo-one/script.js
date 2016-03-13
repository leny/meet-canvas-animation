// hepl-mmi/meet-canvas-animation - exo-one

( function( CanvApp ) {

    "use strict";

    var oApp,
        aColorSequences = [
            [ "#ffffaa", "#aaffff", "#ffaaaa", "#aaffaa" ],
            [ "#aaffaa", "#ffffaa", "#aaffff", "#ffaaaa" ],
            [ "#ffaaaa", "#aaffaa", "#ffffaa", "#aaffff" ],
            [ "#aaffff", "#ffaaaa", "#aaffaa", "#ffffaa" ]
        ];

    CanvApp.prototype.setup = function() {
        this.animate();
    };

    CanvApp.prototype.animate = function() {
        var iCurrentSecond = ( new Date() ).getSeconds();

        this.drawRectangles.apply( this, aColorSequences[ iCurrentSecond % 4 ] );

        window.requestAnimationFrame( this.animate.bind( this ) );
    };

    CanvApp.prototype.drawRectangles = function( sColorOne, sColorTwo, sColorThree, sColorFour ) {
        var oContext = this.context;

        oContext.fillStyle = sColorOne;
        oContext.fillRect( 0, 0, this.width / 2, this.height / 2 );
        oContext.fillStyle = sColorTwo;
        oContext.fillRect( this.width / 2, 0, this.width / 2, this.height / 2 );
        oContext.fillStyle = sColorFour;
        oContext.fillRect( 0, this.height / 2, this.width / 2, this.height / 2 );
        oContext.fillStyle = sColorThree;
        oContext.fillRect( this.width / 2, this.height / 2, this.width / 2, this.height / 2 );
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.drawRectangles.apply( oApp, aColorSequences[ 0 ] );

    oApp.setup();

} )( window.CanvApp );
