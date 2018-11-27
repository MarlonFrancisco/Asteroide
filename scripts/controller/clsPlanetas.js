class clsPlanetas {

	constructor() {
		this._planetas = ['img/planetas/planeta1', 'img/planetas/planeta2', 'img/planetas/planeta3'];
		this._fundo = document.querySelector("#fundo_stars");
		this.appendPlanets();
	}

	appendPlanets() {
		setInterval(() => {
			let planeta = document.createElement("img");
			planeta.src = `img/planetas/planeta${Math.floor(Math.random() * 3) + 1}.png`;
			planeta.className = "estrelaController";
			planeta.style.left = `${Math.floor(Math.random() * 95) + 1}%`;
			this._fundo.appendChild(planeta);

			this.removePlanet(planeta);
		}, 1000);
		
	}

	removePlanet(planeta) {
		setInterval(() => {
			try {
				this._fundo.removeChild(planeta);
			} catch {
				// pass
			}
		}, 2000);
	}

}