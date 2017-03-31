'use strict';
var projectsArray = [];


function Projects(name, description, url){
  this.name = name;
  this.description = description;
  this.url = url;
  projectsArray.push(this);
}
