Phrases = new function() {

  riot.observable(this)

  this.phrases = [{word0: 0, word1:0, timing0:  0, timing1: 0, text: ""}]
  //
  //{word0: 0, word1:0, timing0:  0, timing1: 0, text: ""}
  //word0-word1 - indexes of first and last words of phrase in array words[]
  //timing0-timing1 - timestamp of beginning and end of phrase in Media file
  //text - whole text of phrase

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
    this.trigger('update')
}

}
