var Templates = {
  fuckItUpTextForm: function (selector, url, content, extensionPath) {
    var context = {selector: selector, url: url, content: content, extensionPath: extensionPath}
    return Templates.compileTemplate("fuck-it-up-text-form", context)
  },

  fuckItUpImageForm: function (selector, url, extensionPath) {
    var context = {selector: selector, url: url, extensionPath: extensionPath}
    return Templates.compileTemplate("fuck-it-up-image-form", context)
  },

  borders: function () {
    return Templates.compileTemplate("fuck-it-up-borders")
  },

  compileTemplate: function (id, context) {
    var source = $("#" + id).html();
    var template = Handlebars.compile(source);
    var html = template(context);
    return html
  },

  waitingGif: function () {
    var context = {extensionPath: Model.extensionPath};
    return Templates.compileTemplate("waiting-gif", context);
  }
}
