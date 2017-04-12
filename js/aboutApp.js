

var resumeArray = [];

function Resume(aboutRawDataObj){
  this.company = aboutRawDataObj.company;
  this.position= aboutRawDataObj.position
  this.cityPlace = aboutRawDataObj.cityPlace
  this.employmentPeriodStart = aboutRawDataObj.employmentPeriodStart;
  this.employmentPeriodEnd = aboutRawDataObj.employmentPeriodEnd;
  this.description = aboutRawDataObj.description;
  this.acategory = aboutRawDataObj.acategory;
}


Resume.prototype.aboutToHtml = function() {
  var aboutSource = $('#aboutTemplate').html();
  var aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};



$(function(){
  $.ajax({
    url: '/js/aboutObjects.json',
    dataType : "json",
  }).done(function(data) {
    console.log(data);
    console.log('request done: ' + new Date());
    data.forEach(function(aboutObject) {
      resumeArray.push(new Resume(aboutObject));
    });
    resumeArray.forEach(function(about) {
      $('#abouttodom').append(about.aboutToHtml());
    });
    aboutView.aboutPopulateFilter();
    aboutView.aboutHandleCategoryFilter();
    aboutView.setTeasers();
  })
  console.log('request started: ' + new Date());
});

$(function(){
    view.handleCategoryFilter();
    view.handleMainNav();
});
