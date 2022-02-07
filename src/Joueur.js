class Joueur {
    get score() {
        return( this._score);
    }
    get vie(){
        return ( this._vie)
    }
    set score(value) {
        this._score = value;
        this.$score.textContent= "Score : " + this._score
        console.log(this)
    }
    set vie(value){
        this._vie = value;
        this.$vie.textContent= "Vies : " + this._vie;
    }
    constructor(scoreId) {
        this._score = 0;
        this._vie = 3;
        this.scoreId = scoreId;
        this.$el = document.getElementById(scoreId);
        this.$score = this.$el.querySelector(".score")
        this.$vie = this.$el.querySelector(".vie")

    }
}