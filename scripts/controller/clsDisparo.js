class clsDisparo {
    
    constructor() {
        this._url = 'img/disparo.png';
        this._nave;
        this._energia = 0;
        this._placar = document.querySelector('#scoreMeteor');
        this.meteor_destroyed = 0;
        this._consumoEnegia = false;
        this._limitEnergia = false;
        this._barraEnergia = document.querySelector('#barraEnergia');
        this._palco = document.querySelector("#palco");
        this.initSettings();
        this.keyUp();
    }

    initSettings() {
        let init = setInterval(() => {
            if(sessionStorage.getItem('init') == 'true') {

                // Captura o objeto da nave
                this._nave = document.querySelector('#controllerNave');

                // Tornar visivel a barra de energia
                document.querySelector('#barra_energia').style.visibility = 'visible';
                
                // Inicia as configuraçoes da nave
                this.appendShot();

				// Limpar a chamada da função
				clearInterval(init);
			}
        }, 1000);
    }

    attrShot() {
        let shot = document.createElement("img");
        shot.src = this._url;
        shot.id = Math.random();
        shot.className = 'disparo';
        shot.setAttribute('width', 20);
        shot.setAttribute('height', 100);


        return shot;
    }

    appendShot() {
        this.addEventListenerAll('keydown keyup');
    }

    addEventListenerAll(eventos) {
        eventos.split(' ').forEach(e => {
            document.addEventListener(e, event => {
                if(sessionStorage.getItem('init') == 'true') {
                    
                    // Verifica se chegou ao limite de energia
                    if(!this._limitEnergia) {
                        if(e == 'keydown' && event.which == 32) {

                            this._consumoEnegia = true;
                            this.keyDown();
                        } 
                    }

                    if (e == 'keyup' && event.which == 32) {
                        this._consumoEnegia = false;
                        let consumo = setInterval(() => {
                            this.keyUp();

                            if(this._consumoEnegia) { 
                                clearInterval(consumo);
                            }
                        }, 100);
                    }
                }
                
            })
        })
    }

    keyUp() {
        if(this._energia >= 0) {
            this._energia--;
        }

        this.downConsumoEnergia();
    }

    keyDown() {
        let positionNaveTop = $(this._nave).offset().top;
        let positionNaveLeft = $(this._nave).offset().left;
        if(this._energia <= 50) {
            this._energia++;
        }

        this.shot(positionNaveTop, positionNaveLeft);
    }

    shot(positionNaveTop, positionNaveLeft) {
        let shot = this.attrShot();

        shot.style.top = `${eval(positionNaveTop - 100)}px`;
        shot.style.left = `${eval(positionNaveLeft + 25)}px`;

        this._palco.appendChild(shot);
        
        this.impactMeteor(shot);
        // Remove o disparo apos um determinado tempo
        this.clearShot(shot);

        // Aumenta o consumo de energia
        this.upConsumoEnergia();
    }

    clearShot(shot) {
        setInterval(() =>{
            $(shot).remove();
        }, 900);
    }

   

    upConsumoEnergia() {
        if(this._consumoEnegia) {

            if(this._energia > 10 && this._energia < 20) {
                this._barraEnergia.src = 'img/barras/disparoLv2.png';
            } else if(this._energia > 20 && this._energia < 30) {
                this._barraEnergia.src = 'img/barras/disparoLv3.png';
            } else if(this._energia > 30 && this._energia < 40) {
                this._barraEnergia.src = 'img/barras/disparoLv4.png';
            } else if(this._energia > 40 && this._energia <= 50) {
                this._barraEnergia.src = 'img/barras/disparoLv5.png';

                this._limitEnergia = true;

                setTimeout(() => {
                    this._limitEnergia = false;
                }, 5000);
            }
        }

    }
    
    downConsumoEnergia() {

        if(!this._consumoEnegia) {
            if(this._energia <= 10) {
                this._barraEnergia.src = 'img/barras/disparoLv1.png';
            } else if(this._energia > 10 && this._energia < 20) {
                this._barraEnergia.src = 'img/barras/disparoLv2.png';
            } else if(this._energia > 20 && this._energia < 30) {
                this._barraEnergia.src = 'img/barras/disparoLv3.png';
            } else if(this._energia > 30 && this._energia < 40) {
                this._barraEnergia.src = 'img/barras/disparoLv4.png';
            } else if(this._energia > 40) {
                this._barraEnergia.src = 'img/barras/disparoLv5.png';
            }
        }   
    }

    impactMeteor(shot) {
        setInterval(() => {
            let meteors = document.querySelectorAll('.meteorController'),
            shotTop = $(shot).offset().top,
            shotLeft = $(shot).offset().left;

            meteors.forEach((value) => {
                let meteorTop = $(value).offset().top,
                meteorLeft = $(value).offset().left;


                if(meteorTop > (shotTop - 20) && meteorTop < (shotTop + 20)) {
                    if(meteorLeft > (shotLeft - 60) && meteorLeft < (shotLeft + 60)){
                        this.removeMeteor(value);
                    }
                }
            })
        }, 10);   
        
    }

    removeMeteor(meteor) {
        meteor.src = 'img/Asteiroid/Meteoro3.png';
        meteor.id = 'destroido';
    }
}