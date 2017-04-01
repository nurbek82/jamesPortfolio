'use strict';
var projectsArray = [];


function Projects(opts){
  this.name = opts.name;
  this.description = opts.description;
  this.url = opt.url;
  this.date = opt.date
  projectsArray.push(this);
};

// Projects.prototype.toHtml = function() {
//   var $newProject = $('section.template').clone();
//
//
//   $newArticle.removeClass('template');
//
//   if (!this.publishedOn) $newArticle.addClass('draft');
//   $newArticle.data('category', this.category);
//
//
//
//     $newArticle.findClass('protitle').html(this.name);
//     $newArticle.find('a').html(this.author);
//     $newArticle.find('a').attr('href', this.authorUrl);
//     $newArticle.find('time').attr('datetime', this.publishedOn);
//     $newArticle.find('.article-body').html(this.body);
//     console.log($newArticle);
//
//   $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//   $newArticle.append('<hr>');
//   return $newArticle;
// };
//
// rawData.sort(function(a,b) {
//   // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(articleObject) {
//   // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
//   articles.push(new Article(articleObject));
// });
//
// articles.forEach(function(a) {
//   $('#articles').append(a.toHtml());
// });

$('#livepreview').urlive().hover(function(){
    $(this).urlive('open');
},function(){
    $(this).urlive('close');
});
