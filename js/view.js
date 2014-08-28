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
