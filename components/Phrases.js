Phrases = new function() {

  riot.observable(this)

  this.phrases = [{word0: 0, word1:0, timingStart:  0, timingEnd: 0, text: ""}]
  this.language = "unknown"

  this.currentPhrase = 0

  this.set = function(phrases){
    this.phrases = phrases
    this.trigger('updated')
  }

  this.setLanguage = function(lang){
    this.language = lang
  }

  this.setCurrentPhrase = function(phraseNum){
    this.currentPhrase = phraseNum
    this.trigger('currentPhraseChanged', phraseNum)
  }

  this.getCurrentPhraseNum = function() {
    return this.currentPhrase
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
    return this.phrases.length-1
  }

  this.saveToLocalStorage = function() {
    localStorage["PhraseByPhrase " + Media.getLink()] = JSON.stringify(this)
  }

  this.restoreFromLocalStorage = function(mediaLink) {
    try {
      var restoredPhrases = JSON.parse(localStorage["PhraseByPhrase " + mediaLink])
      for (key in restoredPhrases) {
          this[key] = restoredPhrases[key]
      }
      Phrases.setCurrentPhrase(0)
      riot.update()
    }
    catch(e){console.log("No data for restore in localStorage")}

  }

  ///////  T R A N S L A T I O N S /////////
  // Phrases = {   translations: { ru: ["фраза1", "фраза2", "фраза3"], en: ["phrase1", "phrase2", "phrase3"]}  }
  this.translations = {}
  this.currentTranslationLanguage = ""


  this.setTranslationLanguage = function(lang){
    //if setted language not exist , we add object , else: we just
    if (!this.translations[lang]) this.translations[lang] = []
     
    this.currentTranslationLanguage = lang
    this.trigger("translation_language_changed", lang)
  }

  this.getTranslationLanguage = function(){
    return this.currentTranslationLanguage
  }

  this.getTranslation = function(phraseNum) {
    var lang = this.currentTranslationLanguage
    return this.translations[lang][phraseNum]
  }

  this.updateTranslation = function(phraseNum, text) {
    var lang = this.currentTranslationLanguage
    this.translations[lang][phraseNum] = text
  }



}
