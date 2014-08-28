var Templates = {
  fuckItUpForm: function (selector, url) {
    var source   = $("#fuck-it-up-form").html();
    var template = Handlebars.compile(source);
    var context = {selector: selector, url: url}
    var html    = template(context);
    return html
  },

  compileTemplate: function () {

  }
}
