Handlebars.registerHelper('getImageURL', function(image) {
 var path = chrome.extension.getURL('images/' + image);
 return path;
});
