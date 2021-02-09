import './style.scss'
import headerVideo from '../resources/background.mp4'
import image1 from '../resources/elektryk.jpg'
import image2 from '../resources/naprawa.jpg'
import image3 from '../resources/lampa.png'
import image4 from '../resources/gniazdko.png'
import image5 from '../resources/plyta-indukcyjna.png'
import image6 from '../resources/odgromienie.png'
import image7 from '../resources/dots.png'
import image8 from '../resources/patern.png'

const video = document.getElementById('header-video')
video.playbackRate = 0.1

const headerText = 'Andrzej Woźniak'
const subHeaderText = 'Usługi elektryczne'

const h1 = document.getElementsByTagName('h1')[0]
h1.innerText = headerText

const subheader = document.createElement('span')
subheader.innerText = subHeaderText
h1.appendChild(subheader)

const carousel = document.createElement('span')
const businessStartYear = new Date(1985,4,9).getFullYear()
const yearsCounter = new Date().getFullYear() - businessStartYear
carousel.innerText = yearsCounter + ' lat doświadczenia ' +  yearsCounter + ' lat doświadczenia'
const carouselText = document.getElementById('carousel-text')
carouselText.appendChild(carousel)
