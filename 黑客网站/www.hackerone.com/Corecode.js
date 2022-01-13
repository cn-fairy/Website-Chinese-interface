// ==UserScript==
// @name                核心翻译脚本
// @namespace           https://github.com/cn-fairy/Website-Chinese-interface
// @version             0.10
// @description         作用网站：https://www.hackerone.com/
// @author              英文ID:fairycn 中文ID：暂时保密
// @match               https://www.hackerone.com/*
// @grant               GM_xmlhttpRequest
// @grant               GM_getResourceText
// @require             https://cdn.bootcdn.net/ajax/libs/timeago.js/4.0.2/timeago.full.min.js
// @require             https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==
 
function GM_xmlhttpRequest(){}
function GM_getResourceText(){}
(function() {
  'use strict';
  const SUPPORT_LANG = ["zh-CN"];
  const lang = (navigator.language || navigator.userLanguage);
  const locales = getLocales(lang)
  traverseElement(document.body);
  watchUpdate();
  function getLocales(lang) {
    if(lang.startsWith("zh")) { // zh zh-TW --> zh-CN
      lang = "zh-CN";
    }
    if(SUPPORT_LANG.includes(lang)) {
			var lang_txt = {"dict":{"solutions":"解决方案","products":"产品","partners":"合作","company":"公司","hackers":"黑客","resources":"资源","this site uses cookies and related technologies, as described in our":"本网站使用cookies和相关技术，如我们的","privacy policy":"隐私政策中所述",", for purposes that may include site operation, analytics, enhanced user experience, or advertising. you may choose to consent to our use of these technologies, or manage your own preferences.":"，用于可能包括网站运营、分析、增强用户体验或广告。您可以选择同意我们使用这些技术，或者管理您自己的偏好。","signin":"登录","signup":"注册","manage settings":"管理设置","accept":"接受","decline all":"全部拒绝","industries":"行业","vulnerability management":"漏洞管理","contacted by a hacker?":"被黑客联系了？"," a hacker contacted you.now what? ":"一个黑客联系了你。现在怎么办？","get help":"寻求帮助","i received a vulnerability report and my organization needs assistance with next steps.*":"我收到了一份漏洞报告，我的组织需要获得后续步骤的帮助。","contact us":"联系我们","my organization wants to learn more about HackerOne vulnerability programs.":"我的组织想了解更多关于黑客攻击漏洞程序的信息。","policies":"政策","trust":"信任","thismonth":"本月","cloud security":"云安全","hackerone bounty":"HackerOne赏金猎人","hackerone response":"HackerOne响应","hackerone assessments":"HackerOne 在线评估","hackerone insights":"HackerOne洞察","hackerone services":"HackerOne服务","terms":"服务条款","platform overview":"平台概述","privacy":"隐私","blog":"博客","help":"帮助","application security":"应用程序安全","status":"状态","training":"培训","financial services":"金融服务","username":"用户名","email":"电子邮箱","password":"密码","government":"政府","us federal":"美国联邦","subscribe to our blog":"订阅我们的博客","forgotpassword?":"忘记密码?","comments":"注释","createanaccount":"新建账号","we will handle your contact details in line with our":"我们将根据我们的",". if you prefer not to receive marketing emails from us, you can opt-out of all marketing communications or customize your preferences":"如果您不想收到我们的营销电子邮件，您可以选择退出所有营销宣传或自定义您的","here":"偏好","hacker-powered security report: industry insights":"黑客提供的安全报告：行业洞察","©2022 hackerone all rights reserved.":"@2022 HackerOne版权所有。","partner overview":"合作伙伴概述","tech integrations":"技术一体化","about us":"关于我们","leadership":"领导层","tip:":"提示:","careers":"职业生涯","press":"新闻","hacktivity":"黑客活动","directory":"目录","leaderboard":"排行榜","resource center":"资源中心","events":"事件","security@ conference":"安全@会议","documentation":"文档","company news":"公司新闻","ethical hacker":"道德黑客","penetration testing":"渗透测试","security compliance":"安全合规","fortify your current program with comprehensive security testing.":"通过全面的安全测试加强您当前程序","protect your cloud environment against multiple threat vectors.":"保护您的云环境免受多种威胁。","integrate continuous security testing into your sdlc.":"将持续的安全测试整合到您的开发生命周期中。","protect your aws cloud environment with hacker-powered security.":"借助黑客提供的安全性保护您的AWS云环境。","integrate and enhance your dev, security, and it tools.":"整合并增强您的开发、安全和it工具。","explore our technology, service, and solution partners, or join us.":"探索我们的技术、服务和解决方案合作伙伴，或者加入我们。","press releases":"发布的新闻","next >":"下一个","we empower the world to build a safer internet.":"我们让世界有能力建立一个更安全的互联网。","meet the team building an inclusive space to innovate and share ideas.":"与团队会面，营造包容的创新空间，分享想法。","want to make the internet safer, too? join us!":"也想让互联网更安全吗？加入我们吧！","earning trust through privacy, compliance, security, and transparency.":"通过隐私、法规遵从性、安全性和透明度赢得信任。","blog categories":"博客文章分类","more":"更多","the latest news, insights, stories, blogs, and more.":"最新新闻、见解、故事、博客等。","explore our product features.":"探索我们的产品特性。","join us for an upcoming event or watch a past event.":"参加我们即将举行的活动或观看过去的活动。","hack, learn, earn. see what the hackerone community is all about.":"黑客、学习、挣钱。看看HackerOne社区是怎么回事。","free videos and ctfs that connect you to private bug bounties.":"免费的视频和CTF，将你与私人bug赏金联系起来。","watch the latest hacker activity on hackerone.":"观看hackerone上的最新黑客活动。","email address":"电子邮件地址","find disclosure programs and report vulnerabilities.":"查找公开程序并报告漏洞。","see the top hackers by reputation, geography, owasp top 10, and more.":"按声誉、地理位置、owasp前10名等查看顶级黑客。","join the virtual conference for the hacker community, by the community.":"加入黑客社区的虚拟会议，由社区发起。","explore products":"探索产品","the security testing platform that never stops.":"永不停止的安全测试平台。","uncover critical vulnerabilities that conventional tools miss.":"发现传统工具遗漏的关键漏洞。","reduce risk with continuous vulnerability disclosure.":"通过持续披露漏洞降低风险。","assess, remediate, and secure your cloud, apps, products, and more.":"评估、修复和保护您的云、应用程序、产品等。","view program performance and vulnerability trends.":"查看程序性能和漏洞趋势。","mature your security readiness with our advisory and triage services.":"通过我们的咨询和分类服务，使您的安全准备工作更加成熟。","please check your emails. if the given account exists and has an associated email address, a password-reset link has been sent.":"请检查您的电子邮件。如果帐户存在，并且有关联的电子邮件地址，则已发送密码重置链接。","meet vendor and compliance requirements with hacker-powered testing.":"通过黑客测试满足供应商和合规性要求。","hackerone pentests":"HackerOne大多数的测试","sign in to hackerone":"登录到HackerOne","using saml? email address only, no password needed.":"使用单点登录？只有电子邮件地址，不需要密码。","remember me for 2 weeks":"记住我两周","create a hackerone account":"创建一个HackerOne帐户","sign in":"登录","find solutions":"查找解决方案","for hackers":"对于黑客来说","send":"发送","verified":"已认证","don't mind me, i remembered":"不要介意，我记得","to receive instructions on how to reset your password, please enter your current email address.":"若要接收如何重置密码的说明，请输入当前电子邮件地址。","forgot password":"忘记密码","request link":"请求链接","welcome to hackerone!":"欢迎来到HackerOne!","please tell us a bit about yourself.":"请向我们介绍一下你自己。","i'm a hacker":"我是黑客","i want to use my skills to help make the internet a safer place.":"我想用我的技能帮助使互联网成为一个更安全的地方。","i'm a company":"我是一家公司","i want to make sure my company's security is safe by rewarding hackers who find vulnerabilities.":"我想通过奖励发现漏洞的黑客来确保我公司的安全。","languages":"语言","about":"关于","code":"代码","dependencies":"依赖","captcha not solved.":"验证码未通过","createrepository":"新建仓库","owner":"拥有者","repositoryname":"仓库名称","description":"描述","(optional)":"(可选)","public":"公共","private":"私有","packages":"包","secrets":"密钥","security":"安全","notifications":"通知","discussions":"讨论","sponsor":"赞助","sponsorthisproject":"赞助该项目","learnmoreabout":"了解更多关于","insights":"统计","actions":"操作","releases":"发行版","addfile":"添加文件","createnewfile":"新建文件","uploadfiles":"上传文件","readme":"自述文件","commits":"次提交","mergepullrequest":"合并拉取请求","switchbranches/tags":"切换分支/标签","default":"默认","gotofile":"文件查找","usedby":"使用者","contributors":"贡献者","viewlicense":"查看License","noreleasespublished":"无发行版","createanewrelease":"创建发行版","nopackagespublished":"未发布包","publishyourfirstpackage":"发布你的第一个包","editrepositorydetails":"编辑仓库详情","website":"网站","advanced":"高级","joe sandbox detect":"joe sandbox检测","joe sandbox uploader":"joe sandbox上传","clone":"克隆","clonewithhttps":"HTTPS方式克隆","clonewithssh":"使用SSH方式克隆","usegitorcheckoutwithsvnusingtheweburl.":"使用Git或SVN通过该网址检出。","useapassword-protectedsshkey.":"使用受密码保护的SSH密钥。","usessh":"使用SSH","usehttps":"使用HTTPS","openwithgithubdesktop":"用GitHub桌面客户端打开","downloadzip":"下载Zip压缩包","thisrepository":"该仓库","__comments-compare":"Comparingchanges","comparingchanges":"差异比对","compare":"对比","choosetwobranchestoseewhat’schangedortostartanewpullrequest.ifyouneedto,youcanalso":"选择两个分支以比较差异或启动新的拉取请求。如果需要，你也可以","compareacrossforks":"跨复刻比较","request new password":"获取新密码","forgot your password?":"忘记密码了？","openall":"打开全部","author":"作者","labels":"标签","label":"标签","milestones":"里程碑","sort":"排序","assignee":"受理人","filterbywho’sassigned":"按受理人筛选","don't have a login yet?":"还没有登录？","confirmed":"已确认","log in":"登录","go to registration page":"转到注册页面","dangerzone":"危险区","changerepositoryvisibility":"更改仓库可见性","changevisibility":"更改可见性","thisrepositoryiscurrentlypublic.":"该仓库当前是公有的","transferownership":"转让所有权","transfer":"转让","div":"差异","markthisrepositoryasarchivedandread-only.":"将此仓库标记为已存档和只读。","archivethisrepository":"归档该仓库","deletethisrepository":"删除该仓库","manageaccess":"访问管理","whohasaccess":"谁有权访问","publicrepository":"公共仓库","thisrepositoryispublicandvisibletoanyone.":"该仓库是公开的，对任何人都可见。","privaterepository":"私有仓库","onlythosewithaccesstothisrepositorycanviewit.":"只有拥有该仓库访问权的用户才能查看。","manage":"管理","directaccess":"直接访问","collaboratorshaveaccesstothisrepository.onlyyoucancontributetothisrepository.":"个协作者有权访问此仓库。只有您可以对此仓库做出贡献。","youhaven'tinvitedanycollaboratorsyet":"您尚未邀请任何协作者","inviteacollaborator":"邀请协作者","integrations":"整合","installedgithubapps":"安装GitHub应用","__comments-11":"Repositorysettings","settings":"设置","personalsettings":"个人设置","profile":"个人资料","account":"账号","accountsecurity":"账号安全","securitylog":"安全日志","security&analysis":"安全&分析","emails":"电子邮箱","billing":"账单","sshandgpgkeys":"SSH与GPG公钥","blockedusers":"黑名单","savedreplies":"保存的回复","applications":"应用","developersettings":"开发者设置","rename":"重命名","options":"选项","branch":"分支","branches":"分支","tags":"标签","publicprofile":"公开个人资料","name":"名字","publicemail":"公开邮箱","bio":"个人简介","__comments-12":"CreateaRepository","arepositorycontainsallprojectfiles,includingtherevisionhistory.alreadyhaveaprojectrepositoryelsewhere?":"仓库包含项目中的所有文件，包括修订历史记录。在其他地方已有仓库？","analyze":"分析","editors":"编辑","register":"注册","accept cookies":"接受cookie","login":"登录","results":"结果","cancel":"取消","analysis":"分析","make sure to use the original sample name. do not rename samples!":"确保使用原始样品名称。不要重命名样本！","max. 100mb":"最大100mb","choose file":"选择文件","upload sample":"上传样本","joe sandbox detects and analyzes potential malicious files and urls on windows, android, mac os, linux, and ios for suspicious activities. it performs deep malware analysis and generates comprehensive and detailed analysis reports. this website gives you access to the":"joe sandbox检测并分析windows、android、mac os、linux和ios上的潜在恶意文件和URL，以发现可疑活动。它执行深度恶意软件分析，并生成全面而详细的分析报告。这个网站让你可以访问","community edition of joe sandbox cloud":"joe sandbox cloud社区版",". it allows you to run a maximum of 15 analyses / month, 5 analyses / day on windows, linux and android with limited analysis output.":"它允许您每月最多运行15次分析，在windows、linux和android上每天运行5次分析，分析输出有限。"}}
return lang_txt;
    }
    return {
      css: [],
      dict: {}
    };
  }
 
  function translateRelativeTimeEl(el) {
    const datetime = $(el).attr('datetime');
    $(el).text(timeago.format(datetime, lang.replace('-', '_')));
  }
 
  function translateElement(el) {
    // Get the text field name
    let k;
    if(el.tagName === "INPUT") {
      if (el.type === 'button' || el.type === 'submit') {
        k = 'value';
      } else {
        k = 'placeholder';
      }
    } else {
      k = 'data';
    }
 
    const txtSrc = el[k].trim();
    const key = txtSrc.toLowerCase()
        .replace(/\xa0/g, ' ') // replace '&nbsp;'
        .replace(/\s{2,}/g, ' ');
 
    if(locales.dict[key]) {
      el[k] = el[k].replace(txtSrc, locales.dict[key])
    }
  }
 
  function shoudTranslateEl(el) {
    const blockIds = ["readme"];
    const blockTags = ["CODE", "SCRIPT", "LINK", "IMG", "svg", "TABLE", "ARTICLE"];
 
    return !(el.id && blockIds.includes(el.id))
      && !(blockTags.includes(el.tagName));
  }
 
  function traverseElement(el) {
    if(!shoudTranslateEl(el)) {
      return
    }
 
    for(const child of el.childNodes) {
      if(["RELATIVE-TIME", "TIME-AGO"].includes(el.tagName)) {
        translateRelativeTimeEl(el);
        return;
      }
 
      if(child.nodeType === Node.TEXT_NODE) {
        translateElement(child);
      }
      else if(child.nodeType === Node.ELEMENT_NODE) {
        if(child.tagName === "INPUT") {
          translateElement(child);
        } else {
          traverseElement(child);
        }
      } else {
        // pass
      }
    }
  }
 
  function watchUpdate() {
    const m = window.MutationObserver || window.WebKitMutationObserver;
    const observer = new m(function (mutations, observer) {
      for(let mutationRecord of mutations) {
        for(let node of mutationRecord.addedNodes) {
          traverseElement(node);
        }
      }
    });
 
    observer.observe(document.body, {
      subtree: true,
      characterData: true,
      childList: true,
    });
  }
})();
