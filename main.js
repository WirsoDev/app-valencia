import './styles/index.css'
import './styles/home.css'
import {createBalls, clickBallsHandler} from './balls'

const container = document.querySelector('.app-balls')

createBalls(container, 80)
clickBallsHandler()