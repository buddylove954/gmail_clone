$('.checkedboxes').change(function(event){
var li = $(event.target).closest(".emails")

  if($(event.target).is(':checked')){
    li.css({'background-color': "#ffc"});
  } else {
    li.css({'background-color': "white"});
  }
});