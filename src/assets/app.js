import {TweenMax, TimelineMax} from 'gsap'

window.addEventListener('load', () => {
    new App()
})

class App {

    constructor() {
        this.os = navigator.platform

        this.handleOS()
        this.handleDisabledLinks()
        this.handlePageLoading()
    }

    handleOS() {

        let osLabel = document.querySelector('.js-os');

        switch (this.os) {
            case 'MacIntel' || 'Mac68K' || 'MacPPC' || 'iPhone' || 'iPad':
                osLabel.innerHTML = 'Mac'
                osLabel.parentElement.classList.add('is-mac')
                break;
            case 'Win32' || 'Win16' || 'Windows':
                osLabel.innerHTML = 'Windows'
                osLabel.parentElement.classList.add('is-windows')
                break;
            case 'Linux':
                osLabel.innerHTML = 'Linux'
                osLabel.parentElement.classList.add('is-linux')
                break;
            default:
                break;
        }
    }

    handleDisabledLinks() {
        let links = document.querySelectorAll('.is-disabled');

        links.forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
            })
        })
    }

    handlePageLoading() {

        let masterTL = new TimelineMax({
            force3D: true,
            delay:1
        })

        let logos = document.querySelector('.c-logos'),
            figmaLogo = logos.children[0],
            divider = logos.children[1],
            panelLogo = logos.children[2],
            panelShot = document.querySelector('.c-shot'),
            content = document.querySelector('.l-text'),
            bg = document.querySelector('.bg');


        masterTL
            .from(figmaLogo, 1, {opacity:0, x: -40}, 's-logo')
            .from(divider, 1, {opacity:0}, 's-logo')
            .from(panelLogo, 1, {opacity:0, x: 40}, 's-logo')
            .from(logos, 0.5, { y: ((window.innerHeight / 2) - logos.clientHeight - 80), delay:0.5 })

        masterTL
            .from(panelShot, 0.5, { 
                opacity:0, 
                y: 40, 
                scale: 0.95, 
                transformOrigin: 'center bottom'
            }, 's-shot')
            .from(bg, 1, {
                opacity:0,
                scale: 0.9, 
                transformOrigin: 'center bottom'
            }, 's-shot')

        masterTL
            .staggerFrom(content.children, 0.5, { opacity:0, y: 40}, 0.1 )
            .from(['header', 'footer'], 1, { opacity:0})


    }
} 