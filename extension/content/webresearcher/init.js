/// customizable variables
/// Go to https://keycode.info/ to find keycodes

var createNoteKeyCode = 49 ;  // corresponds to 1 on keyboard
var saveAnnotationsKeyCode= 50; // corresponds to 2 on keyboard
var loadAnnotationsKeyCode=51 ; // corresponds to 3 on keyboard
var startmqttKeyCode=52 ; // corresponds to 4 on keyboard
var saveAllNotes = 53; // corresponds to 5 on keyboard
var displayNotes = 48; // corresponds to 0 on keyboard

// controls the specs of the notes
var defaultNoteColor = "#ffffcc";
var defaultFont= "13px";
var defaultOpacity = "80%";
var sidebarWidth    = "30%";

// controls the specs of the highlighting rectangle
var defaultRectColor = 'green';
var defaultRectOpacity = '10%';

/////// variables used /////////
var note_count = 1;
var webPageUrl = window.location.href.replace(/(^\w+:|^)\/\//, '');
var url_window = window.location.href;
var pageTitle = document.title;

var editorJSObjs = {};
var WBJS_HTML = {};
var WBJS_CSS = {};
var WBJS_JSON = {}
var WBJS_notemax =100; // Maximum number of notes assumed to exist on a webpage
/// Buttons for control

$("html").append(`
  <div  style="left: 90%; height: 10%; position: fixed; width: 10%; bottom: 80%;z-index:100;background-color:white">
  <button style="width:100%;border-radius: 8px;" id='saveNotesWBJS'>Save Notes</button>
  <button style="width:100%;border-radius: 8px;" id='exportNotes'>Export Notes</button>
  </div>

  `)

// Check if there are any notes already in localstorage and if so load them up
// var foo_loaded = JSON.parse(localStorage.getItem(webPageUrl));
// var foo_loaded_keys = Object.keys(foo_loaded['HTML']);
// //
// for(k=0;k<foo_loaded_keys.length;k++){
//
// }

///////////////////////////////////////////////



/// save Notes
document.getElementById('saveNotesWBJS').addEventListener('click', saveAllNotesWBJS);
function saveAllNotesWBJS(){

  // console.log(WBJS_HTML);
  // console.log(WBJS_JSON);
  // console.log(WBJS_CSS);
  let foo_final ={}
  foo_final['HTML'] = WBJS_HTML
  foo_final['JSON'] = WBJS_JSON
  foo_final['CSS']  = WBJS_CSS
  console.log("user asked to save data")
  console.log(foo_final);
  localStorage.setItem(webPageUrl,JSON.stringify(foo_final));

  $.notify('Added notes to local storage', "success");

}
