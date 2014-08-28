chrome.runtime.onMessage.addListener(function(request) {
  if (Model.editableMode == false) {
    Controller.deactivateLinks();
    Controller.displayFuckedUpContent();
    Controller.activateClickables();
  } else {

  }
});
