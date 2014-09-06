Controller = {
  activateClickables: function () {
    $(document).bind('click', View.displayEdittingForm);
  },

  deactivateClickables: function () {
    $(document).unbind('click', View.displayEdittingForm);
  },

  activateChangeSubmit: function () {
    $(document).on('submit', ".fuck-it-up-form", function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      var changeData = $(this).serialize();
      Controller.submitNewChange(formData);
    });
  },

  resetEditables: function () {
    Controller.deactivateClickables();
    View.removeEditableViews();
    theTornado.triggerMode();
  },

  submitNewChange: function (changeData) {
    $('.editable-popout-container').html(Templates.waitingGif());
    $.ajax({
      url: Model.apiPath + "change/create",
      data: changeData,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function(changes){
        Model.data.changes = changes;
        View.printFuckedUpDataToPage();
        Controller.activateClickables();
        View.removeEdittingForm();
      }
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
      View.printFuckedUpDataToPage();
    })
  }
};
