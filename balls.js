

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
        const randomX = Math.floor(Math.random() * (container.clientWidth - 30));
        const randomY = Math.floor(Math.random() * (container.clientHeight - 30));
        
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
            balls[i].style.filter = 'blur(10px)'
        }
        if(ballWith == 30){
            balls[i].style.filter = 'blur(5px)'
        }
        if(ballWith == 50){
            balls[i].style.filter = 'blur(2px)'
        }
    }
}


export{createBalls} 