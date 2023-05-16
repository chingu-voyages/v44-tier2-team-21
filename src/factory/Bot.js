export default class Bot {
  constructor(x, y, name, bool, operation, initDirection) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.bool = bool;
    this.operation = operation;
    this.initDirection = initDirection;
  }

  draw(context, x, y, img) {
    context.drawImage(img, x, y, 50, 50);
  }
}
