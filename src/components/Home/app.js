import Scene from './scene/scene'
import { Sprite, Container } from 'pixi.js'
import Emitter from './lib/emitter'

const TweenMax = require('tweenmax')
// import NumberUtils from './utils/number-utils'

let angle = 0

class App {

  constructor () {
    this.DELTA_TIME = 0
    this.LAST_TIME = Date.now()

    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene = new Scene()
    let root = document.body.querySelector('.display-project')
    root.appendChild(this.scene.renderer.view)

    this.container = new Container()
    /* eslint-disable */
    this.bgFront = new Sprite.fromImage('/static/img/bg/audio-vizualisation.jpg')
    /* eslint-enable */
    this.bgFront.anchor.x = 0
    this.bgFront.anchor.y = 0
    // this.bgFront.width = window.innerWidth
    // this.bgFront.height = window.innerHeihgt
    this.container.addChild(this.bgFront)

    this.scene.addChild(this.container)

    this.emitter = new Emitter(this.scene)

    // this.ball = new Graphics()
    // this.ball.beginFill(0xFF0000)
    // this.ball.drawCircle(0, 0, 100)
    // this.ball.y = window.innerHeight / 2
    this.container.mask = this.emitter.graphics

    console.log(this)
    this.addListeners()
  }

  /**
   * addListeners
   */
  addListeners () {
    window.addEventListener('resize', this.onResize.bind(this))
    TweenMax.ticker.addEventListener('tick', this.update.bind(this))
  }

  /**
   * update
   * - Triggered on every TweenMax tick
   */
  update () {
    this.scene.renderer.backgroundColor = 0xFEFEFE
    this.DELTA_TIME = Date.now() - this.LAST_TIME
    this.LAST_TIME = Date.now()

    this.emitter.update(this.DELTA_TIME)
    angle += 0.05

    // this.ball.x = (window.innerWidth / 2) + Math.sin(angle) * 100

    // this.ball.x = this.mousePosition.x
    // this.ball.y = this.mousePosition.y

    this.scene.render()
  }

  /**
   * onResize
   * - Triggered when window is resized
   * @param  {obj} evt
   */
  onResize (evt) {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene.resize(this.width, this.height)
  }

}

export default App
