// hepl-mmi/meet-canvas-animation - exo-three

( function( CanvApp ) {

    "use strict";

    var oApp,
        oBubble = {
            "x": null,
            "y": null,
            "radius": 25,
            "speed": 5
        };

    CanvApp.prototype.prepare = function() {
        this.bubble = {
            "x": ~~( this.width / 2 ),
            "y": ~~( this.height / 5 ),
            "radius": 25,
            "speed": 5
        };
        this.draw();
        this.animate();
    };

    CanvApp.prototype.draw = function() {
        var oContext = this.context,
            oBubble = this.bubble;

        oContext.clearRect( 0, 0, this.width, this.height );

        oContext.beginPath();
        oContext.fillStyle = "#c30";
        oContext.arc( oBubble.x, oBubble.y, oBubble.radius, 0, Math.PI * 2, true );
        oContext.closePath();
        oContext.fill();
    };

    CanvApp.prototype.animate = function() {
        var oBubble = this.bubble;

        if ( oBubble.y < ( oBubble.radius * -1 ) ) {
            oBubble.y = this.height + oBubble.radius;
            oBubble.x = ~~( Math.random() * this.width );
        }
        oBubble.y -= oBubble.speed;
        this.draw();
        window.requestAnimationFrame( this.animate.bind( this ) );
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.prepare();

} )( window.CanvApp );
