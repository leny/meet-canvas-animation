// hepl-mmi/meet-canvas-animation - Bubble

class Bubble {
    constructor( { context, width, height } ) {
        let iGreen = Math.floor( Math.random() * 128 ),
            iBlue = Math.floor( Math.random() * 128 ) + 128;

        this.context = context;
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.radius = Math.random() * 20 + 10;
        this.color = `rgba( 0, ${ iGreen }, ${ iBlue }, ${ this.radius / 30 } )`;
        this.speed = this.radius / 10;
        this.x = Math.floor( Math.random() * width );
        this.y = height + this.radius;
    }

    draw() {
        let { context, color, x, y, radius } = this;

        context.fillStyle = color;
        context.beginPath();
        context.arc( x, y, radius, 0, Math.PI * 2 );
        context.closePath();
        context.fill();
    }

    animate() {
        this.y -= this.speed;
        if ( this.y < this.radius * -1 ) {
            this.x = Math.floor( Math.random() * this.canvasWidth );
            this.y = this.canvasHeight + this.radius;
        }

        this.draw();
    }
}

window.Bubble = Bubble;
