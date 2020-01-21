// eslint-disable-next-line no-unused-vars
class InvaderRow {
  constructor(posX, posY, cols, invaderCount, id, invWidth, invHeight, rand) {
    // @Flo: Zwischen optional und required Parametern unterscheiden?! zb rand
    this.posX = posX;
    this.posY = posY;
    this.cols = cols;
    this.rand = rand;
    this.invWidth = invWidth;
    this.invHeight = invHeight;
    this.invaderCount = invaderCount;
    this.invaders = this.generateInvaderRow();
    this.id = id;
    // this.spaces = this.cols / this.invaderCount / 2;
    // this.rowWidth = this.invWidth * this.invaderCount + this.spaces * this.invaderCount + 2;
  }

  generateInvaderRow() {
    const temp = [];
    const spaces = this.cols / this.invaderCount / 2;
    let xPos = spaces;
    const yPos = 0;
    for (let i = 0; i < this.invaderCount; i += 1) {
      // eslint-disable-next-line no-undef
      temp.push(new Invader(this.invWidth, this.invHeight, xPos, yPos, i, this.rand));
      xPos += spaces + this.invWidth;
      // @Flo: Invader als String oder Invader[] speichern
    }
    return temp;
  }
}
