View = {
  loadTemplates: function () {
    $.ajax({
      url: chrome.extension.getURL('templates/templates.hbs'),
      async: false
    }).done(function(data) {
      $('body').append(data);
    });
  displayEdittingForm: function (event) {
    Controller.deactivateClickables();
    var currentTarget = $(event.target);
    var currentCssPath = cssPath.getCssPath(currentTarget);
    if (currentTarget.prop('tagName').toLowerCase() == "img") {
      var html = Templates.fuckItUpImageForm(currentCssPath, document.URL)
      $('body').append(html);
    } else {
      var html = Templates.fuckItUpTextForm(currentCssPath, document.URL)
      $('body').append(html);
    }
  },
  }
}
