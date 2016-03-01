Media = new function() {


  this.setMedia = function(mediaElement) {
    this.media = mediaElement
  }

  this.getCurrentTime = function () {
    return this.media.currentTime
  }

  this.setCurrentTime = function(time) {
    this.media.currentTime = time
  }

  this.play = function() {
    this.media.play()
  }

  this.pause = function() {
    this.media.pause()
  }

  this.playPhrase = function(phraseNum){
    var phrase = Phrases.getPhrase(phraseNum)
    var media = this.media
    media.currentTime = phrase.timing0
    media.play()
    media.ontimeupdate = function(){
        if(media.currentTime >= phrase.timing1){
          media.pause()
          media.ontimeupdate = null
        }
      }

  }

}
