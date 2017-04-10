'use strict';
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
aboutRawData.forEach(function(aboutObject) {
 resumeArray.push(new Resume(aboutObject));
});

resumeArray.forEach(function(about) {
 $('#abouttodom').append(about.aboutToHtml());
});
