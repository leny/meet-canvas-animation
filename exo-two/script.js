// hepl-mmi/meet-canvas-animation - exo-two

let oApp,
    $indicator;

class ExoTwoApp extends CanvApp {
    setup() {
        this.image = new Image();

        this.image.addEventListener( "load", () => {
            this.time.start = Date.now();
            this.animate();
        } );

        this.image.src = this.sprite.src;
    }

    draw( iCurrentStep ) {
        let { context, width, height } = this,
            { x, y } = this.sprite.steps[ iCurrentStep ];

        context.clearRect( 0, 0, width, height );
        context.drawImage(
            this.image,
            x,
            y,
            this.sprite.width,
            this.sprite.height,
            ( width - this.sprite.width ) / 2,
            ( height - this.sprite.height ) / 2,
            this.sprite.width,
            this.sprite.height
        );
    }

    animate() {
        this.time.current = Date.now();

        if ( this.time.current - this.time.start >= 1000 / this.currentSpeed ) {
            this.currentStep++;
            ( this.currentStep === this.sprite.steps.length ) && ( this.currentStep = 0 );
            this.time.start = Date.now();
        }

        this.draw( this.currentStep );

        window.requestAnimationFrame( this.animate.bind( this ) );
    }
}

oApp = new ExoTwoApp( "app" );
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
        { "x": 875, "y": 0 },
    ],
};
oApp.currentStep = 0;
oApp.currentSpeed = 20;
oApp.time = {
    "start": 0,
    "current": 0,
};
oApp.setup();

$indicator = document.querySelector( "strong" );
// NOTE: input event isn't supported on IE10!
document.querySelector( "#animation-speed" ).addEventListener( "input", function() {
    oApp.currentSpeed = +this.value;
    $indicator.innerHTML = `${ oApp.currentSpeed } i/s`;
} );

