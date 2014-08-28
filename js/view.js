View = {
  loadTemplates: function () {
    $.ajax({
      url: chrome.extension.getURL('templates/templates.hbs'),
      async: false
    }).done(function(data) {
      $('body').append(data);
    });
  }
}
