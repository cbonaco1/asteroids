if (typeof window.Asteroids === "undefined") {
  window.Asteroids = {};
}

var GameView = function(canvasEl) {
  this.game = new Game();
  this.canvas = canvasEl.getContext("2d");
};

GameView.prototype.start = function () {
  window.setInterval(function(){
    this.game.moveObjects();
    this.game.draw(this.canvas);
  }.bind(this), 20);
};
