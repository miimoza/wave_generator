(function(w, d) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    try {
  d.querySelectorAll("#div_inread_article")[0].parentNode.style.display = "block";
} catch (e) {}
    w.teads.page(129534).placement(142241, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"margin: 0px auto 10px; max-width: 550px;","format":"inread","slot":{"btf":false,"selector":"#div_inread_article","minimum":1}}).passback(function passback() {var _slot_ = "#div_inread_article";
var _min_ = 0;
var adFrame = d.createElement("iframe");
adFrame.width = 1;
adFrame.height = 1;
adFrame.border = 0;
adFrame.style.border = "0";
adFrame.frameBorder = 0;
adFrame.style = "display: block; margin: auto;";
var content = "<html><head><style>body{margin:0;padding:0;border:0}<\/style><\/head>" + "<body><script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'>" + "<\/script>" + "<div id='gpt-passback'><script> window.googletag = window.googletag || {cmd: []}; googletag.cmd.push(function() { googletag.defineSlot('/22159819721/web_lexpress/web_lexpress_article_gratuit_in_article', ['fluid', [1, 1], [300, 250]], 'gpt-passback').addService(googletag.pubads()).setTargeting('passback', ['teads']); googletag.enableServices(); googletag.display('gpt-passback');});" + "<\/script>" + "<\/div>" + "<\/body>" + "<\/html>";
var passbackSlot = d.querySelectorAll(_slot_)[_min_];
passbackSlot.appendChild(adFrame);
adFrame.contentWindow.document.open("text/html");
adFrame.contentWindow.document.write(content);
adFrame.contentWindow.document.close();}).serve();
  };
  if (w.teads && w.teads.page) { ttag(); }
  else if (!w.teadsscript) {
    var s = document.createElement('script');
    s.src = 'https://s8t.teads.tv/media/format/v3/teads-format.min.js';
    s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
  } else {
    w.teadsscript.addEventListener('load', ttag);
  }
})(window, document);