// hepl-mmi/meet-canvas-animation - exo-one

let oApp;

const aColors = [
    [ "hotpink", "mediumaquamarine", "khaki", "powderblue" ],
    [ "mediumaquamarine", "khaki", "powderblue", "hotpink" ],
    [ "khaki", "powderblue", "hotpink", "mediumaquamarine" ],
    [ "powderblue", "hotpink", "mediumaquamarine", "khaki" ],
];

class ExoOneApp extends CanvApp {
    drawRectangleAt( x, y, sColor ) {
        let { context, width, height } = this;

        context.fillStyle = sColor;
        context.fillRect( x, y, width / 2, height / 2 );
    }

    draw( [ sColorOne, sColorTwo, sColorThree, sColorFour ] ) {
        let { width, height } = this;

        this.drawRectangleAt( 0, 0, sColorOne );
        this.drawRectangleAt( width / 2, 0, sColorTwo );
        this.drawRectangleAt( 0, height / 2, sColorThree );
        this.drawRectangleAt( width / 2, height / 2, sColorFour );
    }

    animate() {
        let iCurrentSecond = ( new Date() ).getSeconds();

        if ( iCurrentSecond !== this.previousSecond ) {
            this.draw( aColors[ iCurrentSecond % aColors.length ] );
            this.previousSecond = iCurrentSecond;
        }

        window.requestAnimationFrame( this.animate.bind( this ) );
    }
}

oApp = new ExoOneApp( "app" );
oApp.previousSecond = ( new Date() ).getSeconds();
oApp.draw( aColors[ 0 ] );
oApp.animate();
