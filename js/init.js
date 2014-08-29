theTornado = {
  triggerMode: function () {
    if (Model.editableMode == "edit") {
      View.loadTemplates();
      Controller.deactivateLinks();
      Controller.displayFuckedUpContent();
      Controller.activateChangeSubmit();
      Controller.activateClickables();
      View.displayBorders();
    } else if (Model.editableMode == "view") {
      Controller.deactivateClickables();
      View.removeEditableViews();
      Controller.activateLinks();
      Controller.displayFuckedUpContent();
    } else if (Model.editableMode == "off") {
      Controller.deactivateClickables();
      View.removeEditableViews();
      Controller.activateLinks();
    }
  }
};

// To set the current mode
chrome.runtime.sendMessage({requestType: "getMode"}, function(response) {
  console.log("Mode response from call: " + response.mode);
  Model.editableMode = response.mode;
  theTornado.triggerMode();
});

// When the user click a new mode in the popup
chrome.runtime.onMessage.addListener(function(request) {
  if (request.mode) {
    Model.editableMode = request.mode;
    theTornado.triggerMode();
  };
});

