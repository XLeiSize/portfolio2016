import Particle from './particle'
class Emitter {
  constructor (scene, options) {
    this.scene = scene
    this.pool = []
    this.particles = []
    this.mousePosition = this.scene.renderer.plugins.interaction.mouse.global
    this.options = {
      x: this.mousePosition.x,
      y: this.mousePosition.y,
      color: '0xFF0000'
    }
    this.currentTime = 0
    this.createPool(20000, this.options)
    this.throw(1)
    console.log(this.scene)
  }

  // Creer le Pool
  createPool (nb, options) {
    for (let i = 0; i < nb; i++) {
      let p = new Particle(options)
      this.pool.push(p)
    }
  }

 // Recupere le premier particule du pool, puis l'enleve
  getParticleFromPool () {
    let p = this.pool[0]
    this.pool.splice(0, 1)
    return p
  }

  // Remet la particule dans le pool
  returnParticleToPool (p) {
    p.reset()
    this.pool.push(p)
  }

  // fonction throw qui affiche les particules
  throw (nb) {
    for (let i = 0; i < nb; i++) {
      let p = this.getParticleFromPool()
      p.x = this.mousePosition.x
      p.y = this.mousePosition.y
      this.scene.stage.children[0].mask = p
      this.particles.push(p)
      this.scene.addChild(p)
    }
  }

  update (dt) {
    for (var i = 0; i < this.particles.length; i++) {
      let p = this.particles[i]
      if (p.isDead) {
        this.returnParticleToPool(p)
        this.particles.splice(i, 1)
        this.scene.removeChild(p)
      }
      p.update(dt)
    }
    this.throw(1)
  }
}
export default Emitter
