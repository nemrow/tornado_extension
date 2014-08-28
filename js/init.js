chrome.runtime.onMessage.addListener(function(request) {
  if (Model.editableMode == "not active") {
    View.loadTemplates();
    Controller.deactivateLinks();
    Controller.displayFuckedUpContent();
    Controller.activateClickables();
  } else {

  } else if (Model.editableMode == "view mode") {
  }
});
