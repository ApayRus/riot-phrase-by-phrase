Phrases = new function() {

  riot.observable(this)

  this.phrases = [{word0: 0, word1:0, timing0:  0, timing1: 0, text: ""}]

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

  this.words = []

  this.setWords = function(words_array){
    this.words = words_array
    this.words.unshift("")
    this.trigger('words_updated')
  }

  this.getWords = function(){
    return this.words
  }

  this.getWord = function(wordNum){
    return this.words[wordNum]
  }

  this.getPhraseFromWords = function(word0, word1) {
    return this.words.slice(word0,word1).join(" ")
  }
  //return is the words[i] beginning or end of phrase
  this.getWordStatus = function(wordNum){

    if(this.phrases.filter(function(phrase) { return phrase.word1 == wordNum; }).length > 0) return "end_of_phrase";
    else if(this.phrases.filter(function(phrase) { return phrase.word0 == wordNum; }).length > 0) return "beg_of_phrase";
    else return "mid_of_phrase"
  }

}
