import './styles/index.css'
import './styles/home.css'
import {createBalls, clickBallsHandler, ballsParalax} from './balls'
import {mainBtn} from './btnshandler'
import { emailMain } from './emailHandler'

const container = document.querySelector('.app-balls')


function main(){

    createBalls(container, 90)
    clickBallsHandler()
    ballsParalax()
    mainBtn()
    emailMain()

}

main()
