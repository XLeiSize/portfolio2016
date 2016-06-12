import Vue from 'vue'
import Data from '../../data'
import 'gsap'

export default Vue.extend({
  name: 'Home',
  template: require('./template.html'),
  ready () {
    this.projects = Data.projects
    this.currentProject = this.projects[0]
    document.querySelector('.display-project').style.backgroundImage = 'url(' + this.projects[0].img + ')'
    // this.app = new App()
  },
  data () {
    return {
      projects: this.projects,
      currentProject: this.currentProject
    }
  },
  methods: {
    previewProject (index) {
      document.querySelector('.display-project').style.backgroundImage = 'url(' + this.currentProject.img + ')'
    },
    showProject (index) {
      if (this.currentProject !== this.projects[index]) {
        let el = document.querySelector('.project-infos')
        let tl = new TimelineMax({
          delay: 0.2
        })
        tl.from(el, 0.1, {
          opacity: 0,
          y: 300,
          ease: Power0.easeInOut
        })
        tl.to(el, 0.1, {
          opacity: 1,
          y: 0,
          ease: Power0.easeInOut
        })
        document.querySelector('.display-project').style.backgroundImage = 'url(' + this.projects[index].img + ')'
        let current = document.querySelectorAll('.projects__item')[index]
        if (document.querySelector('.projects__item.active')) {
          document.querySelector('.projects__item.active').classList.remove('active')
        }
        current.classList.add('active')
        this.currentProject = this.projects[index]
      }
    },
    updateMask () {
      let e = window.event
      let posX = (e.clientX - window.innerWidth) + 'px'
      let posY = (e.clientY - window.innerHeight) + 'px'

      document.querySelector('.mask').style.backgroundPosition = posX + ' ' + posY
    },
    hideProject (index) {
      document.querySelector('.display-project').style.backgroundImage = 'url(' + this.currentProject.img + ')'
    },
    showAbout () {
      document.querySelector('#about').style.display = 'block'
      let el = document.querySelector('#about')
      let tl = new TimelineMax({
        delay: 0
      })
      tl.to(el, 0.5, {
        y: window.innerHeight,
        ease: Cubic.In
      })
    },
    hideAbout () {
      let el = document.querySelector('#about')
      let tl = new TimelineMax({
        delay: 0.2
      })
      tl.to(el, 1, {
        y: -window.innerHeight,
        ease: Cubic.Out
      })
      // document.querySelector('#about').style.display = 'none'
    }
  }
})
