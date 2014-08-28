var Templates = {
  fuckItUpTextForm: function (selector, url) {
    var context = {selector: selector, url: url}
    return Templates.compileTemplate("fuck-it-up-text-form", context)
  },

  fuckItUpImageForm: function (selector, url) {
    var context = {selector: selector, url: url}
    return Templates.compileTemplate("fuck-it-up-image-form", context)
  },

  compileTemplate: function (id, context) {
    var source = $("#" + id).html();
    var template = Handlebars.compile(source);
    var html = template(context);
    return html
  }
}
