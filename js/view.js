View = {
  loadTemplates: function () {
    $.ajax({
      url: chrome.extension.getURL('templates/templates.hbs'),
      async: false
    }).done(function(data) {
      $('body').append(data);
    });
  },

  displayBorders: function () {
    var html = Templates.borders();
    $('body').append(html);
  },

  removeEditableViews: function () {
    $('.fuck-it-up-borders').remove();
    $('.fuck-it-up-form').remove();
  },

  displayEdittingForm: function (event) {
    Controller.deactivateClickables();
    var currentTarget = $(event.target);
    var currentCssPath = cssPath.getCssPath(currentTarget);
    var currentPropName = currentTarget.prop('tagName').toLowerCase();
    if (currentPropName == "img") {
      var html = Templates.fuckItUpImageForm(currentCssPath, document.URL)
      $('body').append(html);
    } else if (View.textEditable(currentTarget)) {
      var html = Templates.fuckItUpTextForm(currentCssPath, document.URL)
      $('body').append(html);
    } else {
      alert("Can't edit this yet. Shit. Oh well, this app is pointless anyway.");
    }
  },

  textEditable: function (node) {
    return (node.children().length == 0 && node.text().length > 0)
  },

  removeEdittingForm: function (event) {
    $('.fuck-it-up-form').remove();
  },

  printFuckedUpDataToPage: function () {
    $.each(Model.data.changes, function () {
      if (this.content_type == "text") {
        $(this.selector).text(this.content);
      } else if (this.content_type == "image") {
        $(this.selector).attr('src', this.content);
      }
    })
  }
}
