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
        this.load.image('carreOmbre', 'assets/carreOmbre.png');
        this.load.image('cercleOmbre', 'assets/cercleOmbre.png');
        this.load.image('carreBord', 'assets/carreBord.png');
        this.load.image('carreBordOmbre', 'assets/carreBordOmbre.png');
        this.load.image('carreVertOmbre', 'assets/carreVertOmbre.png');
        this.load.image('carreVert', 'assets/carreVert.png');
        this.load.audio('raquetteSound', 'assets/sounds/raquetteSound.wav');
        this.load.audio('vertSound', 'assets/sounds/vertSound.wav');
    }


    create(){

        this.vertSound = this.sound.add('vertSound');
        this.raquetteSound = this.sound.add('raquetteSound');

        this.hauteur = 500
        this.largeur = 1000

        //Carrés Vert droit
        let rect,ombre;
        this.obstacles=[];
        let ecart=119;

        for(let i=0;i<4;i++){
            ombre = this.physics.add.sprite(
                this.largeur-46,
                +i*115,
                'carreVertOmbre'
            ).setOrigin(0,0);

            ombre.setDisplaySize(50,150);
            ombre.body.setAllowGravity(false);
            ombre.setImmovable(true);

            rect = this.physics.add.sprite(this.largeur-30,25+i*115,
                'carreVert').setOrigin(0,0);
            rect.setDisplaySize(20,100);
            rect.body.setAllowGravity(false);
            rect.setImmovable(true);
            rect.ombre=ombre;


            this.physics.add.collider(this.balle, rect, function () {
                console.log("touche droitVert");
                me.rebond(rect);
                me.disparait(rect);
            });

            this.obstacles.push(rect);

            ecart++;
        }



        this.droitVertOmbre=ombre;
        this.droitVert=rect;



        /**this.droitVertOmbre1 = this.physics.add.sprite(this.largeur-45, this.hauteur-270, 'carreVertOmbre').setOrigin(0,0);
        this.droitVertOmbre1.setDisplaySize(50,150);
        this.droitVertOmbre1.body.setAllowGravity(false);
        this.droitVertOmbre1.setImmovable(true);

        this.droitVert1 = this.physics.add.sprite(this.largeur-30,this.hauteur-245, 'carreVert').setOrigin(0,0);
        this.droitVert1.setDisplaySize(20,100);
        this.droitVert1.body.setAllowGravity(false);
        this.droitVert1.setImmovable(true);

        this.droitVertOmbre2 = this.physics.add.sprite(this.largeur-45, this.hauteur-385, 'carreVertOmbre').setOrigin(0,0);
        this.droitVertOmbre2.setDisplaySize(50,150);
        this.droitVertOmbre2.body.setAllowGravity(false);
        this.droitVertOmbre2.setImmovable(true);

        this.droitVert2 = this.physics.add.sprite(this.largeur-30,this.hauteur-360, 'carreVert').setOrigin(0,0);
        this.droitVert2.setDisplaySize(20,100);
        this.droitVert2.body.setAllowGravity(false);
        this.droitVert2.setImmovable(true);

        this.droitVertOmbre3 = this.physics.add.sprite(this.largeur-45, this.hauteur-500, 'carreVertOmbre').setOrigin(0,0);
        this.droitVertOmbre3.setDisplaySize(50,150);
        this.droitVertOmbre3.body.setAllowGravity(false);
        this.droitVertOmbre3.setImmovable(true);

        this.droitVert3 = this.physics.add.sprite(this.largeur-30,this.hauteur-475, 'carreVert').setOrigin(0,0);
        this.droitVert3.setDisplaySize(20,100);
        this.droitVert3.body.setAllowGravity(false);
        this.droitVert3.setImmovable(true);*/

        //Carrés Vert Gauche

        this.gaucheVertOmbre = this.physics.add.sprite(-5, this.hauteur-155, 'carreVertOmbre').setOrigin(0,0);
        this.gaucheVertOmbre.setDisplaySize(50,150);
        this.gaucheVertOmbre.body.setAllowGravity(false);
        this.gaucheVertOmbre.setImmovable(true);

        this.gaucheVert = this.physics.add.sprite(10,this.hauteur-130, 'carreVert').setOrigin(0,0);
        this.gaucheVert.setDisplaySize(20,100);
        this.gaucheVert.body.setAllowGravity(false);
        this.gaucheVert.setImmovable(true);

        this.gaucheVertOmbre1 = this.physics.add.sprite(-5, this.hauteur-270, 'carreVertOmbre').setOrigin(0,0);
        this.gaucheVertOmbre1.setDisplaySize(50,150);
        this.gaucheVertOmbre1.body.setAllowGravity(false);
        this.gaucheVertOmbre1.setImmovable(true);

        this.gaucheVert1 = this.physics.add.sprite(10,this.hauteur-245, 'carreVert').setOrigin(0,0);
        this.gaucheVert1.setDisplaySize(20,100);
        this.gaucheVert1.body.setAllowGravity(false);
        this.gaucheVert1.setImmovable(true);

        this.gaucheVertOmbre2 = this.physics.add.sprite(-5, this.hauteur-385, 'carreVertOmbre').setOrigin(0,0);
        this.gaucheVertOmbre2.setDisplaySize(50,150);
        this.gaucheVertOmbre2.body.setAllowGravity(false);
        this.gaucheVertOmbre2.setImmovable(true);

        this.gaucheVert2 = this.physics.add.sprite(10,this.hauteur-360, 'carreVert').setOrigin(0,0);
        this.gaucheVert2.setDisplaySize(20,100);
        this.gaucheVert2.body.setAllowGravity(false);
        this.gaucheVert2.setImmovable(true);

        this.gaucheVertOmbre3 = this.physics.add.sprite(-5, this.hauteur-500, 'carreVertOmbre').setOrigin(0,0);
        this.gaucheVertOmbre3.setDisplaySize(50,150);
        this.gaucheVertOmbre3.body.setAllowGravity(false);
        this.gaucheVertOmbre3.setImmovable(true);

        this.gaucheVert3 = this.physics.add.sprite(10,this.hauteur-475, 'carreVert').setOrigin(0,0);
        this.gaucheVert3.setDisplaySize(20,100);
        this.gaucheVert3.body.setAllowGravity(false);
        this.gaucheVert3.setImmovable(true);

        //Autre carré
        
        this.centre1Ombre = this.physics.add.sprite(this.largeur/2-5, 0, 'carreBordOmbre').setOrigin(0,0);
        this.centre1Ombre.setDisplaySize(10,this.hauteur);
        this.centre1Ombre.body.setAllowGravity(false);
        this.centre1Ombre.setImmovable(true);


        this.hautOmbre=this.physics.add.sprite(-this.largeur/2,-5, 'carreBordOmbre').setOrigin(0,0);
        this.hautOmbre.setDisplaySize(this.largeur*2,20);
        this.hautOmbre.body.setAllowGravity(false);
        this.hautOmbre.setImmovable(true);
        
        this.haut = this.physics.add.sprite(0, -15, 'carreBord').setOrigin(0,0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);


        this.basOmbre=this.physics.add.sprite(-this.largeur/2,this.hauteur-15, 'carreBordOmbre').setOrigin(0,0);
        this.basOmbre.setDisplaySize(this.largeur*2,20);
        this.basOmbre.body.setAllowGravity(false);
        this.basOmbre.setImmovable(true);
        
        this.bas=this.physics.add.sprite(0,this.hauteur-5, 'carreBord').setOrigin(0,0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);


        this.gaucheOmbre = this.physics.add.sprite(45, this.hauteur/2-75, 'carreOmbre').setOrigin(0,0);
        this.gaucheOmbre.setDisplaySize(50,150);
        this.gaucheOmbre.body.setAllowGravity(false);
        this.gaucheOmbre.setImmovable(true);

        this.gauche = this.physics.add.sprite(60, this.hauteur/2-50, 'carre').setOrigin(0,0);
        this.gauche.setDisplaySize(20,100);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);

        this.droitOmbre = this.physics.add.sprite(this.largeur-95, this.hauteur/2-75, 'carreOmbre').setOrigin(0,0);
        this.droitOmbre.setDisplaySize(50,150);
        this.droitOmbre.body.setAllowGravity(false);
        this.droitOmbre.setImmovable(true);

        this.droit=this.physics.add.sprite(this.largeur-80,this.hauteur/2-50, 'carre').setOrigin(0,0);
        this.droit.setDisplaySize(20,100);
        this.droit.body.setAllowGravity(false);
        this.droit.setImmovable(true);

        //Balle

        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'cercle');
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.5,1.5);
        this.balle.body.setMaxVelocityX(500,500)
        this.balle.body.setMaxVelocityY(100,100)


        this.Initiale();

        //Collider

        let me = this;
        this.physics.add.collider(this.balle, this.droit, function () {
            console.log("touche droit");
            me.rebond(me.droit);
            me.sound.play('raquetteSound')
        });
        this.physics.add.collider(this.balle, this.gauche,  function () {
            console.log("touche gauche");
            me.rebond(me.gauche);
            me.sound.play('raquetteSound')
        });

        //Particles

         this.particles = this.add.particles('cercle');

         this.particles.createEmitter({
            speed: 50,
             angle: this.balle.x+30,
            scale: { start: 0.05, end: 0 },
            blendMode: 'ADD',
             follow: this.balle,
             frequency: 1,
             lifespan: {min :200, max : 200},
             x: this.balle.x,
             y: this.balle.y,
             //emitZone: { type: 'edge', source: path, quantity: 48, yoyo: false },
        });


        this.physics.add.collider(this.balle, this.haut);
        this.physics.add.collider(this.balle, this.bas);


        this.initKeyboard();

        this.joueurGauche = new Joueur('J1','joueurGauche')
        this.joueurDroite = new Joueur('J2','joueurDroite')
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

        /**this.collider0 = this.physics.add.collider(this.balle, this.droitVert, function () {
            console.log("touche droitVert");
            me.rebond(me.droitVert);
            me.disparait(me.droitVert);
        });
        this.droitVert.setVisible(true);
        this.droitVertOmbre.setVisible(true);

        this.collider1 = this.physics.add.collider(this.balle, this.droitVert1, function () {
            console.log("touche droitVert");
            me.rebond(me.droitVert1);
        });
        this.droitVert1.setVisible(true);
        this.droitVertOmbre1.setVisible(true);

        this.collider2 = this.physics.add.collider(this.balle, this.droitVert2, function () {
            console.log("touche droitVert");
            me.rebond(me.droitVert2);
        });
        this.droitVert2.setVisible(true);
        this.droitVertOmbre2.setVisible(true);

        this.collider3 = this.physics.add.collider(this.balle, this.droitVert3, function () {
            console.log("touche droitVert");
            me.rebond(me.droitVert3);
        });
        this.droitVert3.setVisible(true);
        this.droitVertOmbre3.setVisible(true);

        
        
        this.collider4 = this.physics.add.collider(this.balle, this.gaucheVert, function () {
            console.log("touche gaucheVert");
            me.rebond(me.gaucheVert);
        });
        this.gaucheVert.setVisible(true);
        this.gaucheVertOmbre.setVisible(true);

        this.collider5 = this.physics.add.collider(this.balle, this.gaucheVert1, function () {
            console.log("touche gaucheVert");
            me.rebond(me.gaucheVert1);
        });
        this.gaucheVert1.setVisible(true);
        this.gaucheVertOmbre1.setVisible(true);

        this.collider6 = this.physics.add.collider(this.balle, this.gaucheVert2, function () {
            console.log("touche gaucheVert");
            me.rebond(me.gaucheVert2);
        });
        this.gaucheVert2.setVisible(true);
        this.gaucheVertOmbre2.setVisible(true);

        this.collider7 = this.physics.add.collider(this.balle, this.gaucheVert3, function () {
            console.log("touche gaucheVert");
            me.rebond(me.gaucheVert3);
        });
        this.gaucheVert3.setVisible(true);
        this.gaucheVertOmbre3.setVisible(true);*/
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
        /**if (this.balle.x >= this.droitVert.x-10 && this.balle.y >= this.droitVert.y){
            if (this.balle.y <= this.droitVert.y+110) {
                this.droitVert.setVisible(false);
                this.droitVertOmbre.setVisible(false);
                this.physics.world.removeCollider(this.collider0);
                this.sound.play('vertSound');
            }
        }
        if (this.balle.x >= this.droitVert1.x-10 && this.balle.y >= this.droitVert1.y-5){
            if (this.balle.y <= this.droitVert1.y+110) {
                this.droitVert1.setVisible(false);
                this.droitVertOmbre1.setVisible(false);
                this.physics.world.removeCollider(this.collider1);
                this.sound.play('vertSound');
            }
        }
        if (this.balle.x >= this.droitVert2.x-10 && this.balle.y >= this.droitVert2.y-5){
            if (this.balle.y <= this.droitVert2.y+110) {
                this.droitVert2.setVisible(false);
                this.droitVertOmbre2.setVisible(false);
                this.physics.world.removeCollider(this.collider2);
                this.sound.play('vertSound');
            }
        }

        if (this.balle.x >= this.droitVert3.x-10 && this.balle.y >= this.droitVert3.y-5){
            if (this.balle.y <= this.droitVert3.y+110){
                this.droitVert3.setVisible(false);
                this.droitVertOmbre3.setVisible(false);
                this.physics.world.removeCollider(this.collider3);
                this.sound.play('vertSound');
            }

        }

        if (this.balle.x <= this.gaucheVert.x+30 && this.balle.y >= this.gaucheVert.y){
            if (this.balle.y <= this.gaucheVert.y+110) {
                this.gaucheVert.setVisible(false);
                this.gaucheVertOmbre.setVisible(false);
                this.physics.world.removeCollider(this.collider4);
                this.sound.play('vertSound');
            }
        }
        if (this.balle.x <= this.gaucheVert1.x+30 && this.balle.y >= this.gaucheVert1.y-5){
            if (this.balle.y <= this.gaucheVert1.y+110) {
                this.gaucheVert1.setVisible(false);
                this.gaucheVertOmbre1.setVisible(false);
                this.physics.world.removeCollider(this.collider5);
                this.sound.play('vertSound');
            }
        }
        if (this.balle.x <= this.gaucheVert2.x+30 && this.balle.y >= this.gaucheVert2.y-5){
            if (this.balle.y <= this.gaucheVert2.y+110) {
                this.gaucheVert2.setVisible(false);
                this.gaucheVertOmbre2.setVisible(false);
                this.physics.world.removeCollider(this.collider6);
                this.sound.play('vertSound');
            }
        }

        if (this.balle.x <= this.gaucheVert3.x+30 && this.balle.y >= this.gaucheVert3.y-5){
            if (this.balle.y <= this.gaucheVert3.y+110) {
                this.gaucheVert3.setVisible(false);
                this.gaucheVertOmbre3.setVisible(false);
                this.physics.world.removeCollider(this.collider3);
                this.sound.play('vertSound');
            }
        }*/
    }


}
