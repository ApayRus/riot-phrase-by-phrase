Subtitles = new function(){

  this.type = function(text){
    if (/^WEBVTT/.test(text)) return "webvtt"
    else if(/^\d\s+?\d\d:\d\d:\d\d\.\d\d\d --> \d\d:\d\d:\d\d\.\d\d\d/.test(text)) return "srt"
    else if(/Dialogue: 0,\d:\d\d:\d\d.\d\d,\d:\d\d:\d\d.\d\d,Default,,0,0,0,,/.test(text)) return "ass"
    else if(/talk-transcript__fragment/.test(text)) return "ted"
    else return "unknown"
  }

}
