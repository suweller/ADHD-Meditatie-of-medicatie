// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

var $buoop = {};
$buoop.ol = window.onload;
window.onload=function(){
  try {if ($buoop.ol) $buoop.ol();}catch (e) {}
  var e = document.createElement("script");
  e.setAttribute("type", "text/javascript");
  e.setAttribute("src", "//browser-update.org/update.js");
  document.body.appendChild(e);
}

// Place any jQuery/helper plugins in here.
