import './styles/index.css'
import './styles/home.css'
import {createBalls, clickBallsHandler, ballsParalax} from './balls'

const container = document.querySelector('.app-balls')


function main(){

    createBalls(container, 90)
    clickBallsHandler()
    ballsParalax()

}

main()
