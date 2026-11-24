/* Live numbers from my Binance P2P profile, sent by my agent every minute. If they cannot be read, the numbers
   already on the page stay. The completion rate is only sent when it is 100%. */
(function () {
  var URL = "https://rahat-agent.duckdns.org/public/stats.json";
  var sec = document.getElementById("live"); if (!sec) return;
  var ar = sec.getAttribute("data-lang") === "ar";
  var fmt = function (x) { return Number(x).toLocaleString("en-US"); };
  var box = function (k) { return sec.querySelector('.lbox[data-k="' + k + '"]'); };
  function put(k, v, sub) {
    var b = box(k); if (!b) return;
    if (v === undefined || v === null) { if (k === "completion") b.hidden = true; return; }
    b.querySelector(".n").textContent = v; b.hidden = false;
    if (sub) b.querySelector(".d").textContent = sub;
  }
  var last = 0;
  function ago() {
    var el = sec.querySelector(".ago"); if (!last || !el) return;
    var m = Math.max(0, Math.round((Date.now() / 1000 - last) / 60));
    el.textContent = ar ? (m < 1 ? " · تم التحديث الآن" : " · آخر تحديث قبل " + m + " دقيقة")
                        : (m < 1 ? " · updated just now" : " · updated " + m + " min ago");
  }
  function load() {
    fetch(URL, { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
      if (!d || !d.ok) return;
      put("customers", d.customers != null ? fmt(d.customers) : null);
      put("trades", d.trades != null ? fmt(d.trades) : null,
          d.buy != null && d.sell != null ? (ar ? fmt(d.buy) + " شراء · " + fmt(d.sell) + " بيع" : fmt(d.buy) + " buy · " + fmt(d.sell) + " sell") : null);
      put("month", d.month != null ? fmt(d.month) : null);
      put("positive", d.positive != null ? d.positive + "%" : null,
          d.reviews != null ? (ar ? "من " + fmt(d.reviews) + " تقييماً للعملاء" : "from " + fmt(d.reviews) + " customer reviews") : null);
      put("completion", d.completion === 100 ? "100%" : null);
      put("pay_min", d.pay_min != null ? String(d.pay_min) : null);
      put("release_min", d.release_min != null ? String(d.release_min) : null);
      sec.querySelector(".live").hidden = false;
      last = d.updated || 0; ago();
    }).catch(function () {});
  }
  load(); setInterval(load, 60000); setInterval(ago, 30000);
})();
