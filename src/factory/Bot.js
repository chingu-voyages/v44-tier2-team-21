export default class Bot {
  constructor(id, x, y, angle, image, name, bool, operation, initDirection) {
    this.x = x;
    this.y = y;
    (this.id = id), (this.angle = angle);
    this.image = image;
    this.name = name;
    this.bool = bool;
    this.operation = operation;
    this.initDirection = initDirection;
  }

  getXValue() {
    return this.x;
  }

  setXValue(x) {
    this.x = x;
  }
  getYValue() {
    return this.y;
  }

  setYValue(y) {
    this.y = y;
  }

  getAngle() {
    return this.angle;
  }

  setAngle(angle) {
    this.angle = angle;
  }

  draw(context, x, y, img) {
    context.drawImage(img, x, y, 50, 50);
  }
}
