### 报错信息：
```
UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!
/www/wwwroot/poster.tongnianjihua.com/poster/node_modules/puppeteer/.local-chromium/linux-1022525/chrome-linux/chrome: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory

TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
```

### 解决方法：
- 安装 Chromium；
```
$ yum install -y chromium
```

- 从电脑上找到网站对应字体（目录：C:\Windows\Fonts），上传到服务器（目录：/usr/share/fonts/）；

### 参考：
- https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
- https://segmentfault.com/a/1190000040553459
- https://www.freesion.com/article/5086447741/