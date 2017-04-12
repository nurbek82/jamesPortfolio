'use strict';
var musicArray = [];


function Music(musicRawDataObj){
 this.name = musicRawDataObj.name;
 this.author= musicRawDataObj.author
 this.source = musicRawDataObj.source
 this.mcategory = musicRawDataObj.mcategory;
}


Music.prototype.aboutToHtml = function() {
 var aboutSource = $('#musicTemplate').html();
 var aboutTemplate = Handlebars.compile(aboutSource);
 return aboutTemplate(this);
};
musicRawData.forEach(function(aboutObject) {
 musicArray.push(new Music(aboutObject));
});

musicArray.forEach(function(about) {
 $('#musictodom').append(about.aboutToHtml());
});
