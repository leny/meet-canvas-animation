// hepl-mmi/meet-canvas-animation - exo-three

let oApp;

class ExoThreeApp extends CanvApp {
    setup() {
        let { width, height } = this;

        this.bubble = {
            "color": `rgba( 0, 0, ${ Math.floor( Math.random() * 255 ) }, ${ 0.25 + Math.random() * 0.75 } )`,
            "radius": ( Math.random() * height / 10 ) + 10,
            "speed": 3,
            "x": Math.round( Math.random() * width ),
            "y": height,
        };

        this.animate();
    }

    draw() {
        let { context, width, height } = this,
            { x, y, radius, color } = this.bubble;

        context.clearRect( 0, 0, width, height );
        context.fillStyle = color;
        context.beginPath();
        context.arc( x, y, radius, 0, Math.PI * 2 );
        context.closePath();
        context.fill();
    }

    animate() {
        let { width, height } = this;

        this.bubble.y -= this.bubble.speed;

        if ( this.bubble.y < this.bubble.radius * -1 ) {
            this.bubble.x = Math.round( Math.random() * width );
            this.bubble.y = height + this.bubble.radius;
        }

        this.draw();

        window.requestAnimationFrame( this.animate.bind( this ) );
    }
}

oApp = new ExoThreeApp( "app" );
oApp.setup();
