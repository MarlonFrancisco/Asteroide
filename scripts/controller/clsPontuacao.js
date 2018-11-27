class clsPontuacao {

	constructor() {
		this._urlScoreDistance = document.querySelector("#scoreDistance");
		this._init = false;
		this._distance = 0;
		this.initPoint();
		this._scoreDistance;
	}

	initPoint() {
		setInterval(() =>{
			if(sessionStorage.getItem('init') == 'true') {
				this._init = true;
				this._urlScoreDistance.innerHTML = 'Distancia percorida: ' + this._distance;
				this._scoreDistance = this.scoreDistance();
			} else {
				this.init = false;
			}
		}, 1000);
	}

	scoreDistance() {
		let scoreDistance = setInterval(() => {
			if(this._init) {
				this._distance++;
				this._urlScoreDistance.innerHTML = 'Distancia percorida: ' + this._distance;
			}

			if(sessionStorage.getItem('init') == 'false') {
				clearInterval(scoreDistance);
			}
		}, 500);
		
	}

}