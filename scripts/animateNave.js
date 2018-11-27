let verify = setInterval(() => {
    if(sessionStorage.getItem('init') == 'true') {
        animate();
    }
}, 1000);

function animate() {
    let c = 0;
    let time = setInterval(() => {
        if(sessionStorage.getItem("init") == 'true') {
           document.querySelector('#controllerNave').src = `img/Nave_especial/Nave01/Originais/Nave${c}.png`;
        }
        c++;

        if(c >= 6) {
            clearInterval(time);
        }
    }, 700);
}