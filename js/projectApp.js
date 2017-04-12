
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
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  return template(this);
};





$(function(){
  $.ajax({
    url: '/js/projectobjects.json',
    dataType : "json",
  }).done(function(data) {
    console.log(data);
    console.log('request done: ' + new Date());
    data.forEach(function(projectObject) {
      projectsArray.push(new Project(projectObject));
    });
    projectsArray.forEach(function(pjects) {
      $('#projectstodom').append(pjects.toHtml());
    });
    $('section.tab-content').hide();
    $('#aboutMe').fadeIn();
    view.populateFilter();
  })
  console.log('request started: ' + new Date());
});

view.handleCategoryFilter();
view.handleMainNav();
