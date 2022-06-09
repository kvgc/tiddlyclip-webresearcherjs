

console.log("inside background.js");
browser.contextMenus.create({
  id: "eat-page",
  title: "Start WebResearcherJS"
});


////////////////////////////////////////////////////////////
var jsFiles = ["ext_libs/jquery.min.js",
"ext_libs/jquery-ui.min.js",
"ext_libs/editorjs@latest.js",
"ext_libs/header@latest.js",
"ext_libs/simple-image@latest.js",
"ext_libs/list@latest.js",
"ext_libs/table@latest.js",
"ext_libs/quote@latest.js",
"ext_libs/edjsHTML.js",
"ext_libs/popper.js",
"ext_libs/notify.min.js",
"webresearcher/init.js",
"webresearcher/webresearcher.js",
];

var cssFiles = [
"ext_libs/jquery-ui.min.css",
];

// error catching functions
function onExecuted(result) {
  console.log(`Loaded`);
}

function onError(error) {
  // alert(error);
  console.log(`Error: ${error}`);
}

// first wait for jquery, jquery-ui and others to load and then load all the small ones.. very poorly written code...
function loadJQuery(){
    const executing = browser.tabs.executeScript({
    file: jsFiles[0]
    });
    executing.then(loadJQueryUI, onError);
}

function loadJQueryUI(){
    const executing = browser.tabs.executeScript({
    file: jsFiles[1]
    });
    executing.then(loadEditor, onError);

}

function loadEditor(){
    const executing = browser.tabs.executeScript({
    file: jsFiles[2]
    });
    executing.then(loadOtherModules, onError);

}



// load all other modules
function loadOtherModules(){

        for(var i=0;i<cssFiles.length;i++){
               const executing = browser.tabs.insertCSS({
                 file: cssFiles[i]
               });
               executing.then(onExecuted, onError);
          }
        for(var i=3;i<jsFiles.length;i++){
            		const executing = browser.tabs.executeScript({
            		file: jsFiles[i]
              });
              executing.then(onExecuted, onError);

         }

}
////////////////////////////////////////////////////////////


browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "eat-page") {
      loadJQuery();
  }
});
