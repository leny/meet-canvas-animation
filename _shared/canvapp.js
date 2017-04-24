// hepl-mmi/meet-canvas - canvapp

class CanvApp {
    constructor( sCanvasID ) {
        this.canvas = document.getElementById( sCanvasID );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        if ( !window.isCanvasSupported( this.canvas ) ) {
            return console.error( "Your borwser doesn't support canvas. Please change." );
        }
        this.context = this.canvas.getContext( "2d" );
    }

    draw() {
        console.warn( "This method must be overrided!" );
    }
}

window.CanvApp = CanvApp;
