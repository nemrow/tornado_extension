Controller = {
  activateClickables: function () {
    $(document).on('click', function (e) {
      var currentTarget = $(e.target);
      var currentCssPath = cssPath.getCssPath(currentTarget);
      var html = Templates.fuckItUpForm(currentCssPath, document.URL)
      $('body').append(html);
    });
  },

  activateChangeSubmit: function () {
    $(document).on('click', "fuck-it-up-form", function (e) {
      console.log($(this).serialize());
      // Here you will have to disable the active clicks so we can star
      // clicking on the textarea to be able to change the text

      // Then we will serize the data and send it to the change/create api

      // Then we will relace the text on screen if the request is successfull

      // var data = {
      //   content: "This is some new test text",
      //   content_type: "text",
      //   selector: currentCssPath,
      //   url: document.URL
      // }
      // $.post(Model.apiPath + "change/create", data)
      e.preventDefault();
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
