'use strict';
var projectsArray = [];


function Project(opts){
  this.name = opts.name;
  this.description = opts.description;
  this.url = opts.url;
  this.date = opts.date;
  this.category = opts.category;
  projectsArray.push(this);
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.template').clone();


  $newProject.removeClass('template');
  console.log($newProject);

  if (!this.date) $newProject.addClass('draft');
  $newProject.data('category', this.category);



    $newProject.find('h1').html(this.name);
    $newProject.find('.description').html(this.description);
    $newProject.find('a').attr('href', this.url);
    $newProject.find('time').attr('datetime', this.date);
    console.log($newProject);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(projectObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  projectsArray.push(new Project(projectObject));
  console.log(projectObject);
});

projectsArray.forEach(function(a) {
  $('#projectstodom').append(a.toHtml());
});

// $(document).ready(function() {
//   $(".livepreview").livePreview();
// });
