function startGame() {
    document.getElementById("gameboard").style.display = "block";
    document.getElementById("players").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    currentGame = new Game();
    red = document.getElementById("redPlayer");
    black = document.getElementById("blackPlayer");
    purple = document.getElementById("purplePlayer");
    blue = document.getElementById("bluePlayer");
}


class Game {

    constructor(board, players){
        this.board = board;
        this.players = players;
    }

}

class Board {
    constructor(points, section){
        this.points = points;
        this.section = section;
    }
}

class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }


}

class Piece {
    constructor(color, mass){
        this.color = color;
        this.mass = mass;
    }
}
