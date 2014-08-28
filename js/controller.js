Controller = {
  activateClickables: function () {
    $(document).on('click', function (e) {
      var currentTarget = $(e.target);
      var currentCssPath = cssPath.getCssPath(currentTarget);
      // Here we will need to give the user a way to change the text
      // And then pass it into here.
      // Rock on
      var data = {
        content: "This is some new test text",
        content_type: "text",
        selector: currentCssPath,
        url: document.URL
      }
      $.post(Model.apiPath + "change/create", data)
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
    $.post(Model.apiPath + "page/show", {url: document.URL}, function (changes) {
      Model.data.changes = changes;
      $.each(Model.data.changes, function () {
        if (this.content_type == "text") {
          $(this.selector).text(this.content);
        }
      })
    })
  }
};
