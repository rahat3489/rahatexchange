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
  function layout() {                 // 7 boxes: 4 + 3 on a computer; on a phone an odd last box takes the full row
    var vis = [].filter.call(sec.querySelectorAll(".lbox"), function (b) { return !b.hidden; });
    var g = sec.querySelector(".lboxes"); g.classList.toggle("four", vis.length === 7 || vis.length === 8);
    vis.forEach(function (b, i) { b.classList.toggle("wide", vis.length % 2 === 1 && i === vis.length - 1); });
  }
  var last = 0;
  function ago() {
    var el = sec.querySelector(".ago"); if (!last || !el) return;
    var m = Math.max(0, Math.round((Date.now() / 1000 - last) / 60));
    var tn = sec.getAttribute("data-now"), ta = sec.getAttribute("data-ago");
    if (tn && ta) { el.textContent = " · " + (m < 1 ? tn : ta.replace("{m}", m)); return; }
    el.textContent = ar ? (m < 1 ? " · تم التحديث الآن" : " · آخر تحديث قبل " + m + " دقيقة")
                        : (m < 1 ? " · updated just now" : " · updated " + m + " min ago");
  }
  function load() {
    fetch(URL, { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
      try { window.dispatchEvent(new CustomEvent("rahat:stats", { detail: d })); } catch (e) {}
      if (!d || !d.ok) return;
      put("customers", d.customers != null ? fmt(d.customers) : null);
      put("trades", d.trades != null ? fmt(d.trades) : null,
          d.buy != null && d.sell != null ? (ar ? fmt(d.buy) + " شراء · " + fmt(d.sell) + " بيع" : fmt(d.buy) + " buy · " + fmt(d.sell) + " sell") : null);
      put("month", d.month != null ? fmt(d.month) : null);
      put("positive", d.positive != null ? d.positive + "%" : null,
          d.reviews != null ? (ar ? "من " + fmt(d.reviews) + " تقييماً للعملاء" : "from " + fmt(d.reviews) + " customer reviews") : null);
      if (d.trades && d.customers && d.trades >= d.customers)
        put("repeat", Math.round((d.trades - d.customers) / d.trades * 100) + "%");
      layout();
      put("completion", d.completion === 100 ? "100%" : null);
      put("pay_min", d.pay_min != null ? String(d.pay_min) : null);
      put("release_min", d.release_min != null ? String(d.release_min) : null);
      layout();
      sec.querySelector(".live").hidden = false;
      last = d.updated || 0; ago();
    }).catch(function () {});
  }
  load(); setInterval(load, 60000); setInterval(ago, 30000);
})();
