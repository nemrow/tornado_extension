function changeMode (mode) {
  chrome.runtime.getBackgroundPage(function(bg){
    bg.editableMode = mode
  })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {mode: mode})
  });
};

function getMode (callback) {
  chrome.runtime.sendMessage({requestType: "getMode"}, function(response) {
    var mode = response.mode;
    callback(mode);
  });
};

$('.mode-form').change(function () {
  var mode = $(this).find('[name=editable-mode]').filter(':checked').val()
  changeMode(mode)
});

function selectCurrentRadioButton (mode) {
  $('input[value=' + mode + ']').attr("checked", "checked")
};

getMode(selectCurrentRadioButton);

