'use strict';
var projectsArray = [];


function Project(opts){
  this.name = opts.name;
  this.description = opts.description;
  this.url = opts.url;
  this.date = opts.date;
  this.category = opts.category;
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.template').clone();
  console.log('go: ', $newProject);

  $newProject.removeClass('template');
  console.log('re: ', $newProject);


  if (!this.date) $newProject.addClass('draft');
  $newProject.data('category', this.category);



  $newProject.find('h1').html(this.name);
  $newProject.find('.description').html(this.description);
  $newProject.find('a').html('Hover over this area to see a preview. Click to go to the site.');
  $newProject.find('a').attr('href', this.url);
  $newProject.find('time').attr('datetime', this.date);
  console.log('fin: ', $newProject);


  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(projectObject) {
  projectsArray.push(new Project(projectObject));
});

projectsArray.forEach(function(a) {
  $('#projectstodom').append(a.toHtml());
});

$(document).ready(function() {
  $(".livepreview").livePreview();
});
