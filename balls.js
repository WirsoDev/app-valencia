
function createBalls(container, nrBalls){

    const colors = [
        '#50543D',
        '#D2B07E',
        '#622C25',
        '#E1CDB8'
    ]

    const sizes = [
        '100px',
        '80px',
        '70px',
        '60px',
        '50px',
        '30px',
        '20px'

    ].reverse()

    let racio = Math.floor(nrBalls/sizes.length)
    let sizeIncrement = 0
    let divisor = 0
    for(let i = 0; i < nrBalls; i++){

        const ball = document.createElement('div')
        ball.classList.add('ball')
        ball.id = `ball${i}`
        ball.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))]
        //let newSize = sizes[Math.floor((Math.random() * sizes.length))]
        let newSize = sizes[sizeIncrement]
        ball.style.width = newSize
        ball.style.height = newSize

        container.appendChild(ball)
        const randomX = Math.floor(Math.random() * (container.clientWidth - 10));
        const randomY = Math.floor(Math.random() * (container.clientHeight - 10));
        
        ball.style.left = `${randomX}px`;
        ball.style.top = `${randomY}px`;
        
        //reset sizeIncrement 
        if(divisor == racio){
            divisor = 0
            sizeIncrement ++
        }else{
            divisor ++
        }
    }

    //set blur on smaller balls 
    const balls = document.querySelectorAll('.ball')

    for (let i = 0; i < balls.length; i++) {

        const ballWith = balls[i].offsetWidth
        if(ballWith == 20){
            balls[i].style.filter = 'blur(8px)'
        }
        if(ballWith == 30){
            balls[i].style.filter = 'blur(6px)'
        }
        if(ballWith == 50){
            balls[i].style.filter = 'blur(3.5px)'
        }
        if(ballWith == 60){
            balls[i].style.filter = 'blur(2px)'
        }
        if(ballWith == 70){
            balls[i].style.filter = 'blur(1.5px)'
        }
    }
}


function clickBallsHandler(){

    //allBalls.forEach((ball)=>{
    //    ball.addEventListener('click', ()=>{
    //        console.log('click')
    //    })
    //})

}

function requestDeviceOrientation () {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
    .then(permissionState => {
    if (permissionState === 'granted') {
    window.addEventListener('deviceorientation', () => {
        console.log('granted')
    });
    }
    })
    .catch(console.error);
    } else {
    // handle regular non iOS 13+ devices
    console.log ("not iOS");
    }
  }



function ballsParalax(){


    let ball2 = document.querySelectorAll('.ball')

    window.addEventListener("deviceorientation", handleOrientation);

    function handleOrientation(event) {

        //get inicial gyro state
        var z = Math.round(event.alpha); //left and right
        var x = Math.round(event.beta); // up and down
        var y = Math.round(event.gamma); // racio

        // Do stuff with the new orientation data
        //x = x - 90
        ball2.forEach((ball)=>{
            // afect balls by "distance"
            defineTranslation(ball, x, y)
            
        })
    }
}


// helpers 

function defineTranslation(element, x, y, scalePassage){

    let objWith = element.clientHeight

    if(objWith == '100'){
        element.style.transform = `translateY(${x}px) translateX(${y}px) `;
        return
    }
    if(objWith == '80'){
        element.style.transform = `translateY(${x * 1.5}px) translateX(${y * 1.5}px)`;
        return
    }
    if(objWith == '70'){
        element.style.transform = `translateY(${x * 2}px) translateX(${y * 2}px)`;
        return
    }
    if(objWith == '60'){
        element.style.transform = `translateY(${x * 2}px) translateX(${y * 2}px)`;
        return
    }
    if(objWith == '50'){
        element.style.transform = `translateY(${x * 2.5}px) translateX(${y * 2.5}px)`;
        return 
    }
    if(objWith == '30'){
        element.style.transform = `translateY(${x * 3}px) translateX(${y * 3}px)`;
        return
    }
    if(objWith == '20'){
        element.style.transform = `translateY(${x * 3.5}px) translateX(${y * 3.5}px)`;
        return
    }
}


export{createBalls, clickBallsHandler, ballsParalax, requestDeviceOrientation} 