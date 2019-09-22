
const elements = document.querySelectorAll('[data-abstract]');
Array.prototype.forEach.call(elements, function(el, i){
  const content = el.getAttribute('data-abstract');
  const modal = new tingle.modal({
      closeMethods: ['overlay', 'button', 'escape'],
      closeLabel: "Close",
      cssClass: ['Modal'],
  });
  modal.setContent(content)
  el.onclick = function() { modal.open(); };
});
