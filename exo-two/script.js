// hepl-mmi/meet-canvas-animation - exo-two

( function( CanvApp ) {

    "use strict";

    var oApp;

    CanvApp.prototype.setup = function() {
        var oImage = new Image(),
            self = this;

        oImage.addEventListener( "load", function() {
            self.image = oImage;
            self.time.start = ( new Date ).getTime();
            self.animate();
        } );
        oImage.src = this.sprite.src;

        document.getElementById( "animation-speed" ).addEventListener( "change", function() {
            self.currentSpeed = this.value;
        } );
    };

    CanvApp.prototype.animate = function() {
        this.time.current = ( new Date ).getTime();
        this.context.clearRect( 0, 0, this.width, this.height );
        this.context.drawImage( this.image, this.sprite.steps[ oApp.currentStep ].x, this.sprite.steps[ oApp.currentStep ].y, this.sprite.width, this.sprite.height, ( this.width - this.sprite.width ) / 2, ( this.height - this.sprite.height ) / 2, this.sprite.width, this.sprite.height );
        if( this.time.current - this.time.start > oApp.currentSpeed ) {
            this.time.start = ( new Date() ).getTime();
            ( ++this.currentStep < this.sprite.steps.length ) || ( this.currentStep = 0 );
        }
        window.requestAnimationFrame( this.animate.bind( this ) );
    };

    oApp = new CanvApp( "#my-canvas" );
    oApp.time = {
        "start": null,
        "current": null
    };
    oApp.sprite = {
        "src": "../_shared/ramonaflowers.png",
        "width": 125,
        "height": 157,
        "steps": [
            { "x": 0, "y": 0 },
            { "x": 125, "y": 0 },
            { "x": 250, "y": 0 },
            { "x": 375, "y": 0 },
            { "x": 500, "y": 0 },
            { "x": 625, "y": 0 },
            { "x": 750, "y": 0 },
            { "x": 875, "y": 0 }
        ]
    };
    oApp.currentStep = 0;
    oApp.currentSpeed = 50;

    oApp.setup();

} )( window.CanvApp );
