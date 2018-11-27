class clsSettings {

	constructor() {
		sessionStorage.setItem('init', 'false');
		this._initGame = document.querySelector('#init');
		this._barraVida = $('#barraVida').hide();
		this.initGame();
	}

	initGame() {
		this._initGame.addEventListener('click', event => {
			let remove = document.querySelector('#op_jogo');
			this._barraVida = $("#barraVida").show();
			document.querySelector('#tela_inicial').removeChild(remove);

			this.gameOver();
			sessionStorage.setItem('init', 'true');
		});
	}

	gameOver() {
		let verify = setInterval(() => {
			if(sessionStorage.getItem('init') == 'false') {
				let div = document.createElement('div'),
				aHome = document.createElement('h1');

				div.id = 'op_jogo';
				aHome.className = 'opcoes';
				aHome.onclick = function() { window.location.href = 'index.html'; };

				aHome.innerHTML = 'Recomeçar partida?';

				div.appendChild(aHome);
				document.querySelector('#palco').appendChild(div);

				clearInterval(verify);
			}
		}, 1000);
	}

}