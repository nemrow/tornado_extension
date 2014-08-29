var editableMode = "off"

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.requestType == 'getMode') {
    sendResponse({mode: editableMode});
  }
});
