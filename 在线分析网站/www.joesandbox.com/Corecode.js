// ==UserScript==
// @name                核心翻译脚本
// @namespace           https://github.com/cn-fairy/Website-Chinese-interface
// @version             0.10
// @description         作用网站：https://www.joesandbox.com/
// @author              英文ID:fairycn 中文ID：暂时保密
// @match               https://www.joesandbox.com/*
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
 
  translateByCssSelector();
  translateDesc();
  traverseElement(document.body);
  watchUpdate();
 
  function getLocales(lang) {
    if(lang.startsWith("zh")) { // zh zh-TW --> zh-CN
      lang = "zh-CN";
    }
    if(SUPPORT_LANG.includes(lang)) {
			var lang_txt = {"dict":{"this website uses cookies to ensure you get the best experience on our website.":"该网站使用cookie来确保您在我们的网站上获得最佳体验。","learn more":"了解更多信息","terms and conditions":"条款和协议","i agree to be bound by the":"我同意受","terms and conditions":"条款和协议","personal data protection policy":"个人数据保护政策的约束","and the":"以及","and agree to have accepted and understood the":"并同意接受和理解","signin":"登录","signup":"注册","team":"团队","enterprise":"企业","pricing":"价格","builtfordevelopers":"专为开发者打造","refresh":"刷新","developers":"开发者","spokenlanguage:":"自然语言","any":"所有","daterange:":"时间范围","today":"今天","thisweek":"本周","thismonth":"本月","__comments-3":"explore","collections":"集合","trending":"趋势","events":"事件","terms":"服务条款","privacy":"隐私","blog":"博客","help":"帮助","shop":"商店","status":"状态","training":"培训","__comments-5":"Login&Register","username":"用户名","email":"电子邮箱","password":"密码","usernameoremailaddress":"用户名或邮箱","forgotpassword?":"忘记密码?","comments":"注释","createanaccount":"新建账号","makesureit's":"确保","atleast15characters":"至少15个字符","or":"或者","atleast8characters":"至少8个字符","includinganumber":"包括数字","registration is currently closed.":"注册目前已关闭。","please register during weekdays.":"请在工作日注册。","confirmpasswordtocontinue":"确认密码以继续","confirmpassword":"确认密码","tip:":"提示:","joe sandbox cloud basic registration":"joe sandbox cloud基本注册","signedinas":"登录身份为","setstatus":"状态设置","you will then receive a password reset link by email.":"然后，您将通过电子邮件收到密码重置链接。","perform apk dex code instrumentation":"执行APK DEX代码安全测试","newgist":"新建gist(代码片段)","neworganization":"新建组织","newproject":"新建项目","yourprofile":"个人资料","collaboration":"协作","collaborate with joe sandbox view and joe sandbox class":"与joe sandbox view 和joe sandbox class进行协作分析","share sample":"共享样本","encrypt analysis":"加密分析","upgrade":"升级","featurepreview":"功能预览","signout":"退出","pullrequests":"拉取请求","marketplace":"应用商城","explore":"探索","issues":"议题","overview":"概况","repositories":"仓库","apk instrumentation":"APK安全测试","recentactivity":"最近动态","allactivity":"所有动态","loadingactivity...":"加载动态中...","more":"更多","createanorganization":"创建一个组织","exploremore→":"探索更多","showmore":"展示更多","search (hash, id, tag) ...":"搜索 (hash, id, tag) ...","request a new password":"获取新密码","please enter your email address.":"请输入您的电子邮件地址。","email address":"电子邮件地址","type:":"类型:","all":"所有","selecttype":"选择类型","selectlanguage":"选择语言","findarepository…":"搜索项目…","searchorjumpto…":"搜索或跳转到…","__comments-8":"User&Organization","pinned":"置顶","followers":"粉丝","following":"正在关注","please check your emails. if the given account exists and has an associated email address, a password-reset link has been sent.":"请检查您的电子邮件。如果帐户存在，并且有关联的电子邮件地址，则已发送密码重置链接。","30 sec":"30秒","500 sec":"500秒","highlights":"高光时刻","execution / run time":"执行/运行时间","contributionactivity":"贡献动态","showmoreactivity":"加载更多动态","people":"成员","members":"成员","toplanguages":"主要编程语言","mostusedtopics":"最常用的话题","verified":"已认证","reportabuse":"举报滥用","organizations":"组织","__comments-9":"Repository","request link":"请求链接","unstar":"取消星标","watch":"关注","unwatch":"取消关注","fork":"复刻","unfork":"取消复刻","new":"新建","languages":"语言","about":"关于","code":"代码","dependencies":"依赖","captcha not solved.":"验证码未通过","createrepository":"新建仓库","owner":"拥有者","repositoryname":"仓库名称","description":"描述","(optional)":"(可选)","public":"公共","private":"私有","packages":"包","secrets":"密钥","security":"安全","notifications":"通知","discussions":"讨论","sponsor":"赞助","sponsorthisproject":"赞助该项目","learnmoreabout":"了解更多关于","insights":"统计","actions":"操作","releases":"发行版","addfile":"添加文件","createnewfile":"新建文件","uploadfiles":"上传文件","readme":"自述文件","commits":"次提交","mergepullrequest":"合并拉取请求","switchbranches/tags":"切换分支/标签","default":"默认","gotofile":"文件查找","usedby":"使用者","contributors":"贡献者","viewlicense":"查看License","noreleasespublished":"无发行版","createanewrelease":"创建发行版","nopackagespublished":"未发布包","publishyourfirstpackage":"发布你的第一个包","editrepositorydetails":"编辑仓库详情","website":"网站","advanced":"高级","joe sandbox detect":"joe sandbox检测","joe sandbox uploader":"joe sandbox上传","clone":"克隆","clonewithhttps":"HTTPS方式克隆","clonewithssh":"使用SSH方式克隆","usegitorcheckoutwithsvnusingtheweburl.":"使用Git或SVN通过该网址检出。","useapassword-protectedsshkey.":"使用受密码保护的SSH密钥。","usessh":"使用SSH","usehttps":"使用HTTPS","downloadzip":"下载Zip压缩包","thisrepository":"该仓库","__comments-compare":"Comparingchanges","comparingchanges":"差异比对","compare":"对比","choosetwobranchestoseewhat’schangedortostartanewpullrequest.ifyouneedto,youcanalso":"选择两个分支以比较差异或启动新的拉取请求。如果需要，你也可以","compareacrossforks":"跨复刻比较","request new password":"获取新密码","forgot your password?":"忘记密码了？","openall":"打开全部","author":"作者","labels":"标签","label":"标签","milestones":"里程碑","sort":"排序","assignee":"受理人","filterbywho’sassigned":"按受理人筛选","don't have a login yet?":"还没有登录？","confirmed":"已确认","log in":"登录","go to registration page":"转到注册页面","dangerzone":"危险区","changerepositoryvisibility":"更改仓库可见性","changevisibility":"更改可见性","thisrepositoryiscurrentlypublic.":"该仓库当前是公有的","transferownership":"转让所有权","transfer":"转让","div":"差异","markthisrepositoryasarchivedandread-only.":"将此仓库标记为已存档和只读。","archivethisrepository":"归档该仓库","deletethisrepository":"删除该仓库","manageaccess":"访问管理","whohasaccess":"谁有权访问","publicrepository":"公共仓库","thisrepositoryispublicandvisibletoanyone.":"该仓库是公开的，对任何人都可见。","privaterepository":"私有仓库","onlythosewithaccesstothisrepositorycanviewit.":"只有拥有该仓库访问权的用户才能查看。","manage":"管理","directaccess":"直接访问","collaboratorshaveaccesstothisrepository.onlyyoucancontributetothisrepository.":"个协作者有权访问此仓库。只有您可以对此仓库做出贡献。","youhaven'tinvitedanycollaboratorsyet":"您尚未邀请任何协作者","inviteacollaborator":"邀请协作者","integrations":"集成","settings":"设置","personalsettings":"个人设置","profile":"个人资料","account":"账号","accountsecurity":"账号安全","securitylog":"安全日志","security&analysis":"安全&分析","emails":"电子邮箱","billing":"账单","sshandgpgkeys":"SSH与GPG公钥","blockedusers":"黑名单","savedreplies":"保存的回复","applications":"应用","developersettings":"开发者设置","rename":"重命名","options":"选项","branch":"分支","branches":"分支","tags":"标签","publicprofile":"公开个人资料","name":"名字","publicemail":"公开邮箱","bio":"个人简介","__comments-12":"CreateaRepository","arepositorycontainsallprojectfiles,includingtherevisionhistory.alreadyhaveaprojectrepositoryelsewhere?":"仓库包含项目中的所有文件，包括修订历史记录。在其他地方已有仓库？","analyze":"分析","editors":"编辑","register":"注册","accept cookies":"接受cookie","login":"登录","results":"结果","cancel":"取消","analysis":"分析","make sure to use the original sample name. do not rename samples!":"确保使用原始样品名称。不要重命名样本！","max. 100mb":"最大100mb","choose file":"选择文件","upload sample":"上传样本","joe sandbox detects and analyzes potential malicious files and urls on windows, android, mac os, linux, and ios for suspicious activities. it performs deep malware analysis and generates comprehensive and detailed analysis reports. this website gives you access to the":"joe sandbox检测并分析windows、android、mac os、linux和ios上的潜在恶意文件和URL，以发现可疑活动。它执行深度恶意软件分析，并生成全面而详细的分析报告。这个网站让你可以访问","community edition of joe sandbox cloud":"joe sandbox cloud社区版",". it allows you to run a maximum of 15 analyses / month, 5 analyses / day on windows, linux and android with limited analysis output.":"它允许您每月最多运行15次分析，在windows、linux和android上每天运行5次分析，分析输出有限。","to run more analyses on any operating system with full access to all features, please":"要在能够完全访问所有功能的任何操作系统上运行更多分析，请","purchase a cloud pro account":"购买cloud专业版帐户"," . want to trial pro first? ":"想先试用专业版吗？","get your free cloud pro trial today":"立即获得免费的cloud专业版试用版","browse url":"浏览url","download & execute file":"下载并执行文件","command line":"命令行","default browser":"默认浏览器","auto analysis system selection":"自动分析系统选择","chooses the best matching systems based on the file extension of the submitted sample":"根据提交样本的文件扩展名选择最佳匹配系统","uncheck to see all available systems":"取消选中以查看所有可用的系统","choose analysis system":"选择分析系统","select a system or start typing to filter... ":"选择一个系统或开始键入以进行过滤...","live interaction":"实时互动","use live interaction":"使用实时互动","deep analysis report":"深度分析报告","network":"网络","internet access":"互联网访问","code analysis":"代码分析","filtering and performance":"筛选和性能","fast mode":"快速模式","enable secondary results":"启用次要结果","check cache":"检查缓存","intelligence":"情报","cmdline argument":"cmdline参数","cookbooks":"基础配置","coobook setup code":"基础配置安装代码","url reputation":"网址信誉","anti-evasion language & country":"反规避语言和国家","change system date":"更改系统日期","normal user":"普通用户","tagging":"标记","no tags selected":"未选择标签","your complete analysis will be":"您的完整分析将","published on this website":"发布在本网站上，","and":"与","accessible to anyone":"任何人都可以访问","(including screenshots). upgrade to":"(包括截图)。升级到","cloud pro":"cloud专业版","to get a private account.":"以获得私人帐户。"," browse url (safari)":"浏览url (safari)","browse url (default browser)":"浏览url(默认浏览器）","archive password":"解压密码","create, search and select tags":"创建、搜索和选择标签","add new tag":"添加新标签","the sample / url is analyzed on a system with full access to the internet!":"样本/ url在可以完全访问互联网的系统上进行分析！","secondary results":"次要结果","such as yara rule generation, classification via joe sandbox class as well as several detail reports. analysis will run faster if secondary results are disabled.":"例如yara规则生成、通过joe sandbox类分类以及几个详细报告。如果禁用次要结果，分析将运行得更快。","stop if any previous analysis matches your current submission (hash for a file or text for a url).":"如果之前的任何分析与您当前提交的内容相匹配(文件的hash或url的文本)，则停止","send notification email":"发送通知电子邮件","send an email notification once your submission has been analysed.":"分析完您的提交后，发送电子邮件通知。","let other users download your sample in addition to the analysis data and reports":"除了分析数据和报告之外，让其他用户下载您的样本","export the report(s) from this analysis to":"将此分析的报告导出到","this password will be used to decrypt archives (zip, 7z, rar etc.).":"该密码将用于解压压缩包(zip、7z、rar等)","the default password is \"infected\". only alphabetic letters and numbers are allowed!":"默认密码是“infected”。只允许字母和数字！","this only works for sample submissions":"这仅适用于提交的样本","use third party url reputation lookup.":"使用第三方url信誉分析引擎查找。","this will upload urls and domains to third party services and whois servers":"这将把URL和域名上传到第三方服务和whois服务器","enables secondary results":"启用次要结果","(not e.g. for \"download & execute file\").":"(例如，不适用于“下载并执行文件”)。","analysis encryption":"分析加密","encrypt analysis (i.e. samples, reports) after the analysis.":"分析后加密分析结果(即样本、报告)。","your input will be used to":"您的输入将被用于","your account.":"你的账户。","first and lastname":"名字和姓氏","company webpage":"公司网页","industry":"行业","and understand that the analysis results will be published in the":"并了解分析结果将在","report section":"报告部分",". joe sandbox cloud basic is for evaluation use only.":"，joe sandbox cloud基础版仅供评估使用。","business email address":"商务电子邮件地址","how did you find us?":"你是怎么找到我们的？","would you like to receive our newsletters?":"你想收到我们的新闻快报吗？","yes":"是","no":"否","what are your compelling reasons for using joe sandbox basic?":"您使用joe sandbox 基础版的令人信服的理由是什么？","joe sandbox cloud basic registration form":"joe sandbox cloud 基础版本注册","approve":"批准"}}
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
 
  // translate "about"
  function translateDesc() {
    $(".repository-content .f4").append("<br/>");
    $("#translate-me").click(function() {
      // get description text
      const desc = $(".repository-content .f4")
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();
 
      if(!desc) {
        return;
      }

    });
  }  
 
  function translateByCssSelector() {
    if(locales.css) {
      for(var css of locales.css) {
        if($(css.selector).length > 0) {
          if(css.key === '!html') {
            $(css.selector).html(css.replacement);
          } else {
            $(css.selector).attr(css.key, css.replacement);
          }
        }
      }
    }
  }
})();
