Model = {
  editableMode: null,

  apiPath: "http://tornado-extension-api.herokuapp.com/api/v1/",

  extensionPath: function () {
    return chrome.extension.getURL('');
  },

  data: {
    changes: [
      {
        selector: "article#pagecontainer section.body table#container tbody tr td#center table#main tbody tr td:nth-of-type(2) div.col:nth-of-type(1) div.cats ul#hhh0 li:nth-of-type(5) a.swp span.txt",
        content: "This is the new name",
        content_type: "text"
      }
    ]
  }
}
