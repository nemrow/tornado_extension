chrome.runtime.onMessage.addListener(function(request) {
  if (Model.editableMode == false) {
    View.loadTemplates();
    Controller.deactivateLinks();
    Controller.displayFuckedUpContent();
    Controller.activateClickables();
  } else {

  }
});
