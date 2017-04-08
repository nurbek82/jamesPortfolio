'use strict';
var projectsArray = [];


function Project(rawDataObj){
  this.name = rawDataObj.name;
  this.description = rawDataObj.description;
  this.url = rawDataObj.url;
  this.date = rawDataObj.date;
  this.category = rawDataObj.category;
}

Project.prototype.toHtml = function() {
  $('section.template').hide('.template');
  var source = $('#template').html();
  var template = Handlebars.compile(source);



  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return template(this);
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

projectsArray.forEach(function(pjects) {
  $('#projectstodom').append(pjects.toHtml());
});
