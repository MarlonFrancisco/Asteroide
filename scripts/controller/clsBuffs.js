class clsBuffs {

	constructor() {
		this._palco = document.querySelector("#palco");
		this._buffs = ['life'];
		this.appendBuffs();
	}

	appendBuffs() {
		setInterval(() => {
			if(sessionStorage.getItem('init') == 'true') {

				this._palco.appendChild(this.defineBuff());

			}
		}, Math.floor(Math.random() * 20000) + 10000);
	}

	defineBuff() {
		let buff = document.createElement("img");
		buff.src = `img/buffs/${this._buffs[0]}.png`;
		buff.className = 'estrelaController buff';
		buff.style.left = `${Math.floor(Math.random() * 95) + 1}%`;

		this.impactBuff(buff);
		this.removeBuff(buff);

		return buff;
	}

	removeBuff(buff) {
		setTimeout(() => {
			this._palco.removeChild(buff);
		}, 2000);
	}

	impactBuff(setBuff) {
		setInterval(() => {

			let buff = $(setBuff).offset(),
			nave = $('#controllerNave').offset();

			console.log();

			if(buff.top > (nave.top - 50) && buff.top < (nave.top - 50)) {
				if(buff.left > (nave.left - 50) && buff.left < (nave.left - 50)) {

					this._palco.removeChild(setBuff);
					if(this._life < 5) {
						this._life += 1;
					}
				}
			}

		}, 100);
	}
}