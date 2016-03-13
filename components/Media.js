Media = new function() {

var med = this

  this.setMedia = function(mediaElement) {
    this.media = mediaElement
    this.play_mode = "stream"
    var obj = this

    this.media.ontimeupdate = function(e){
      mediaOnTimeUpdate(e.target, obj.play_mode)
    }
    this.media.onpause = function(e){
      mediaOnPause(e.target)
    }

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
    this.play_mode = "phrase"
    Phrases.setCurrentPhrase(phraseNum)
    var phrase = Phrases.getPhrase(phraseNum)
    this.media.currentTime = phrase.timingStart
    this.media.play()

  }

  this.type = function(link) {
    if (/\.mp3$/.test(link)) return "audio"
    else if (/\.mp4$/.test(link)) return "video"
    else if (/youtu/.test(link)) return "youtube"
    else return "unknown"
  }

  this.getLink = function() {
    return this.media.src 
  }


  function mediaOnTimeUpdate(media, play_mode) {
      var currentPhraseNum = Phrases.getCurrentPhraseNum()
      var phrase = Phrases.getPhrase(currentPhraseNum)
      try {
        if(media.currentTime >= phrase.timingEnd){

            if(play_mode == "stream") {
              Phrases.setCurrentPhrase(currentPhraseNum + 1)
            }
            else if(play_mode == "phrase"){
              media.pause()
            }
        }
      }
      catch(e){}


    }

    function mediaOnPause(media) {
      med.play_mode = "stream"
    }


}
