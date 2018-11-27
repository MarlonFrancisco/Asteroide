class clsMeteor {

	constructor() {
		this._url = 'img/asteiroid/Image1.png';
		this._palco = document.querySelector("#palco");
		this._life = 5;
		this.appendMeteor();
	}

	appendMeteor() {
		setInterval(() => {
			if(sessionStorage.getItem('init') == 'true') {

				this._palco.appendChild(this.positionMeteor());

			}
		}, 500);
	}

	attrMeteor() {
		let meteor = document.createElement('img');
		meteor.src = this._url;
		meteor.className = 'meteorController';
		meteor.id = Math.random();

		return meteor;
	}

	positionMeteor() {
		let meteor = this.attrMeteor();
		meteor.style.left = `${Math.floor(Math.random() * 98) + 1}%`;

		// Chamada de função de impacto com o nave
		this.impactMeteorNave(meteor);

		// Remove o meteoro apos ter ultrapassado o limite da tela
		this.removeMeteor(meteor);

		return meteor;
	}

	removeMeteor(meteor) {
		setInterval(() => {
			$(meteor).remove();
		}, 1500);
	}

	impactMeteorNave(meteor) {
		setInterval(() => {
			let positionTopMeteor = $(meteor).offset().top,
			positionleftMeteor = $(meteor).offset().left,
			positionTopNave = $('#controllerNave').offset().top,
			positionleftNave = $('#controllerNave').offset().left;

			if(positionTopMeteor > (positionTopNave - 50) && positionTopMeteor < (positionTopNave + 50)) {
				if(positionleftMeteor > (positionleftNave - 50) && positionleftMeteor < (positionleftNave + 50)) {
					if(meteor.id != 'destroido') {
						this.dano(meteor);
					}
				}
			}

		}, 100);
	}

	dano(meteor) {
		meteor.src = 'img/Asteiroid/Meteoro3.png';
		if(this._life > 1) {
			this._life--;
			document.querySelector('#barraVida').setAttribute('src', `img/barras/disparoLv${this._life}.png`);
		}
		if(this._life == 1) {
			sessionStorage.setItem('init', 'false');
			$('#controllerNave').attr('src', 'img/asteiroid/explosao.png');
		}
	}

}