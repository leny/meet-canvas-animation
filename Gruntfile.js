/* hepl-mmi/meet-canvas
 *
 * /Gruntfile.js - Grunt configuration file
 *
 * coded by leny@flatLand!
 * started at 12/03/2016
 */

"use strict";

module.exports = function( grunt ) {

    // 1. load tasks
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-cowsay" );
    grunt.loadNpmTasks( "grunt-eslint" );

    // 2. configure tasks
    grunt.initConfig( {
        // cowsay
        "cowsay": {
            "done": {
                "options": {
                    "message": "I'm done!"
                }
            }
        },
        // eslint
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json"
            },
            "scripts": [ "exo-**/*.js", "_shared/*.js" ]
        },
        // watch
        "watch": {
            "options": {
                "spawn": false
            },
            "scripts": {
                "files": [ "exo-**/*.js", "_shared/*.js" ],
                "tasks": [ "eslint" ]
            }
        }
    } );

    // 3. aliases
    grunt.registerTask( "default", [
        "analyse",
        "cowsay:done"
    ] );

    grunt.registerTask( "analyse", [ "eslint:scripts" ] );

    grunt.registerTask( "work", [
        "analyse",
        "watch"
    ] );
};
