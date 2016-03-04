Media = new function() {

var med = this

  this.setMedia = function(mediaElement) {
    this.media = mediaElement
    this.play_mode = "stream"
    var obj = this

    this.media.ontimeupdate = function(e){
      mediaOnTimeUpdate(e.target, obj.play_mode)
    }

    /*  mediaElement.onpause = function(){
        mediaElement.ontimeupdate = null
      }
    */

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
    Phrases.setCurrentPhrase(phraseNum)
    this.media.currentTime = phrase.timingStart
    this.media.play()
    this.play_mode = "phrase"
  }

  this.type = function(link) {
    if (/\.mp3$/.test(link)) return "audio"
    else if (/\.mp4$/.test(link)) return "video"
    else if (/youtu/.test(link)) return "youtube"
    else return "unknown"
  }


  function mediaOnTimeUpdate(media, play_mode){

      var phrase = Phrases.getPhrase(Phrases.getCurrentPhrase())

        if(media.currentTime >= phrase.timingEnd){

          if(play_mode == "phrase") {
            med.play_mode = "stream"
            media.pause()
          }
          Phrases.setCurrentPhrase(Phrases.getCurrentPhrase()+1)
          //media.ontimeupdate = null
          //console.log(media.currentTime, phrase.timingEnd)
        }

    }


}
