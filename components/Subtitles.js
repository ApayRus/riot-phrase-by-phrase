Subtitles = new function(){

  this.subs = []

  this.type = function(text){
    if (/^WEBVTT/.test(text)) return "webvtt"
    else if(/^\d\s+?\d\d:\d\d:\d\d\.\d\d\d --> \d\d:\d\d:\d\d\.\d\d\d/.test(text)) return "srt"
    else if(/Dialogue: 0,\d:\d\d:\d\d.\d\d,\d:\d\d:\d\d.\d\d,Default,,0,0,0,,/.test(text)) return "ass"
    else if(/talk-transcript__fragment/.test(text)) return "ted"
    else return "unknown"
  }

  this.push = function(phrase){
    this.subs.push(phrase)
  }

  this.parseWebvttSrt = function(text){
    //text.replace(/WEBVTT\s+/, "")
    var subs_array = text.split("\n\n")
    var subs = [0]
    var sub = {}
    var srt_timing_array,  srt_timing_start_array, srt_timing_end_array, line_array = []

    if(subs_array[0] != "WEBVTT") subs_array.unshift("SRT")

    for (var i=1; i < subs_array.length; i++) {

      line_array = subs_array[i].split("\n")
      //00:00:50.000 --> 00:00:52.780

        srt_timing_array = line_array[1].replace(/,/g,'.').split(" --> ")

          srt_timing_start_array = srt_timing_array[0].split(":")
          srt_timing_end_array = srt_timing_array[1].split(":")

            sub.timingStart = (parseFloat(srt_timing_start_array[2]) + parseFloat(srt_timing_start_array[1]*60) + parseFloat(srt_timing_start_array[0]*3600)).toFixed(2)
            sub.timingEnd = (parseFloat(srt_timing_end_array[2]) + parseFloat(srt_timing_end_array[1]*60) + parseFloat(srt_timing_end_array[0]*3600)).toFixed(2)

      sub.text = line_array.slice(2).join(" ")
      subs.push(sub)
      sub = {}

    }
    return subs

  }

}
