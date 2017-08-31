var BasicCard = function (front, back) {
    if (this instanceof BasicCard) {
      this.front = front;
      this.back = back;
    } else return new BasicCard(front, back);
  };
  var sky = new BasicCard("What is the color of the sky?", "blue");
  console.log(sky.front);
  console.log(sky.back);