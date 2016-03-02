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
    media.currentTime = phrase.timingStart
    media.play()
    media.ontimeupdate = function(){
        if(media.currentTime >= phrase.timingEnd){
          media.pause()
          media.ontimeupdate = null
        }
      }

  }

  this.type = function(link) {
    if (/\.mp3$/.test(link)) return "audio"
    else if (/\.mp4$/.test(link)) return "video"
    else if (/youtu/.test(link)) return "youtube"
    else return "unknown"
  }

}
