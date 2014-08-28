chrome.runtime.onMessage.addListener(function(request) {
  if (Model.editableMode == "not active") {
    View.loadTemplates();
    Controller.deactivateLinks();
    Controller.displayFuckedUpContent();
    Controller.activateClickables();
  } else if (Model.editableMode == "view mode") {
    // put the site back to normal
  } else if (Model.editableMode == "editing mode") {
    // ask if the user wants to quit before saving new edit
    // then put back to normal
  }
});
