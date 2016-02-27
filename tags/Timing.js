Timing = new function() {

  riot.observable(this)

  this.timing = [0]

  this.set = function(timing){
    this.timing = timing
    this.trigger('updated')
  }

  this.get = function(){
    return this.timing
  }

  this.push = function(t){
    this.timing.push(t)
    this.trigger('updated')
  }
}
