
<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=id">Bahasa Indonesia</a>
        | <a href="https://openaitx.github.io/view.html?user=BlueGrave&project=Surge&lang=as">অসমীয়া</
      </div>
    </div>
  </details>
</div>

# Surge
自用的 Surge 规则、脚本和模块

### 通用配置文件
[General.conf](https://github.com/BlueGrave/Surge/blob/master/General.conf) 参考 [@scomper](https://github.com/scomper/Surge) 和 [@DivineEngine](https://github.com/DivineEngine/Profiles/tree/master/Surge) 的配置文件注释

### 规则文件
自用的特殊规则
- [AppleOS_Update.list](https://github.com/BlueGrave/Surge/blob/master/Ruleset/AppleOS_Update.list) 结合多个大佬的相关规则整理出来的各 Apple OS OTA 规则
- [Mail.list](https://github.com/BlueGrave/Surge/blob/master/Ruleset/Mail.list) 解决 iOS Mail App 收件问题

### 模块文件
- [MyMoneyPro.sgmodule](https://github.com/BlueGrave/Surge/blob/master/Module/MyMoneyPro.sgmodule) 屏蔽随手记专业版 App 开屏广告
- [WhiteList.sgmodule](https://github.com/BlueGrave/Surge/blob/master/Module/WhiteList.sgmodule) 排除 AdBlock 误伤，增加一些自用的特殊规则
- [Cookie.sgmodule](https://github.com/BlueGrave/Surge/blob/master/Module/Cookie.sgmodule) 和 [Task.sgmodule](https://github.com/BlueGrave/Surge/blob/master/Module/Task.sgmodule) 自用的各 App 每日签到
- [VIFOnly.sgmodule](https://github.com/BlueGrave/Surge/blob/master/Module/VIFOnly.sgmodule) 开启兼容模式，避免 App 提示使用代理