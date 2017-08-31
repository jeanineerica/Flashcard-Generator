var BasicCard = require("./BasicCard.js");

var ClozeCard = function (text, cloze) {
    if (this instanceof ClozeCard) {
      this.fullText = text;
      this.partial = text.replace(cloze, '...'); 
      if(this.partial === text) throw new Error("This doesn't work", "oops");
      this.cloze = cloze;
  
    } else return new ClozeCard(text, cloze);

  };

