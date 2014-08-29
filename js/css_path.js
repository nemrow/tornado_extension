var cssPath = {
  generateCurrentSelector: function (identifiers) {
    if (identifiers.className) {
      return (identifiers.tagName + "." + cssPath.nameCleanup(identifiers.className).split(' ').join('.'));
    } else if (identifiers.idName) {
      return (identifiers.tagName + "#" + cssPath.nameCleanup(identifiers.idName).split(' ').join('#'));
    } else {
      return identifiers.tagName;
    };
  },

  nameCleanup: function (name) {
    return $.trim(name).replace(/ +/g, " ");
  },

  generateNthChildString: function (el, currentSelector) {
    var parentNode = el.parent();
    var identicalChildren = parentNode.children(currentSelector);
    if (identicalChildren.length > 1) {
      var indexOfCurrentEl = identicalChildren.index(el) + 1;
      return (":nth-of-type(" + indexOfCurrentEl + ")");
    } else {
      return "";
    };
  },

  getCssPath: function (el) {
    var path = [];

    while (!el.is('body')) {
      var currentSelector = "";
      var identifiers = {
        tagName: el.prop('tagName').toLowerCase(),
        className: el.attr('class'),
        idName: el.attr('id')
      }

      currentSelector += cssPath.generateCurrentSelector(identifiers);
      currentSelector += cssPath.generateNthChildString(el, currentSelector);

      path.unshift(currentSelector);
      el = el.parent();
    };

    return path.join(' ');
  }
};

