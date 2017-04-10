'use strict';

var aboutView = {};

aboutView.aboutPopulateFilter = function() {
  $('section').find('.abox').each(function() {
    var acategory, aoptionTag;
    acategory = $(this).attr('data-category');
    aoptionTag = '<option value="' + acategory + '">' + acategory + '</option>';
    if ($('#about-category-filter option[value="' + acategory + '"]').length === 0) {
      $('#about-category-filter').append(aoptionTag);
    }
  });
};
//


aboutView.aboutHandleCategoryFilter = function() {
  $('#about-category-filter').on('change', function() {
    if ($(this).val()) {
      console.log('happening');


      $('section.abox').fadeOut('slow');

      $('section[data-category="' + $(this).val() + '"]').delay(800).fadeIn('slow');

      var $newArticle = ($(this).val());
      console.log($newArticle);
    } else {

      $('section.abox').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};
//
// aboutView.handleMainNav = function () {
//
//
//   $('.main-nav').on('click', ‘.tab', function() {
//
//     event.preventDefault();
//     $(‘section.tab-content').hide();
//     // 2.
//     $(‘#' + $(this).attr(‘data-content')).fadeIn();
//
//   });
// };

// articleView.setTeasers = function() {
//   // Truncate logic to show only first two elements within the article body.
//   $(‘.article-body *:nth-of-type(n+2)').hide();
//   $(‘article').on(‘click', ‘.read-on', function(){
//     console.log(‘event');
//     event.preventDefault();
//     $(this).siblings(‘section.article-body').children().toggle();
//
//     if ($(this).html() === ‘Read on →') {
//       $(this).html(‘Read less &larr;');
//     }
//     else {
//       $(this).html(‘Read on →');
//     }
//   });
$(function(){


   aboutView.aboutPopulateFilter();
   aboutView.aboutHandleCategoryFilter();
  //  aboutView.handleMainNav();
 // articleView.setTeasers();
});
