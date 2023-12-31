import './styles/index.css'
import './styles/home.css'
import './styles/alertbox.css'
import './styles/contacts.css'
import { createBalls, clickBallsHandler, ballsParalax, requestDeviceOrientation} from './balls'
import { mainBtn } from './btnshandler'
import { emailMain } from './emailHandler'
import {crateAlertBox} from './alertBox'
import { contactsMain } from './contactsHandler'
import {DataHandler} from './sheets'

//ping!
const ping = new DataHandler
ping.postNewPing({DATE: new Date()})

const container = document.querySelector('.app-balls')

function main(){
    createBalls(container, 90)
    clickBallsHandler()
    ballsParalax()
    mainBtn()
    emailMain()
    requestDeviceOrientation()
    contactsMain()
}

main()
