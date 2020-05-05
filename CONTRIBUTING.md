# CONTRIBUTING - Jvav
如果你想为此网站添砖Jvav，增加更多的页面，请注意以下几点，否则您提交的 Pull Request 很有可能会被我们拒绝。
* 请将页面的 header 和 footer 与其他页面匹配。
* 请将页面的代码进行整理，并在 Pull Request 时附带缩进。（非硬性要求）
* 请将页面的 title 修改为 ``` (页面名称) - Jvav ```
* 在新增页面时，请注意所需的资源是否存在。若不存在，请直接将资源链接到 Java.com 或将资源文件下载。
* 请在每一页的 ```</head>``` 前增加用于统计的 Matomo 代码。
```
<!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//s.tzg6.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '13']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
<script data-ad-client="ca-pub-3608182058895727" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script async defer src="https://buttons.github.io/buttons.js"></script>
```
* 请勿将文案修改的过于生硬。毕竟这是一个梗，好玩最重要。