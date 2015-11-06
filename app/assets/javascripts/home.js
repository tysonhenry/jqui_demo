// the following code was copied from the jqueryui.com examples

// function() is shorthand for $( document ).ready()
// The code in the { } is only executed after the document
// is loaded (after the document is "ready")
//
// In order to track the state of the widget, we must introduce a full 
// life cycle for the widget. The life cycle starts when the widget is 
// initialized. To initialize a widget, we simply call the plugin on 
// one or more elements.
//
// The following will call the accordion initialization for all objects
// with an id of "acordion" (only one in this example).  This function 
// add to the DOM the fields necessary to make the object an actual
// accordion object.
$(function() {
  $( "#accordion" ).accordion();
});

$(function() {
  $( "#accordion2" ).accordion();
});

$(function() {
  $( "#tabs" ).tabs();
});

$(function() {
  $( "#datepicker" ).datepicker();
});
