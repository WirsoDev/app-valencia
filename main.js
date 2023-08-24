import './styles/index.css'
import './styles/home.css'
import {createBalls} from './balls'

const container = document.querySelector('.app-balls')

createBalls(container, 80)
