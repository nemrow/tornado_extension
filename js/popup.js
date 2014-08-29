function changeMode (mode) {
  chrome.runtime.getBackgroundPage(function(bg){
    bg.editableMode = mode
  })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {mode: mode})
  });
};

function getMode () {
  chrome.runtime.getBackgroundPage(function(bg){
    return bg.editableMode
  });
};

$('.mode-form').change(function () {
  var mode = $(this).find('[name=editable-mode]').filter(':checked').val()
  changeMode(mode)
});

