Words = new function(){

  riot.observable(this)
  this.words = []

  this.set = function(words_array){
    this.words = words_array
    this.words.unshift("")
    this.trigger('words_updated')
  }

  this.setLang = function(lang){
    this.lang = lang
    this.trigger('words_updated')
  }

  this.getLang = function(){
    return this.lang
  }



  this.get = function(){
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

    if(Phrases.get().filter(function(phrase) { return phrase.word1 == wordNum; }).length > 0) return "end-of-phrase";
    else if(Phrases.get().filter(function(phrase) { return phrase.word0 == wordNum; }).length > 0) return "beg-of-phrase";
    else return "mid-of-phrase"
  }

}
