// hepl-mmi/meet-canvas-animation - exo-four

let oApp;

class ExoFourApp extends CanvApp {
    setup() {
        let i = 0;

        while ( i++ < this.bubblesCount ) {
            this.bubbles.push( new Bubble( this ) );
        }

        this.animate();
    }

    animate() {
        let { context, width, height } = this;

        context.clearRect( 0, 0, width, height );
        this.bubbles.forEach( ( oBubble ) => {
            oBubble.animate();
        } );

        window.requestAnimationFrame( this.animate.bind( this ) );
    }
}

oApp = new ExoFourApp( "app" );
oApp.bubbles = [];
oApp.bubblesCount = 50 + Math.round( Math.random() * 50 );
oApp.setup();
