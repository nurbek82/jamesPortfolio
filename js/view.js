// 'use strict';
//
var view = {};

view.populateFilter = function() {
  $('section').find('.pbox').each(function() {
    var category, optionTag;
    category = $(this).attr('data-category');
    console.log(category);
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};
//


view.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      console.log('happening');


      $('section.pbox').hide();

      $('section[data-category="' + $(this).val() + '"]').fadeIn();

      var $newArticle = ($(this).val());
      console.log($newArticle);
    } else {

      $('section.pbox').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

view.handleMainNav = function () {


  $('.main-nav').on('click', '.tab', function() {

    event.preventDefault();
    $('section.tab-content').hide();
    // 2.
    $('#' + $(this).attr('data-content')).fadeIn();

  });
  $('.main-nav .tab:first').click();
};

// articleView.setTeasers = function() {
//   // Truncate logic to show only first two elements within the article body.
//   $('.article-body *:nth-of-type(n+2)').hide();
//   $('article').on('click', '.read-on', function(){
//     console.log('event');
//     event.preventDefault();
//     $(this).siblings('section.article-body').children().toggle();
//
//     if ($(this).html() === 'Read on →') {
//       $(this).html('Read less &larr;');
//     }
//     else {
//       $(this).html('Read on →');
//     }
//   });
//
//   /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
//   When a .read-on link is clicked, we can:
//   1. Prevent the default action of a link.
//   2. Reveal everything in that particular article now.
//   3. Hide that read-on link!
//
//   // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
//   */
//
//
//
// };

// TODO: Invoke all of the above functions (I mean, methods!):
$(function(){
    $('section.tab-content').hide();
    $('#aboutMe').fadeIn();
    view.populateFilter();
    view.handleCategoryFilter();
    view.handleMainNav();

  // articleView.populateFilters();
  // articleView.handleCategoryFilter();
  // articleView.setTeasers();
});
