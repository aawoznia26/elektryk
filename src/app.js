import './style.scss';
import headerVideo from '../resources/background.mp4';
import image1 from '../resources/electric-1080584_640.jpg';

const headerText = 'Andrzej Woźniak';
const subHeaderText = 'Usługi elektryczne od'
const businessStartYear = new Date(1985,4,9).getFullYear()

const video = document.getElementById('header-video');
video.playbackRate = 0.1;

const yearsCounter = new Date().getFullYear() - businessStartYear

const h1 = document.getElementsByTagName('h1')[0];
h1.innerText = headerText;

const subheader = document.createElement('span')
subheader.innerText = subHeaderText + ' ' + yearsCounter + ' lat';
h1.appendChild(subheader)