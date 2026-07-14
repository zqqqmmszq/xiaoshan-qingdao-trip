(() => {
  "use strict";

  const trip = window.TRIP_DATA;
  const weather = window.WEATHER_DATA;
  if (!trip || !weather) {
    document.body.innerHTML = '<main style="padding:2rem;font-family:system-ui"><h1>数据待核实</h1><p>攻略数据文件未能载入，请确认 data 目录完整。</p></main>';
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const storageKey = "qingdaoTrip2026";
  const statusLabel = Object.fromEntries(trip.statusLegend.map(item => [item.key, item.label]));
  const navItems = [
    ["overview", "总览"], ["weather", "天气"], ["transport", "往返交通"], ["hotels", "酒店"],
    ["itinerary", "四日时间轴"], ["day1", "第 1 天"], ["day2", "第 2 天"], ["day3", "第 3 天"], ["day4", "第 4 天"],
    ["food", "餐饮"], ["budget", "预算"], ["checklist", "准备清单"], ["backup", "备用方案"], ["sources", "来源"]
  ];
  const mobileItems = [["overview", "总览"], ["itinerary", "行程"], ["budget", "预算"], ["checklist", "清单"], ["sources", "来源"]];
  const typeMeta = {
    transport: {label:"交通", color:"#2e82a5"}, sight:{label:"景点", color:"#1b9a8a"}, meal:{label:"用餐", color:"#c8963e"}, rest:{label:"休息", color:"#8d7bb3"}, hotel:{label:"酒店", color:"#e8755b"}
  };
  const modeLabels = {normal:"舒适省钱路线", rain:"下雨路线", heat:"高温 / 低体力路线", coast:"海边关闭路线", laoshan:"含崂山版"};

  let state = loadState();
  let activeMode = state.mode || trip.meta.defaultMode;
  let toastTimer;

  function loadState() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
    catch { return {}; }
  }
  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch { /* 静态页无存储权限时安静降级 */ }
  }
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
  }
  function money(value) { return `¥${Math.round(Number(value || 0)).toLocaleString("zh-CN")}`; }
  function statusBadge(status) { return `<span class="status ${escapeHTML(status)}">${escapeHTML(statusLabel[status] || status || "待核实")}</span>`; }
  function mapUrl(name, provider = "amap") {
    const q = encodeURIComponent(`青岛 ${name}`);
    return provider === "baidu" ? `https://map.baidu.com/search/${q}` : `https://uri.amap.com/search?keyword=${q}&city=%E9%9D%92%E5%B2%9B&callnative=0`;
  }
  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function getShanghaiNow() {
    const parts = new Intl.DateTimeFormat("en-CA", {timeZone:"Asia/Shanghai", year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h23"}).formatToParts(new Date());
    const obj = Object.fromEntries(parts.map(p => [p.type, p.value]));
    return {date:`${obj.year}-${obj.month}-${obj.day}`, minutes:Number(obj.hour) * 60 + Number(obj.minute), display:`${obj.year}-${obj.month}-${obj.day} ${obj.hour}:${obj.minute}`};
  }
  function parseMinutes(time) { const [h,m] = time.split(":").map(Number); return h * 60 + m; }

  function renderNav() {
    $("#desktopNav").innerHTML = navItems.map(([id,label]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join("");
    $("#mobileNav").innerHTML = mobileItems.map(([id,label]) => `<a href="#${id}" data-section="${id}">${label}</a>`).join("");
  }

  function renderHero() {
    $("#heroFacts").innerHTML = trip.heroFacts.map(item => `<article class="fact-card reveal"><small>${escapeHTML(item.label)}</small><strong>${escapeHTML(item.value)}</strong><span>${escapeHTML(item.sub)}</span></article>`).join("");
    updateTimeCards();
  }

  function updateTimeCards() {
    const now = getShanghaiNow();
    const start = new Date(trip.meta.startDate).getTime();
    const end = new Date(trip.meta.endDate).getTime();
    const current = Date.now();
    const label = $("#countdownLabel"), value = $("#countdownValue"), sub = $("#countdownSub");
    if (current < start) {
      const days = Math.max(0, Math.ceil((start - current) / 86400000));
      label.textContent = "距离出发"; value.textContent = `${days} 天`; sub.textContent = "7 月 18 日周六出发";
    } else if (current <= end) {
      const day = trip.days.find(d => d.date === now.date);
      label.textContent = "旅行进行中"; value.textContent = day ? `第 ${day.day} 天` : "青岛时间"; sub.textContent = now.display;
    } else {
      label.textContent = "行程状态"; value.textContent = "已结束"; sub.textContent = "可进入预算区复盘";
    }
    const task = deriveNowTask(now);
    $("#nowTask").textContent = task.text;
    $("#nextStopCard").innerHTML = `<span>${escapeHTML(task.label)}</span><strong>${escapeHTML(task.title)}</strong><small>${escapeHTML(task.sub)}</small>`;
    $("#nextActionLink").href = task.href;
    $("#nextActionLink").innerHTML = `${escapeHTML(task.action)} →`;
    updateLiveStatuses(now);
    highlightTimeline(now);
  }

  function deriveNowTask(now) {
    const today = trip.days.find(d => d.date === now.date);
    if (today) {
      const current = today.events.find(e => now.minutes >= parseMinutes(e.start) && now.minutes < parseMinutes(e.end));
      const next = today.events.find(e => parseMinutes(e.start) > now.minutes);
      if (current) return {text:`第 ${today.day} 天 · ${current.title}。按卡片完成当前段，结束前查看下一段交通。`, label:"当前进行", title:current.title, sub:`${current.start}—${current.end}`, href:`#day${today.day}`, action:"查看当前行程"};
      if (next) return {text:`第 ${today.day} 天下一段是 ${next.start} 的“${next.title}”，建议提前 10—15 分钟准备。`, label:"下一站", title:next.title, sub:`${next.start} 出发`, href:`#day${today.day}`, action:"查看下一段"};
      return {text:`第 ${today.day} 天计划已完成。21:00 复核明天天气、预约和开放状态。`, label:"今晚任务", title:"复核明日安排", sub:"约 10 分钟", href:"#checklist", action:"打开清单"};
    }
    const startDate = trip.days[0].date;
    if (now.date < startDate) {
      const task = [...trip.todayTasks].reverse().find(t => now.date >= t.date) || trip.todayTasks[0];
      return {text:task.text, label:"行前任务", title:task.text.split("；")[0], sub:"完成后勾选准备清单", href:"#checklist", action:"查看准备清单"};
    }
    return {text:"行程已结束。进入预算区录入实际支出，完成费用复盘。", label:"旅行结束", title:"费用复盘", sub:"修改为实际支付金额", href:"#budget", action:"进入预算复盘"};
  }

  function renderWeather() {
    $("#weatherUpdated").textContent = `更新：${weather.updatedAt} · ${weather.source.name}`;
    $("#weatherNotice").textContent = weather.notice;
    $("#weatherGrid").innerHTML = weather.days.map(day => {
      const temp = day.high == null ? "—" : `${day.high}°`;
      const range = day.low == null ? "待核实" : `最低 ${day.low}℃`;
      return `<article class="weather-card reveal">
        <header><div><span class="eyebrow">${escapeHTML(day.date.slice(5))}</span><h3>${escapeHTML(day.label)}</h3></div>${statusBadge(day.state.includes("待官方") ? "pending" : "refresh")}</header>
        <div class="temp"><strong>${temp}</strong><span>${range}</span></div>
        <div class="weather-slots"><span><b>上午</b>${escapeHTML(day.morning)}</span><span><b>下午</b>${escapeHTML(day.afternoon)}</span><span><b>晚上</b>${escapeHTML(day.evening)}</span></div>
        <footer><b>${escapeHTML(day.wind)}</b><br>${escapeHTML(day.advice)}</footer>
      </article>`;
    }).join("");
    renderComfortChart();
    const c = weather.climateReference;
    $("#climateNotes").innerHTML = [
      ["体感", `${c.temperature}；${c.humidity}`], ["风险", `${c.rainfall}；${c.risks}`], ["穿着", c.clothing]
    ].map(([k,v]) => `<span><b>${k}</b>${escapeHTML(v)}</span>`).join("");
  }

  function renderComfortChart() {
    const days = weather.days;
    const valid = days.filter(d => d.high != null);
    const minT = Math.min(...valid.map(d => d.low), 23), maxT = Math.max(...valid.map(d => d.high), 30);
    const x = i => 85 + i * 175;
    const y = t => 165 - ((t - minT) / Math.max(1, maxT - minT)) * 105;
    const highPoints = days.map((d,i) => d.high == null ? null : `${x(i)},${y(d.high)}`).filter(Boolean).join(" ");
    const lowPoints = days.map((d,i) => d.low == null ? null : `${x(i)},${y(d.low)}`).filter(Boolean).join(" ");
    const svg = `<svg viewBox="0 0 700 220" role="img" aria-label="四日最高与最低温度趋势图">
      <defs><linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8755b" stop-opacity=".26"/><stop offset="1" stop-color="#e8755b" stop-opacity="0"/></linearGradient></defs>
      ${[60,95,130,165].map(v => `<line x1="55" y1="${v}" x2="665" y2="${v}" stroke="currentColor" opacity=".09"/>`).join("")}
      <polyline points="${highPoints}" fill="none" stroke="#e8755b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="${lowPoints}" fill="none" stroke="#2e82a5" stroke-width="3" stroke-dasharray="6 7" stroke-linecap="round"/>
      ${days.map((d,i) => `<g>${d.high == null ? `<circle cx="${x(i)}" cy="112" r="16" fill="none" stroke="currentColor" opacity=".25" stroke-dasharray="3 3"/><text x="${x(i)}" y="116" text-anchor="middle" font-size="10" fill="currentColor" opacity=".6">待核</text>` : `<circle cx="${x(i)}" cy="${y(d.high)}" r="6" fill="#e8755b"/><text x="${x(i)}" y="${y(d.high)-13}" text-anchor="middle" font-size="12" fill="currentColor">${d.high}℃</text><circle cx="${x(i)}" cy="${y(d.low)}" r="5" fill="#2e82a5"/>`}<text x="${x(i)}" y="202" text-anchor="middle" font-size="12" fill="currentColor" opacity=".75">${d.date.slice(5)} ${d.label}</text></g>`).join("")}
      <text x="60" y="22" font-size="11" fill="#e8755b">● 最高温</text><text x="140" y="22" font-size="11" fill="#2e82a5">● 最低温</text>
    </svg>`;
    $("#comfortChart").innerHTML = svg;
  }

  function renderTransport() {
    $("#transportReason").textContent = trip.transport.recommendation.reason;
    $("#switchRule").textContent = trip.transport.recommendation.switchRule;
    $("#transportCompare").innerHTML = trip.transport.compare.map(item => `<tr><td>${escapeHTML(item.type)}<br>${statusBadge(item.status)}</td><td>${escapeHTML(item.doorTime)}<br><small>${escapeHTML(item.schedule)}</small></td><td><b>${escapeHTML(item.roundTrip)}</b><br><small>${escapeHTML(item.oneWay)}</small></td><td>${escapeHTML(item.luggage)}<br><small>${escapeHTML(item.comfort)}</small></td><td>${escapeHTML(item.delay)}<br><small>${escapeHTML(item.changes)}</small></td><td>${escapeHTML(item.firstDay)}</td><td><span class="score">${escapeHTML(item.score)}</span></td></tr>`).join("");
    renderTrainList("#outboundTrains", trip.transport.trains.outbound);
    renderTrainList("#inboundTrains", trip.transport.trains.inbound);
    $("#localSteps").innerHTML = trip.transport.localSteps.map(step => `<article class="local-step reveal">${statusBadge(step.status)}<h4>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.detail)}</p></article>`).join("");
  }
  function renderTrainList(selector, trains) {
    $(selector).innerHTML = trains.map(t => `<div class="train-row"><div class="train-code">${escapeHTML(t.code)}</div><div class="train-route"><b>${escapeHTML(t.from)}</b> → <b>${escapeHTML(t.to)}</b><small>${escapeHTML(t.duration)} · ${escapeHTML(t.availability)}</small></div><div class="train-price"><b>${money(t.price)}</b>${statusBadge(t.status)}</div></div>`).join("");
  }

  function renderHotels() {
    $("#areaStrip").innerHTML = trip.areas.map(area => `<article class="area-card ${area.fit === "首选" ? "recommended" : ""}"><small>${escapeHTML(area.fit)}</small><div class="area-score">${escapeHTML(area.score)}</div><h3>${escapeHTML(area.name)}</h3><p>${escapeHTML(area.transit)}<br>${escapeHTML(area.food)}<br>注意：${escapeHTML(area.drawback)}</p></article>`).join("");
    $("#hotelGrid").innerHTML = trip.hotels.map(h => `<article class="hotel-card reveal">
      <div class="hotel-head"><div><span class="tag">${escapeHTML(h.tag)}</span><h3>${escapeHTML(h.name)}</h3><p class="english">${escapeHTML(h.english)}</p></div><div class="hotel-price"><small>3 晚含税查询价</small><strong>${money(h.total)}</strong>${statusBadge(h.status)}</div></div>
      <div class="hotel-stats"><span><b>地铁</b>${escapeHTML(h.metro)} · ${escapeHTML(h.walk)}</span><span><b>房型</b>${escapeHTML(h.window)}</span><span><b>早餐 / 寄存</b>${escapeHTML(h.breakfast)}；${escapeHTML(h.luggage)}</span></div>
      <div class="pros-cons"><div><b>优点 · </b>${escapeHTML(h.pros)}</div><div><b>缺点 · </b>${escapeHTML(h.cons)}</div></div>
      <div class="hotel-actions"><small>${escapeHTML(h.rating)}<br>${escapeHTML(h.booking)}</small><div class="map-links"><a class="mini-link" href="${mapUrl(h.name)}" target="_blank" rel="noopener noreferrer">高德</a><a class="mini-link" href="${h.url}" target="_blank" rel="noopener noreferrer">查房价 ↗</a></div></div>
    </article>`).join("");
  }

  function renderItinerary() {
    renderOverviewTimeline();
    $("#daysContainer").innerHTML = trip.days.map(renderDay).join("");
    bindDayActions();
    applyMode(activeMode, false);
  }
  function renderOverviewTimeline() {
    const slots = ["早晨","上午","中午","下午","傍晚","夜间"];
    const slotRange = [[0,540],[540,720],[720,840],[840,1020],[1020,1140],[1140,1440]];
    let html = `<div class="timeline-cell head"></div>${slots.map(s => `<div class="timeline-cell head">${s}</div>`).join("")}`;
    trip.days.forEach(day => {
      html += `<div class="timeline-cell day" data-date="${day.date}">D${day.day} · ${day.date.slice(5)}</div>`;
      slotRange.forEach(([from,to]) => {
        const events = day.events.filter(e => parseMinutes(e.start) < to && parseMinutes(e.end) > from);
        html += `<div class="timeline-cell" data-date="${day.date}" data-from="${from}" data-to="${to}">${events.slice(0,2).map(e => `<span class="timeline-block" style="background:${typeMeta[e.type].color}">${escapeHTML(e.title)}</span>`).join("")}</div>`;
      });
    });
    $("#overviewTimeline").innerHTML = html;
  }
  function renderDay(day) {
    const meta = [
      ["步数", day.steps], ["交通", day.cost.transport], ["门票", day.cost.ticket], ["餐饮", day.cost.food]
    ];
    return `<section id="day${day.day}" class="day-section" style="--day-color:${day.color}" aria-labelledby="day${day.day}Title">
      <div class="day-hero reveal"><div class="day-index">0${day.day}</div><div class="day-title"><span>${day.date} · ${day.weekday}</span><h2 id="day${day.day}Title">${escapeHTML(day.theme)}</h2><p>${escapeHTML(day.summary)}</p></div><div class="day-cost">${Object.entries(day.cost).map(([k,v]) => `<span><small>${({transport:"交通",ticket:"门票",food:"餐饮"})[k]}</small><b>${escapeHTML(v)}</b></span>`).join("")}</div></div>
      <div class="mode-advice reveal" data-mode-advice="${day.day}"><b>${modeLabels[activeMode]}</b><p>${escapeHTML(activeMode === "normal" ? day.summary : day.alternatives[activeMode])}</p></div>
      <div class="day-meta-grid reveal">${meta.map(([k,v]) => `<div><b>${k}</b>${escapeHTML(v)}</div>`).join("")}<div><b>必须预约</b>${escapeHTML(day.mustBook)}</div><div><b>来不及可删</b>${escapeHTML(day.cut)}</div></div>
      ${renderRouteMap(day)}
      <div class="event-list">${day.events.map((event,index) => renderEvent(day,event,index)).join("")}</div>
      <div class="event-actions"><button class="button ghost copy-day" type="button" data-day="${day.day}">复制第 ${day.day} 天行程</button></div>
    </section>`;
  }
  function renderRouteMap(day) {
    const points = day.events.map((e,i) => ({x:65 + i * (850 / Math.max(1,day.events.length - 1)), title:e.title.split("·")[0].trim(), color:typeMeta[e.type].color}));
    return `<div class="route-map reveal"><div class="route-map-head"><h3>每日路线示意</h3><p>原创 SVG 时间距离图 · 非地图瓦片</p></div><svg viewBox="0 0 980 125" role="img" aria-label="第 ${day.day} 天路线示意"><path d="M65 56 H915" stroke="currentColor" opacity=".12" stroke-width="5" stroke-linecap="round"/>${points.map((p,i) => `<g><circle cx="${p.x}" cy="56" r="12" fill="${p.color}"/><circle cx="${p.x}" cy="56" r="4" fill="#fff"/><text x="${p.x}" y="28" text-anchor="middle" font-size="11" fill="currentColor">${escapeHTML(day.events[i].start)}</text><text x="${p.x}" y="91" text-anchor="middle" font-size="10" fill="currentColor" opacity=".75">${escapeHTML(p.title.slice(0,9))}</text></g>`).join("")}</svg></div>`;
  }
  function renderEvent(day, event, index) {
    const key = `d${day.day}e${index}`;
    const done = state.completed?.[key];
    const details = [["推荐玩法",event.play],["必看位置",event.must],["拍照 / 光线",event.photo],["门票",event.ticket],["预约渠道",event.reserve],["开放时间",event.open],["排队参考",event.queue],["步行 / 体力",`${event.walk} · ${event.energy}`],["卫生间 / 休息",event.restroom]];
    return `<article class="event-card reveal" data-event-key="${key}" data-date="${day.date}" data-start="${event.start}" data-end="${event.end}" style="--type-color:${typeMeta[event.type].color}">
      <div class="event-time"><b>${event.start}</b><span>— ${event.end}</span></div><div class="event-dot" aria-hidden="true"></div>
      <div class="event-content"><div class="event-top"><div><div class="event-title-line"><span class="tag">${typeMeta[event.type].label}</span><h3>${escapeHTML(event.title)}</h3>${statusBadge(event.status)}</div><p class="event-duration">建议停留 ${escapeHTML(event.duration)}</p></div><button class="check-button ${done ? "done" : ""}" type="button" data-check-event="${key}" aria-label="${done ? "取消" : "完成"}${escapeHTML(event.title)}打卡" aria-pressed="${done ? "true" : "false"}">${done ? "✓" : "○"}</button></div>
      <div class="event-highlight">${escapeHTML(event.play)}</div>
      <div class="event-details">${details.map(([k,v]) => `<div class="event-detail"><b>${k}</b>${escapeHTML(v)}</div>`).join("")}</div>
      <div class="event-transport"><div><b>下一站怎么去</b>${escapeHTML(event.next)}<br>${escapeHTML(event.route)}<br>上下车 / 出口：${escapeHTML(event.exit)}</div><div><b>时间与替代交通</b>乘车 ${escapeHTML(event.ride)} · 步行 ${escapeHTML(event.walkTime)}<br>打车：${escapeHTML(event.taxi)}</div></div>
      <div class="event-fallbacks"><p><b>下雨：</b>${escapeHTML(event.rain)}</p><p><b>关闭：</b>${escapeHTML(event.closed)}</p></div>
      <div class="event-actions"><a class="mini-link" href="${mapUrl(event.title)}" target="_blank" rel="noopener noreferrer">高德导航</a><a class="mini-link" href="${mapUrl(event.title,"baidu")}" target="_blank" rel="noopener noreferrer">百度地图</a>${event.night ? `<span class="tag">适合夜景 / 傍晚</span>` : ""}</div>
      <span class="event-status-live" data-live-status>未开始</span></div>
    </article>`;
  }

  function bindDayActions() {
    $$('[data-check-event]').forEach(button => button.addEventListener("click", () => {
      const key = button.dataset.checkEvent;
      state.completed ||= {};
      state.completed[key] = !state.completed[key];
      button.classList.toggle("done", state.completed[key]);
      button.textContent = state.completed[key] ? "✓" : "○";
      button.setAttribute("aria-pressed", String(Boolean(state.completed[key])));
      saveState(); showToast(state.completed[key] ? "已完成打卡" : "已取消打卡");
    }));
    $$(".copy-day").forEach(button => button.addEventListener("click", () => copyDay(Number(button.dataset.day))));
  }
  async function copyDay(dayNumber) {
    const day = trip.days.find(d => d.day === dayNumber);
    const lines = [`青岛第 ${day.day} 天｜${day.date} ${day.weekday}｜${day.theme}`, day.summary, "", ...day.events.map(e => `${e.start}—${e.end} ${e.title}\n  ${e.next}`), "", `天气/体力备选：${activeMode === "normal" ? day.summary : day.alternatives[activeMode]}`];
    try { await navigator.clipboard.writeText(lines.join("\n")); showToast(`第 ${day.day} 天行程已复制`); }
    catch {
      const area = document.createElement("textarea"); area.value = lines.join("\n"); document.body.append(area); area.select(); document.execCommand("copy"); area.remove(); showToast(`第 ${day.day} 天行程已复制`);
    }
  }

  function applyMode(mode, persist = true) {
    activeMode = mode;
    if (persist) { state.mode = mode; saveState(); }
    $$(".mode-switcher button").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
    trip.days.forEach(day => {
      const box = $(`[data-mode-advice="${day.day}"]`);
      if (!box) return;
      box.querySelector("b").textContent = modeLabels[mode];
      box.querySelector("p").textContent = mode === "normal" ? day.summary : day.alternatives[mode];
    });
    if (mode === "laoshan") showToast("含崂山版：用第 3 天整天替换海岸线，不叠加");
  }

  function renderFood() {
    $("#foodGrid").innerHTML = trip.food.map(item => `<article class="food-card reveal"><header><span class="tag">${escapeHTML(item.day)} · ${escapeHTML(item.meal)}</span><b>${escapeHTML(item.price)}</b></header><small>${escapeHTML(item.area)}</small><h3>${escapeHTML(item.choice)}</h3><p>${escapeHTML(item.tip)}</p><div class="food-foot"><span>排队 ${escapeHTML(item.queue)}</span><span>备用：${escapeHTML(item.backup)}</span></div><div class="event-actions"><a class="mini-link" href="${mapUrl(`${item.area} ${item.choice}`)}" target="_blank" rel="noopener noreferrer">地图搜索</a></div></article>`).join("");
    $("#seafoodList").innerHTML = trip.seafoodSafety.map(item => `<li>${escapeHTML(item)}</li>`).join("");
  }

  function renderBudget() {
    $("#budgetPresets").innerHTML = Object.entries(trip.budgetPresets).map(([key,p]) => `<button class="preset-button ${key === (state.preset || "comfort") ? "active" : ""}" type="button" data-preset="${key}">${escapeHTML(p.label)}</button>`).join("");
    const initial = state.budget || {...trip.budgetPresets[state.preset || "comfort"], people:trip.meta.people};
    setBudgetForm(initial);
    calculateBudget();
    $("#budgetForm").addEventListener("input", () => { state.preset = "custom"; $$(".preset-button").forEach(b => b.classList.remove("active")); calculateBudget(); });
    $$('[data-preset]').forEach(button => button.addEventListener("click", () => {
      state.preset = button.dataset.preset;
      const preset = trip.budgetPresets[state.preset];
      setBudgetForm({...preset, people:Number($("#peopleInput").value) || 2});
      $$(".preset-button").forEach(b => b.classList.toggle("active", b === button));
      calculateBudget(); showToast(`已应用“${preset.label}”`);
    }));
  }
  function setBudgetForm(b) {
    const map = {people:"peopleInput",outbound:"outboundInput",localHome:"localHomeInput",hotel:"hotelInput",food:"foodInput",city:"cityInput",tickets:"ticketsInput",insurance:"insuranceInput",supplies:"suppliesInput",souvenir:"souvenirInput",contingency:"contingencyInput"};
    Object.entries(map).forEach(([key,id]) => { $("#"+id).value = b[key] ?? trip.budgetPresets.comfort[key] ?? 0; });
    $("#laoshanToggle").checked = Boolean(b.laoshan);
    $("#taxiToggle").checked = b.taxi !== false;
  }
  function getBudgetForm() {
    const num = id => Math.max(0, Number($(id).value) || 0);
    return {people:Math.max(1,num("#peopleInput")), outbound:num("#outboundInput"), localHome:num("#localHomeInput"), hotel:num("#hotelInput"), food:num("#foodInput"), city:num("#cityInput"), tickets:num("#ticketsInput"), insurance:num("#insuranceInput"), supplies:num("#suppliesInput"), souvenir:num("#souvenirInput"), contingency:num("#contingencyInput"), laoshan:$("#laoshanToggle").checked, taxi:$("#taxiToggle").checked};
  }
  function calculateBudget() {
    const b = getBudgetForm();
    const peopleRatio = b.people / 2;
    // 大交通、餐饮、市内交通、门票、保险、用品和伴手礼输入值以 2 人为基准；酒店与一辆网约车接驳不按人数线性增加。
    const scaled = {
      outbound: b.outbound * peopleRatio, food: b.food * peopleRatio, city: b.city * peopleRatio,
      tickets: b.tickets * peopleRatio, insurance: b.insurance * peopleRatio,
      supplies: b.supplies * peopleRatio, souvenir: b.souvenir * peopleRatio
    };
    const laoshanExtra = b.laoshan ? 150 * b.people : 0;
    const taxiSaving = b.taxi ? 0 : -Math.min(80 * peopleRatio, scaled.city * .35);
    const base = scaled.outbound + b.localHome + b.hotel + scaled.food + scaled.city + scaled.tickets + scaled.insurance + scaled.supplies + scaled.souvenir + laoshanExtra + taxiSaving;
    const contingency = base * (b.contingency / 100);
    const total = base + contingency;
    state.budget = b; saveState();
    $("#budgetTotal").textContent = money(total);
    $("#budgetPerPerson").textContent = `单人约 ${money(total / b.people)} · ${b.people} 人`;
    const ratio = total / trip.meta.targetTotal;
    $("#budgetMeter").style.width = `${Math.min(100, ratio * 100)}%`;
    const diff = total - trip.meta.targetTotal;
    let status;
    if (diff <= -400) status = `低于 ¥6,000 目标约 ${money(Math.abs(diff))}，仍建议保留机动金。`;
    else if (diff <= 0) status = `在 ¥6,000 目标内，剩余约 ${money(Math.abs(diff))}。`;
    else status = `预计超出 ¥6,000 约 ${money(diff)}。优先换 D2160 候补或低价酒店，不压缩保险与返程余量。`;
    $("#budgetStatus").textContent = status;
    const rows = [["往返大交通",scaled.outbound],["萧山接驳",b.localHome],["3 晚住宿",b.hotel],["四天餐饮",scaled.food],["青岛交通",scaled.city+taxiSaving],["门票 / 崂山",scaled.tickets+laoshanExtra],["保险与用品",scaled.insurance+scaled.supplies],["伴手礼",scaled.souvenir],[`机动 ${b.contingency}%`,contingency]];
    $("#budgetBreakdown").innerHTML = rows.map(([k,v]) => `<span>${k}<b>${money(v)}</b></span>`).join("");
  }

  function renderChecklist() {
    state.checks ||= {};
    let index = 0;
    $("#checklistGrid").innerHTML = trip.checklist.map(group => `<section class="check-group"><h3>${escapeHTML(group.group)}</h3>${group.items.map(item => { const key = `check-${index++}`; return `<label class="check-item"><input type="checkbox" data-check-key="${key}" ${state.checks[key] ? "checked" : ""}><span>${escapeHTML(item)}</span></label>`; }).join("")}</section>`).join("");
    $("#prepTimeline").innerHTML = trip.prepSchedule.map(item => `<div class="prep-row"><b>${escapeHTML(item.when)}</b><p>${escapeHTML(item.task)}</p></div>`).join("");
    $$('[data-check-key]').forEach(input => input.addEventListener("change", () => { state.checks[input.dataset.checkKey] = input.checked; saveState(); updateCheckProgress(); }));
    updateCheckProgress();
  }
  function updateCheckProgress() {
    const checks = $$('[data-check-key]');
    const done = checks.filter(c => c.checked).length;
    $("#checkProgress").textContent = `${done} / ${checks.length}`;
  }

  function renderRisks() {
    $("#riskGrid").innerHTML = trip.risks.map(r => `<article class="risk-card reveal"><header><h3>${escapeHTML(r.title)}</h3><span class="risk-level">${escapeHTML(r.level)}风险</span></header><p>${escapeHTML(r.plan)}</p></article>`).join("");
  }

  function renderSources() {
    $("#statusLegend").innerHTML = trip.statusLegend.map(item => `<div class="legend-item">${statusBadge(item.key)}<span>${escapeHTML(item.note)}</span></div>`).join("");
    const sources = [...trip.sources, {category:"天气",name:weather.secondarySource.name,url:weather.secondarySource.url,checked:weather.secondarySource.checked,status:"estimated",note:weather.secondarySource.note}];
    $("#sourceList").innerHTML = sources.map(source => `<article class="source-item reveal"><span class="source-cat">${escapeHTML(source.category)}</span><div><a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.name)} ↗</a><p>${escapeHTML(source.note)}</p><time>查询：${escapeHTML(source.checked)}</time></div>${statusBadge(source.status)}</article>`).join("");
  }

  function updateLiveStatuses(now = getShanghaiNow()) {
    $$('[data-event-key]').forEach(card => {
      const badge = $('[data-live-status]', card);
      const date = card.dataset.date;
      const start = parseMinutes(card.dataset.start), end = parseMinutes(card.dataset.end);
      let text = "未开始", cls = "";
      if (now.date < date) text = "未开始";
      else if (now.date > date) { text = "今日已结束"; cls = "ended"; }
      else if (now.minutes < start - 20) text = "未开始";
      else if (now.minutes >= start - 20 && now.minutes < start) { text = "建议现在出发"; cls = "go"; }
      else if (now.minutes >= start && now.minutes < end) { text = "游玩中"; cls = "playing"; }
      else { text = "今日已结束"; cls = "ended"; }
      const title = $("h3", card)?.textContent || "";
      if (["小麦岛","第二海水浴场","信号山"].some(x => title.includes(x)) && ["rain","coast"].includes(activeMode)) { text = activeMode === "rain" ? "建议切换雨天方案" : "天气不适合"; cls = "go"; }
      badge.className = `event-status-live ${cls}`; badge.textContent = text;
    });
  }
  function highlightTimeline(now = getShanghaiNow()) {
    $$(".timeline-cell.current").forEach(c => c.classList.remove("current"));
    $$(`.timeline-cell[data-date="${now.date}"]`).forEach(c => {
      if (!c.dataset.from || (now.minutes >= Number(c.dataset.from) && now.minutes < Number(c.dataset.to))) c.classList.add("current");
    });
  }

  function bindGlobalEvents() {
    $$(".mode-switcher button").forEach(button => button.addEventListener("click", () => { applyMode(button.dataset.mode); updateLiveStatuses(); }));
    $("#themeButton").addEventListener("click", toggleTheme);
    $("#printButton").addEventListener("click", () => window.print());
    $("#backTop").addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
    $("#recheckButton").addEventListener("click", () => { location.hash = "sources"; showToast("请按来源逐项打开并复核实时状态"); });
    $("#weatherReviewButton").addEventListener("click", () => markWeatherReview());
    $("#finalAuditButton").addEventListener("click", () => { state.finalAudit = !state.finalAudit; saveState(); updateAuditButtons(); showToast(state.finalAudit ? "已标记完成最终复核" : "已取消最终复核标记"); });
    $("#clearStorageButton").addEventListener("click", () => {
      if (!window.confirm("清除本机保存的预算、打卡、模式和清单状态？")) return;
      try { localStorage.removeItem(storageKey); } catch {}
      location.reload();
    });
    window.addEventListener("scroll", () => $("#backTop").classList.toggle("show", scrollY > 650), {passive:true});
    setInterval(updateTimeCards, 60000);
    initSectionObserver();
    initRevealObserver();
    const storedTheme = state.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(storedTheme);
    updateAuditButtons();
  }
  function markWeatherReview() {
    state.weatherReviewed = !state.weatherReviewed; saveState(); updateAuditButtons(); showToast(state.weatherReviewed ? "已标记天气复核" : "已取消标记");
  }
  function updateAuditButtons() {
    const w = $("#weatherReviewButton"), f = $("#finalAuditButton");
    w.textContent = state.weatherReviewed ? "已加入复核 ✓" : "加入复核提醒 ✓";
    f.textContent = state.finalAudit ? "已完成最终复核 ✓" : "标记已完成复核";
  }
  function toggleTheme() { setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); }
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme; state.theme = theme; saveState();
    const button = $("#themeButton"); button.setAttribute("aria-pressed", String(theme === "dark")); button.innerHTML = `${theme === "dark" ? "☀" : "◐"} <span>${theme === "dark" ? "浅色模式" : "深色模式"}</span>`;
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = theme === "dark" ? "#0e2229" : "#0b5e78";
  }
  function initSectionObserver() {
    const links = $$('[data-section]');
    const map = new Map(); links.forEach(link => { const id=link.dataset.section; if(!map.has(id)) map.set(id,[]); map.get(id).push(link); });
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(l => l.classList.remove("active")); (map.get(visible.target.id) || []).forEach(l => l.classList.add("active"));
    }, {rootMargin:"-20% 0px -65% 0px",threshold:[0,.15,.4]});
    navItems.forEach(([id]) => { const el=document.getElementById(id); if(el) observer.observe(el); });
  }
  function initRevealObserver() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { $$(".reveal").forEach(el => el.classList.add("visible")); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);} }), {threshold:.08,rootMargin:"0px 0px -30px"});
    $$(".reveal").forEach(el => observer.observe(el));
  }

  function init() {
    renderNav(); renderHero(); renderWeather(); renderTransport(); renderHotels(); renderItinerary(); renderFood(); renderBudget(); renderChecklist(); renderRisks(); renderSources(); bindGlobalEvents(); updateTimeCards();
  }

  init();
})();
