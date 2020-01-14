class Invader {
  constructor(width, height, posX, posY, appearance, id) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.appearance = appearance;
    this.id = id;
  }

  shootLaser() {
    console.log("Invader " + this.id + " Laser shot")
  }

  explode() {
    console.log("Invader " + this.id + " exploded")
  }
  isHitByBullet(bulletX, bulletY) {
    //prüfen ob der Bullet den Invader trifft
  }
  static generateInvader() {


    let invader = [];
    //const printChar = '#';
    const printChar = '■';
    //const printChar = '👾';

    const rand = Math.random();


    for (let x = 0; x < width; x++) {

      for (let y = 0; y < height; y++) {

        /*
        const color_r = Math.random() * 255;
        const color_g = Math.random() * 255;
        const color_b = Math.random() * 255;

        const hue = Math.random() * 360;
        */

        const randProcecced = rand.toString()[x * y];


        if (parseInt(randProcecced) > 3) {

          /*
          const colorCharRGB = chalk.rgb(color_r, color_g, color_b)(printChar);
          const colorCharHSV = chalk.hsv(hue, 100, 100)(printChar);
          
          writeCharacterToConsole((colorCharHSV), x + xpos, y + ypos);
          writeCharacterToConsole((colorCharHSV), width * 2 - x + xpos, y + ypos);
          */

          if (!Array.isArray(invader[x])) {
            invader[x] = [];
            invader[x][y] = 1;
          } else {
            invader[x][y] = 1;
          }


        } else {

          if (!Array.isArray(invader[x])) {
            invader[x] = [];
            invader[x][y] = 0;

          } else {
            invader[x][y] = 0;

          }

        }

      }

    }


    return invader;


  }
}