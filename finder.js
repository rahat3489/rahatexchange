/* "Find the right ad for you" + "My live ads". The ads come from my agent every minute (with the live numbers).
   Matching: the ONLINE ad of that coin and side whose limits fit the amount, with the highest minimum.
   No ad fits (or ads cannot be read): the button opens my Binance profile. */
(function () {
  var T = {
    en: ["Find the right ad for you", "Three quick choices, then I take you straight to my matching ad on Binance.", "What do you want to do?", "Sell crypto", "get AED in your bank", "Buy crypto", "pay AED from your bank", "Which coin?", "How much?", "Online", "Offline", "My {c} ad for AED {a} – {b}", "Open this ad on Binance", "No ad fits {x} AED right now", "Open my Binance profile to see all my ads", "Open my profile on Binance", "My live ads", "Prices and limits straight from Binance, updated every minute.", "You sell {c}", "I pay you AED", "You buy {c}", "you pay me AED", "No ad right now", "Type the amount in AED", "In my profile, choose this ad:", "Open in the Binance app"],
    ar: ["اعثر على الإعلان المناسب لك", "ثلاثة اختيارات سريعة، ثم أنقلك مباشرة إلى إعلاني المناسب على Binance.", "ماذا تريد أن تفعل؟", "بيع العملات", "استلم الدرهم في بنكك", "شراء العملات", "ادفع بالدرهم من بنكك", "أي عملة؟", "كم المبلغ؟", "متصل", "غير متصل", "إعلاني لـ {c} من {a} إلى {b} درهم", "افتح هذا الإعلان على Binance", "لا يوجد إعلان يناسب {x} درهم الآن", "افتح ملفي على Binance لرؤية جميع إعلاناتي", "افتح ملفي على Binance", "إعلاناتي المباشرة", "الأسعار والحدود مباشرة من Binance، تتحدث كل دقيقة.", "أنت تبيع {c}", "أدفع لك بالدرهم", "أنت تشتري {c}", "تدفع لي بالدرهم", "لا يوجد إعلان الآن", "اكتب المبلغ بالدرهم", "في ملفي، اختر هذا الإعلان:", "افتح في تطبيق Binance"],
    hi: ["अपने लिए सही ऐड चुनें", "तीन आसान विकल्प, फिर मैं आपको सीधे Binance पर मेरे सही ऐड पर ले जाता हूँ।", "आप क्या करना चाहते हैं?", "क्रिप्टो बेचें", "अपने बैंक में AED पाएँ", "क्रिप्टो खरीदें", "अपने बैंक से AED भुगतान करें", "कौन सा कॉइन?", "कितना?", "ऑनलाइन", "ऑफ़लाइन", "मेरा {c} ऐड, AED {a} – {b}", "यह ऐड Binance पर खोलें", "अभी {x} AED के लिए कोई ऐड नहीं", "मेरे सभी ऐड देखने के लिए Binance प्रोफ़ाइल खोलें", "Binance पर मेरी प्रोफ़ाइल खोलें", "मेरे लाइव ऐड", "कीमतें और लिमिट सीधे Binance से, हर मिनट अपडेट।", "आप {c} बेचते हैं", "मैं आपको AED देता हूँ", "आप {c} खरीदते हैं", "आप मुझे AED देते हैं", "अभी कोई ऐड नहीं", "AED में राशि लिखें", "मेरी प्रोफ़ाइल में यह ऐड चुनें:", "Binance ऐप में खोलें"],
    ur: ["اپنے لیے صحیح اشتہار تلاش کریں", "تین آسان انتخاب، پھر میں آپ کو سیدھا Binance پر اپنے مناسب اشتہار تک لے جاتا ہوں۔", "آپ کیا کرنا چاہتے ہیں؟", "کرپٹو بیچیں", "اپنے بینک میں AED وصول کریں", "کرپٹو خریدیں", "اپنے بینک سے AED ادا کریں", "کون سا کوائن؟", "کتنی رقم؟", "آن لائن", "آف لائن", "میرا {c} اشتہار، AED {a} – {b}", "یہ اشتہار Binance پر کھولیں", "ابھی {x} AED کے لیے کوئی اشتہار نہیں", "میرے تمام اشتہار دیکھنے کے لیے Binance پروفائل کھولیں", "Binance پر میری پروفائل کھولیں", "میرے لائیو اشتہار", "قیمتیں اور حدیں سیدھا Binance سے، ہر منٹ اپ ڈیٹ۔", "آپ {c} بیچتے ہیں", "میں آپ کو AED دیتا ہوں", "آپ {c} خریدتے ہیں", "آپ مجھے AED دیتے ہیں", "ابھی کوئی اشتہار نہیں", "رقم AED میں لکھیں", "میری پروفائل میں یہ اشتہار چنیں:", "Binance ایپ میں کھولیں"],
    bn: ["আপনার জন্য সঠিক অ্যাড খুঁজুন", "তিনটি সহজ বাছাই, তারপর আমি আপনাকে সরাসরি Binance-এ আমার মানানসই অ্যাডে নিয়ে যাই।", "আপনি কী করতে চান?", "ক্রিপ্টো বিক্রি", "আপনার ব্যাংকে AED পান", "ক্রিপ্টো কেনা", "আপনার ব্যাংক থেকে AED দিন", "কোন কয়েন?", "কত টাকা?", "অনলাইন", "অফলাইন", "আমার {c} অ্যাড, AED {a} – {b}", "এই অ্যাড Binance-এ খুলুন", "এখন {x} AED-এর জন্য কোনো অ্যাড নেই", "আমার সব অ্যাড দেখতে Binance প্রোফাইল খুলুন", "Binance-এ আমার প্রোফাইল খুলুন", "আমার লাইভ অ্যাড", "দাম ও লিমিট সরাসরি Binance থেকে, প্রতি মিনিটে আপডেট।", "আপনি {c} বিক্রি করেন", "আমি আপনাকে AED দিই", "আপনি {c} কেনেন", "আপনি আমাকে AED দেন", "এখন কোনো অ্যাড নেই", "AED-তে পরিমাণ লিখুন", "আমার প্রোফাইলে এই অ্যাডটি বেছে নিন:", "Binance অ্যাপে খুলুন"],
    ru: ["Найдите подходящее объявление", "Три простых шага — и я открою вам моё подходящее объявление на Binance.", "Что вы хотите сделать?", "Продать крипту", "получить AED на свой банк", "Купить крипту", "оплатить AED со своего банка", "Какая монета?", "Какая сумма?", "Онлайн", "Офлайн", "Моё объявление {c}: AED {a} – {b}", "Открыть объявление на Binance", "Сейчас нет объявления на {x} AED", "Откройте мой профиль Binance, чтобы увидеть все объявления", "Открыть мой профиль на Binance", "Мои объявления онлайн", "Цены и лимиты прямо с Binance, обновляются каждую минуту.", "Вы продаёте {c}", "я плачу вам AED", "Вы покупаете {c}", "вы платите мне AED", "Сейчас нет объявлений", "Введите сумму в AED", "В моём профиле выберите это объявление:", "Открыть в приложении Binance"],
    zh: ["为您找到合适的广告", "三个简单选择，然后我直接带您到我在币安上的匹配广告。", "您想做什么？", "卖出加密货币", "收取 AED 到您的银行", "买入加密货币", "从您的银行支付 AED", "哪个币种？", "多少金额？", "在线", "离线", "我的 {c} 广告：AED {a} – {b}", "在币安上打开此广告", "目前没有适合 {x} AED 的广告", "打开我的币安主页查看所有广告", "在币安上打开我的主页", "我的实时广告", "价格和限额直接来自币安，每分钟更新。", "您卖出 {c}", "我付您 AED", "您买入 {c}", "您付我 AED", "目前没有广告", "输入 AED 金额", "在我的主页中选择这个广告：", "在币安 App 中打开"],
    fa: ["آگهی مناسب خود را پیدا کنید", "سه انتخاب ساده، سپس شما را مستقیم به آگهی مناسبم در بایننس می‌برم.", "چه کاری می‌خواهید انجام دهید؟", "فروش کریپتو", "دریافت AED در بانک شما", "خرید کریپتو", "پرداخت AED از بانک شما", "کدام کوین؟", "چه مبلغی؟", "آنلاین", "آفلاین", "آگهی {c} من: AED {a} – {b}", "این آگهی را در بایننس باز کنید", "اکنون آگهی‌ای برای {x} AED نیست", "پروفایل بایننس من را برای دیدن همه آگهی‌ها باز کنید", "پروفایل من را در بایننس باز کنید", "آگهی‌های زنده من", "قیمت‌ها و محدودیت‌ها مستقیم از بایننس، هر دقیقه به‌روز.", "شما {c} می‌فروشید", "من به شما AED می‌پردازم", "شما {c} می‌خرید", "شما به من AED می‌پردازید", "اکنون آگهی‌ای نیست", "مبلغ را به AED وارد کنید", "در پروفایل من این آگهی را انتخاب کنید:", "باز کردن در اپلیکیشن بایننس"],
    fil: ["Hanapin ang tamang ad para sa iyo", "Tatlong mabilis na pili, tapos dadalhin kita diretso sa tugmang ad ko sa Binance.", "Ano ang gusto mong gawin?", "Magbenta ng crypto", "tumanggap ng AED sa iyong bangko", "Bumili ng crypto", "magbayad ng AED mula sa iyong bangko", "Anong coin?", "Magkano?", "Online", "Offline", "Ang {c} ad ko para sa AED {a} – {b}", "Buksan ang ad na ito sa Binance", "Walang ad para sa {x} AED ngayon", "Buksan ang Binance profile ko para makita lahat ng ad ko", "Buksan ang profile ko sa Binance", "Mga live ad ko", "Presyo at limit diretso mula sa Binance, updated bawat minuto.", "Magbebenta ka ng {c}", "babayaran kita ng AED", "Bibili ka ng {c}", "babayaran mo ako ng AED", "Walang ad ngayon", "Ilagay ang halaga sa AED", "Sa profile ko, piliin ang ad na ito:", "Buksan sa Binance app"],
    tr: ["Size uygun ilanı bulun", "Üç hızlı seçim, sonra sizi doğrudan Binance'teki uygun ilanıma götürürüm.", "Ne yapmak istiyorsunuz?", "Kripto sat", "AED bankanıza gelsin", "Kripto al", "bankanızdan AED ödeyin", "Hangi coin?", "Ne kadar?", "Çevrimiçi", "Çevrimdışı", "{c} ilanım: AED {a} – {b}", "Bu ilanı Binance'te aç", "Şu an {x} AED için uygun ilan yok", "Tüm ilanlarımı görmek için Binance profilimi açın", "Binance profilimi aç", "Canlı ilanlarım", "Fiyatlar ve limitler doğrudan Binance'ten, her dakika güncellenir.", "{c} satıyorsunuz", "size AED öderim", "{c} alıyorsunuz", "bana AED ödersiniz", "Şu an ilan yok", "Tutarı AED olarak yazın", "Profilimde bu ilanı seçin:", "Binance uygulamasında aç"],
    fr: ["Trouvez l'annonce qui vous convient", "Trois choix rapides, puis je vous emmène directement vers mon annonce correspondante sur Binance.", "Que voulez-vous faire ?", "Vendre des cryptos", "recevez des AED sur votre banque", "Acheter des cryptos", "payez en AED depuis votre banque", "Quelle crypto ?", "Quel montant ?", "En ligne", "Hors ligne", "Mon annonce {c} : AED {a} – {b}", "Ouvrir cette annonce sur Binance", "Aucune annonce pour {x} AED en ce moment", "Ouvrez mon profil Binance pour voir toutes mes annonces", "Ouvrir mon profil sur Binance", "Mes annonces en direct", "Prix et limites directement depuis Binance, mis à jour chaque minute.", "Vous vendez des {c}", "je vous paie en AED", "Vous achetez des {c}", "vous me payez en AED", "Aucune annonce pour le moment", "Saisissez le montant en AED", "Dans mon profil, choisissez cette annonce :", "Ouvrir dans l'application Binance"]
  };
  var ORDER = ["USDT", "BTC", "ETH", "BNB", "USDC", "SOL", "FDUSD", "XRP", "ADA", "DOGE", "PEPE"];
  var PROFILE = "https://app.binance.com/en/qr/dplk3e41a10d1a224a149f23cb0c641a0869";   // opens my profile IN the Binance app (iPhone test, 24 Nov)
  var F = document.getElementById("finder"), A = document.getElementById("ads");
  if (!F || !A) return;
  var lang = document.documentElement.lang || "en", t = T[lang] || T.en;
  var ads = null, side = "sell", coin = null, tab = null, amount = "";
  function n(x) { return Number(x).toLocaleString("en-US", { maximumFractionDigits: 8 }); }
  function f(s, o) { return s.replace(/\{(\w)\}/g, function (_, k) { return o[k]; }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function coins() {
    var set = {}; ads.forEach(function (a) { if (a.online) set[a.coin] = 1; });
    return Object.keys(set).sort(function (a, b) { var i = ORDER.indexOf(a), j = ORDER.indexOf(b); return (i < 0 ? 99 : i) - (j < 0 ? 99 : j) || a.localeCompare(b); });
  }
  function best() {
    var x = Number(String(amount).replace(/[^0-9.]/g, "")) || 0;
    var fit = ads.filter(function (a) { return a.coin === coin && a.side === side && a.online && x >= a.min && x <= a.max; });
    fit.sort(function (a, b) { return b.min - a.min; });
    return { x: x, ad: fit[0] || null };
  }
  function result() {
    var r = F.querySelector(".fresult"), b = best();
    if (!b.x) { r.innerHTML = '<div><b>' + esc(t[23]) + '</b></div><a class="btn ghost" href="' + PROFILE + '" rel="nofollow noopener" target="_blank">' + esc(t[25]) + '</a>'; return; }
    if (!b.ad) { r.innerHTML = '<div><span class="no">' + esc(f(t[13], { x: n(b.x) })) + '</span><b>' + esc(t[14]) + '</b></div><a class="btn main" href="' + PROFILE + '" rel="nofollow noopener" target="_blank">' + esc(t[25]) + '</a>'; return; }
    var a = b.ad;
    r.innerHTML = '<div><span class="ok">● ' + esc(t[9]) + '</span><span class="pick">' + esc(t[24]) + '</span><b>' + esc(f(t[11], { c: a.coin, a: n(a.min), b: n(a.max) })) + '</b><span class="price">1 ' + esc(a.coin) + ' = ' + n(a.price) + ' AED</span></div>'
      + '<a class="btn main" href="' + PROFILE + '" rel="nofollow noopener" target="_blank">' + esc(t[25]) + '</a>';
  }
  function chips(list, cur, cls) {
    return list.map(function (c) { return '<button type="button" class="' + (c === cur ? "on" : "") + '" data-' + cls + '="' + esc(c) + '">' + esc(c) + '</button>'; }).join("");
  }
  function drawFinder() {
    var cs = coins(); if (!coin || cs.indexOf(coin) < 0) coin = cs[0];
    F.innerHTML = '<div class="wrap"><h2>' + esc(t[0]) + '</h2><p class="sub">' + esc(t[1]) + '</p><div class="fcard">'
      + '<div class="fstep"><span class="fnum">1</span><b>' + esc(t[2]) + '</b><div class="seg">'
      + '<button type="button" data-side="sell" class="' + (side === "sell" ? "on" : "") + '">' + esc(t[3]) + '<small>' + esc(t[4]) + '</small></button>'
      + '<button type="button" data-side="buy" class="' + (side === "buy" ? "on" : "") + '">' + esc(t[5]) + '<small>' + esc(t[6]) + '</small></button></div></div>'
      + '<div class="fstep"><span class="fnum">2</span><b>' + esc(t[7]) + '</b><div class="chips">' + chips(cs, coin, "coin") + '</div></div>'
      + '<div class="fstep"><span class="fnum">3</span><b>' + esc(t[8]) + '</b><label class="amt"><input inputmode="decimal" autocomplete="off" placeholder="10,000" aria-label="AED" value="' + esc(amount) + '"><span>AED</span></label></div>'
      + '<div class="fresult" aria-live="polite"></div></div></div>';
    F.querySelectorAll("[data-side]").forEach(function (b) { b.onclick = function () { side = b.getAttribute("data-side"); drawFinder(); }; });
    F.querySelectorAll("[data-coin]").forEach(function (b) { b.onclick = function () { coin = b.getAttribute("data-coin"); drawFinder(); }; });
    var inp = F.querySelector(".amt input");
    inp.oninput = function () { amount = inp.value; result(); };
    result();
  }
  function card(a) {
    return '<div class="ad' + (a.online ? "" : " off") + '"><div><b>' + n(a.price) + '</b><span>AED ' + n(a.min) + ' – ' + n(a.max) + '</span></div>'
      + (a.online ? '<span class="ok">● ' + esc(t[9]) + '</span>' : '<span class="no">' + esc(t[10]) + '</span>') + '</div>';
  }
  function drawAds() {
    var cs = coins(); if (!tab || cs.indexOf(tab) < 0) tab = cs[0];
    var col = function (sd, h, sub) {
      var list = ads.filter(function (a) { return a.coin === tab && a.side === sd && a.online; });   // owner: offline ads are not shown
      return '<div><h3>' + esc(f(h, { c: tab })) + ' <small>' + esc(sub) + '</small></h3>' + (list.length ? list.map(card).join("") : '<p class="none">' + esc(t[22]) + '</p>') + '</div>';
    };
    A.innerHTML = '<div class="wrap"><h2>' + esc(t[16]) + '</h2><p class="sub">' + esc(t[17]) + '</p><div class="tabs">' + chips(cs, tab, "tab") + '</div>'
      + '<div class="adcols">' + col("sell", t[18], t[19]) + col("buy", t[20], t[21]) + '</div></div>';
    A.querySelectorAll("[data-tab]").forEach(function (b) { b.onclick = function () { tab = b.getAttribute("data-tab"); drawAds(); }; });
  }
  window.addEventListener("rahat:stats", function (e) {
    var d = e.detail || {};
    if (!d.ads || !d.ads.length) return;
    var first = !ads; ads = d.ads;
    F.hidden = false; A.hidden = false;
    var typing = F.contains(document.activeElement);
    if (first || !typing) drawFinder(); else result();
    drawAds();
  });
})();
