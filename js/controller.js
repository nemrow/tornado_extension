Controller = {
  activateClickables: function () {
    $(document).on('click', function (e) {
      var currentTarget = $(e.target);
      var currentCssPath = cssPath.getCssPath(currentTarget);
      $(currentCssPath).css('background-color', "blue");
      console.log(currentCssPath);
    });
  },

  linkDeactivator: function (event) {
    event.preventDefault();
  },

  deactivateLinks: function () {
    $('a').bind('click', Controller.linkDeactivator);
  },

  activateLinks: function () {
    $('a').unbind('click', Controller.linkDeactivator);
  },

  displayFuckedUpContent: function () {
    $.each(Model.data.changes, function () {
      if (this.contentType == "text") {
        $(this.selector).text(this.content);
      }
    })
  }
};
