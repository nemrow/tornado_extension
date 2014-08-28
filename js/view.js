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
