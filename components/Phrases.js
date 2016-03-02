Phrases = new function() {

  riot.observable(this)

  this.phrases = [{word0: 0, word1:0, timingStart:  0, timingEnd: 0, text: ""}]

  this.set = function(phrases){
    this.phrases = phrases
    this.trigger('updated')
  }

  this.get = function() {
    return this.phrases
  }

  this.getPhrase = function(i){
    return this.phrases[i]
  }

  this.push = function(phrase){
    this.phrases.push(phrase)
    this.trigger('updated')
  }

  this.updatePhrase = function(phraseNum, params) {
    var phrase = this.getPhrase(phraseNum)
    for (key in params) {
        phrase[key] = params[key]
    }
    this.trigger('updated')
}

  this.length = function() {
    return this.phrases.length
  }



}
