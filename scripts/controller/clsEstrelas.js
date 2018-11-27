class clsEstrelas {

    constructor() {
        this._imgEstrela = 'img/star.png';
        this._url = document.querySelector('#fundo_stars');
        this.appendStars();
    }

    appendStars() {
       setInterval(() => {
           this._url.appendChild(this.setPosition());
           //this.animateStars();
       }, 500);
    }

    attrStar() {
        let star = document.createElement('img');
        star.src = this._imgEstrela;
        star.className = 'estrelaController';

        return star;
    }

    setPosition() {
        let randomPosition = Math.floor(Math.random() * 98) + 1,
        star = this.attrStar();
        star.id = Math.random();
        star.style.left = `${randomPosition}%`;

        this.removeStar(star);

        return star;

    }

    removeStar(star) {
        setInterval(() =>{
            $(star).remove();  
        }, 2000);
    }

    // animateStars() {
    //     $('.estrelaController').animate({
    //         top: '120%'
    //    }, 1000);
    // }
}