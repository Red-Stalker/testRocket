window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 50){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}

function CheckClick(e){
   t=e.previousSibling.previousSibling;
   //alert(t.tagName+' '+t.type);
   if( (t.tagName=='INPUT')&&(t.type=='checkbox')) t.click();
}

$('.buttom_reset').click(function() {
  $('input:checked').prop('checked', false);
  $('form :input').val('');
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


