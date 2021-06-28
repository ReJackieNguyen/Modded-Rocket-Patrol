let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    /* fps: {
      target: 30, forceSetTimeOut: true
    }
    */
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

/* 
Jackie Nguyen
Beach Patrol
06/28/2021
15~20 hours
------------------------------------------------------------------------------------------------------
Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
-------------------------------------------------------------------------------------------------------
I did not rename the files because I was afraid that my program would crash/develop bugs. I did however included a particles
folder that had a variety of particle colors and a Beach Patrol Assets folder that included my original artwork assets. As for
the sounds I just rename them to match the original sound file names that was given to us. (They are different sounds that I created
I just renamed the sound files to match the file name in the code.)
*/

/* 
developed in collaboration with jgaito@ucsc.edu 
based on example from:
https://photonstorm.github.io/phaser3-docs/Phaser.Scale.html
https://labs.phaser.io/edit.html?src=src/game%20objects/particle%20emitter/create%20emitter.js&v=3.55.2
https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Particles.ParticleEmitter.html#scaleX__anchor
https://www.youtube.com/watch?v=JSrafZXuehQ
*/