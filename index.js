function main() {
    const canvas = document.getElementById('canvas');

    let x = 450;
    let y = 450;

    createGradient();
    createHexagon();

    function createGradient() {
        const ctx = canvas.getContext("2d");

        let grd = ctx.createRadialGradient(x, y, 45, x, y, 230);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.4, "black");

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 1000, 1000);

        let radius = 140;
        let step = 1;
        setInterval(function () {
            if(radius == 240){
                step = (-1);
            }
            else if(radius === 160){
                step = 1;
            }
            radius += step
            let grd = ctx.createRadialGradient(x, y, 45, x, y, radius);
            grd.addColorStop(0, "red");
            grd.addColorStop(0.4, "black");

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, 1000, 1000);
            createHexagon()
        }, 30);
    }
    function createHexagon() {
        let c = canvas.getContext('2d'), side = 0.5, size = 100;

        c.beginPath();
        c.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

        for (side; side < 7; side++) {
            c.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
        }

        c.fillStyle = "black";
        c.fill();
    }
    canvas.addEventListener('click', function(x){
        let offsetX = x.offsetX;
        let offsetY = x.offsetY;
        if(350 <= offsetX && offsetX <= 550 && 350 <= offsetY && offsetY <= 550){
            console.log('yes')
        }
    })
}
