window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.menu');
    if(window.pageYOffset > 50){
        header.classList.add('header_fixed');
        menu.classList.add('menu-popup');       
    } else{
        header.classList.remove('header_fixed');
        menu.classList.remove('menu-popup');
    }
}

$('.buttom_reset').click(function() {
    $('.form__room_facilities input').prop('checked', false);
    $('.form__area input').prop('checked', true);
    $('#from').val('100');
    $('#to').val('600'); 
});


$("select").on("click" , function() {
  
  $(this).parent(".select-box").toggleClass("open");
  
});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {
  
  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");
    
  label.find(".label-desc").html(selection);
    
});


$(function() {
  var $menu_popup = $('.menu-popup');
  
  $(".menu-triger, .menu-close").click(function(){
    $menu_popup.slideToggle(300, function(){
      if ($menu_popup.is(':hidden')) {
        $('body').removeClass('body_pointer');
      } else {
        $('body').addClass('body_pointer');
      }         
    });  
    return false;
  });     
  
  $(document).on('click', function(e){
    if (!$(e.target).closest('.menu').length){
      $('body').removeClass('body_pointer');
      $menu_popup.slideUp(300);
    }
  });
});