class clsNave {

	constructor() {
		this._url = "img/Nave_especial/Nave01/Originais/Nave0.png";
		this._palco = document.querySelector('#palco');
		this._nave;
		this._leftNave;
		this._topNave;
		this.appendNave();
	}

	appendNave() {
		let verify = setInterval(() =>{
			if(sessionStorage.getItem('init') == 'true') {
				document.querySelector('#palco').appendChild(this.attrNave());

				this._nave = document.querySelector('#controllerNave');

				this.moveNave();

				// Limpar a chamada da função
				clearInterval(verify);
			}
		}, 1000);
	}

	attrNave() {
		let nave = document.createElement('img');
		nave.src = this._url;
		nave.id = 'controllerNave';

		return nave;
	}

	moveNave() {
		document.addEventListener('keypress', event => {
			if(sessionStorage.getItem('init') == 'true') {
				
				this._leftNave = $(this._nave).css('left').replace('px', '');
				this._topNave = $(this._nave).css('top').replace('px', '');

				if(event.which == 97) {
					this.moveLeft();
				} else if(event.which == 100) {
					this.moveRight();
				}

				if(event.which == 119) {
					this.moveUp();
				} else if(event.which == 115) {
					this.moveDown();
				}
			}

		});
	}

	moveLeft() {
		if(this._leftNave > 0) {	
			this._nave.style.left = `${this._leftNave - 150}px`;
		}
	}

	moveRight() {
		if(this._leftNave < (window.innerWidth - 85)) {	
			this._nave.style.left = `${parseFloat(this._leftNave) + parseFloat(150)}px`;
		}
	}

	moveUp() {
		if(this._topNave > 0) {	
			this._nave.style.top = `${this._topNave - 100}px`;
		}
	}

	moveDown() {
		if(this._topNave < (window.innerHeight - 130)) {	
			this._nave.style.top = `${parseFloat(this._topNave) + parseFloat(150)}px`;
		}
	}
}