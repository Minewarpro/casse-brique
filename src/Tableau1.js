/**
 * ALGO: ceci est une classe...
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        this.load.image('carre', 'assets/carre.png');
        this.load.image('cercle', 'assets/cercle.png');

    }


    create(){

    }

    rebond(raquette){

        let me=this;

        console.log(raquette.y)
        console.log(me.balle.y)
        console.log((me.balle.y)-(raquette.y))

        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette =(this.balle.y-raquette.y);

        positionRelativeRaquette = (positionRelativeRaquette/hauteurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette*2-1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityY( this.balle.body.velocity.y + positionRelativeRaquette * hauteurRaquette)

    }

    disparait(obstacle){
        let me=this;
        obstacle.disableBody(true);
        obstacle.setVisible(false);
        obstacle.ombre.setVisible(false);
    }

    Initiale (){
        let me = this

        this.balle.setX(this.largeur/2);
        this.balle.setY(this.hauteur/2);
        this.gauche.setY(this.hauteur/2-50);
        this.droit.setY(this.hauteur/2-50);
        this.droitOmbre.setY(this.hauteur/2-75);
        this.gaucheOmbre.setY(this.hauteur/2-75);

        let pourcent = Phaser.Math.Between(0, 100)

        if (pourcent >= 50){
            this.balle.setVelocityX(200);
        }
        if (pourcent < 50){
            this.balle.setVelocityX(-200);
        }

        this.balle.setVelocityY(0);

        for(let i=0;i<me.obstacles.length;i++){
            me.obstacles[i].setVisible(true);
            me.obstacles[i].ombre.setVisible(true);
        }

    }

    /**
     *
     * @param {Joueur} joueur
     */
    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.Initiale();
    }



    initKeyboard() {
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-200)
                    me.gaucheOmbre.setVelocityY(-200)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(200)
                    me.gaucheOmbre.setVelocityY(200)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droit.setVelocityY(-200)
                    me.droitOmbre.setVelocityY(-200)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droit.setVelocityY(200)
                    me.droitOmbre.setVelocityY(200)
                    break;

            }

        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0)
                    me.gaucheOmbre.setVelocityY(0)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0)
                    me.gaucheOmbre.setVelocityY(0)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droit.setVelocityY(0)
                    me.droitOmbre.setVelocityY(0)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droit.setVelocityY(0)
                    me.droitOmbre.setVelocityY(0)
                    break;
            }
        });
    }

    update(){
        if(this.balle.x > this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.balle.x < 0){
            this.win(this.joueurDroite);
        }
        if(this.balle.y < 0){
            this.balle.y = 0
        }
        if(this.balle.y > this.hauteur){
            this.balle.y = this.hauteur
        }
       
    }


}
