'use strict';
var musicArray = [];


function Music(musicRawDataObj){
 this.name = musicRawDataObj.name;
 this.author= musicRawDataObj.author
 this.source = musicRawDataObj.source
 this.mcategory = musicRawDataObj.mcategory;
}


Music.prototype.musicToHtml = function() {
 var musicSource = $('#musicTemplate').html();
 var musicTemplate = Handlebars.compile(musicSource);
 return musicTemplate(this);
};


$(function(){
  $.ajax({
    url: '/js/musicobjects.json',
    dataType : "json",
  }).done(function(data) {
    console.log(data);
    console.log('request done: ' + new Date());
    data.forEach(function(musicObject) {
      musicArray.push(new Music(musicObject));
    });
    musicArray.forEach(function(music) {
      $('#musictodom').append(music.musicToHtml());
    });
  })
  console.log('request started: ' + new Date());
});
