process.background = true;

require('Common');
application.exitAfterWindowsClose = false;

var s = new StatusBar();
s.image = './tint.png';

var p = new PopOver();

var web = new WebView();
web.location = 'app://index.html';
p.appendChild(web);
web.left = web.right = web.top = web.bottom = 0;
web.transparent = true;

s.on('click', function() {
  p.open(s);
});


