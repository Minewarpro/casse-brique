/**
 * ALGO: ceci est une classe...
 */
class Tableau1 extends Phaser.Scene {
    /**
     * Précharge les assets
     */
    preload() {
        this.load.image('carre', 'assets/carre.png');
        this.load.image('cercle', 'assets/cercle.png');

    }


    create() {
        let me = this

        this.largeur = 800

        /** Création de raquette **/

        this.raquette = this.physics.add.sprite(this.largeur / 2, this.largeur - 20, 'carre');
        this.raquette.setDisplaySize(200, 20);
        this.raquette.body.setAllowGravity(false);
        this.raquette.setImmovable(true);
        this.raquette.setTintFill(0xFFFFFF);


        /** Création de balle **/

        this.balle = this.physics.add.sprite(this.largeur / 2, 500, 'cercle');
        this.balle.setDisplaySize(20, 20);
        this.balle.body.setBounce(1.3, 1.3);
        this.balle.body.setMaxVelocityX(400, 400)
        this.balle.body.setMaxVelocityY(600, 600)
        this.balle.setVelocityY(-200);
        this.balle.setTintFill(0xFFFFFF);

        /** Création de Mur **/

        this.murHaut = this.physics.add.sprite(0, 0, 'carre').setOrigin(0, 0);
        this.murHaut.setDisplaySize(800, 20);
        this.murHaut.body.setAllowGravity(false);
        this.murHaut.setImmovable(true);

        this.murGauche = this.physics.add.sprite(0, 0, 'carre').setOrigin(0, 0);
        this.murGauche.setDisplaySize(20, 800);
        this.murGauche.body.setAllowGravity(false);
        this.murGauche.setImmovable(true);

        this.murDroit = this.physics.add.sprite(this.largeur - 20, 0, 'carre').setOrigin(0, 0);
        this.murDroit.setDisplaySize(20, 800);
        this.murDroit.body.setAllowGravity(false);
        this.murDroit.setImmovable(true);

        /** Colliders **/

        this.physics.add.collider(this.balle, this.murDroit);
        this.physics.add.collider(this.balle, this.murGauche);
        this.physics.add.collider(this.balle, this.murHaut);

        this.physics.add.collider(this.balle, this.raquette, function () {
            console.log("touche raquette");
            me.rebond(me.raquette);
        });


        this.creationBrique();
        this.initKeyboard();

        this.Joueur = new Joueur("Joueur")
    }

    creationBrique() {
        let me = this;
        let rect;
        this.obstacles = [];

        for (let m = 0; m < 5; m++) {
            for (let i = 0; i < 9; i++) {

                rect = this.physics.add.sprite(
                    i * 61 + 150,
                    m * 31 + 200,
                    'carre'
                )
                rect.setDisplaySize(60, 30);
                rect.body.setAllowGravity(false);
                rect.setImmovable(true);

                this.obstacles.push(rect);

                this.physics.add.collider(this.balle, rect, function () {
                    me.rebond(me.obstacles[i]);
                    me.disparait(me.obstacles[i + m * 9]);
                    me.Joueur.score++;
                });
            }
        }
        me.obstacles[30].setTintFill(0x51FF00);
        me.obstacles[31].setTintFill(0xFF0000);
    }


    rebond(raquette) {

        let me = this;


        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette = (this.balle.x - raquette.x);

        positionRelativeRaquette = (positionRelativeRaquette / hauteurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette * 2 - 1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityX(this.balle.body.velocity.x + positionRelativeRaquette * hauteurRaquette)

    }

    disparait(obstacle) {
        let me = this;
        obstacle.disableBody(true);
        obstacle.setVisible(false);
    }

    Initiale() {
        let me = this
        this.red = 1
        this.green = 1

        this.balle.setX(this.largeur / 2);
        this.balle.setY(this.largeur - 50);
        this.balle.setVelocityY(-200);
        this.balle.setVelocityX(0);
        this.raquette.setX(this.largeur / 2);


        me.Joueur.vie = 3;
        me.Joueur.score = 0;

        for (let i = 0; i < me.obstacles.length; i++) {
            me.obstacles[i].setVisible(true);
            me.obstacles[i].body.setEnable(true);
        }

    }

    loose() {
        this.balle.setX(this.largeur / 2);
        this.balle.setY(this.largeur - 50);
        this.balle.setVelocityY(-200);
        this.balle.setVelocityX(0);
        this.raquette.setX(this.largeur / 2);

        this.Joueur.vie--;

        if (this.Joueur.vie == 0) {
            alert('Perdu');
            this.Initiale();
        }
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    if (me.raquette.x < me.largeur - 120) {
                        me.raquette.setVelocityX(300)
                    } else {
                        me.raquette.setX(me.largeur - 100)
                        me.raquette.setVelocityX(0)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    if (me.raquette.x > 120) {
                        me.raquette.setVelocityX(-300)
                    } else {
                        me.raquette.setX(100)
                        me.raquette.setVelocityX(0)
                    }
                    break;


            }

        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.raquette.setVelocityX(0)
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.raquette.setVelocityX(0)
                    break;

            }
        });
    }

    update() {
        if (this.balle.y > this.largeur) {
            this.loose();
        }

        if (this.balle.x < 0) {
            this.balle.x = 0
        }
        if (this.balle.x > this.largeur) {
            this.balle.x = this.largeur
        }
            }
}
