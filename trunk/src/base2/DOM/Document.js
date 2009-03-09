
var Document = Node.extend(null, {
  bind: function(document) {
    extend(document, "createElement", function(tagName) {
      return DOM.bind(this.base(tagName));
    });
    AbstractView.bind(document.defaultView);
    if (document != window.document)
      new DOMContentLoadedEvent(document);
    return this.base(document);
  }
});