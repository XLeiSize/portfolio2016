import Vue from 'vue'
import Data from '../../data'
import App from './app'

export default Vue.extend({
  name: 'Home',
  template: require('./template.html'),
  ready () {
    this.projects = Data.projects
    this.app = new App()
  },
  data () {
    return {
      projects: this.projects
    }
  },
  methods: {
    showProject (index) {
      document.querySelector('.display-project').style.backgroundImage = 'url(' + this.projects[index].img + ')'
      // this.shownSeason = this.data.seasons[index]
    },
    updateProject () {
      let e = window.event
      let posX = (e.clientX * 0.7) + 'px'
      let posY = (e.clientY * 0.7) + 'px'
      document.querySelector('.display-project').style.backgroundPosition = posX + ' ' + posY
    },
    hideProject (index) {
      document.querySelector('.display-project').style.backgroundImage = 'none'
    }
  }
})
