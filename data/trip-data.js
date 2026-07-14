window.TRIP_DATA = {
  meta: {
    title: "青岛四天三晚 · 舒适自由行",
    year: 2026,
    startDate: "2026-07-18T00:00:00+08:00",
    endDate: "2026-07-21T23:59:59+08:00",
    dateText: "2026.07.18 周六 — 07.21 周二",
    people: 2,
    travelers: "2 名成年人",
    originPublic: "浙江省杭州市萧山区",
    destination: "山东省青岛市",
    targetPerPerson: 3000,
    targetTotal: 6000,
    defaultMode: "normal",
    defaultHotelArea: "五四广场 / 浮山所",
    queryDate: "2026-07-14",
    version: "2026.07.14 临近出发核实版"
  },
  statusLegend: [
    {key:"verified", label:"已核实", note:"查询日可在官方或可靠页面查到；仍可能临时调整"},
    {key:"estimated", label:"价格估算", note:"用于预算，不代表成交价"},
    {key:"notOnSale", label:"尚未开售", note:"当前销售窗口尚未开放"},
    {key:"refresh", label:"临近出发更新", note:"出发前必须再次核对"},
    {key:"pending", label:"待核实", note:"没有可靠数据时不作实时断言"}
  ],
  heroFacts: [
    {label:"首选交通", value:"高铁 · G3006 去 / D2125 回", sub:"实际可购买时刻优先"},
    {label:"住宿区域", value:"五四广场 / 浮山所", sub:"三晚不换酒店"},
    {label:"推荐预算", value:"约 ¥5,581 / 2 人", sub:"含约 10% 机动"},
    {label:"默认节奏", value:"舒适省钱版", sub:"老城＋海岸线，不赶崂山"}
  ],
  todayTasks: [
    {date:"2026-07-14", text:"立即下单可退酒店；购买 G3006、D2125，或同时提交 D2160 候补"},
    {date:"2026-07-15", text:"确认酒店窗型、早餐和寄存；购买旅行保险"},
    {date:"2026-07-16", text:"预约啤酒博物馆；核对景区、小程序与实名要求"},
    {date:"2026-07-17", text:"20:00 后复核天气、预警、海浪、列车与酒店；下载离线信息"}
  ],
  sources: [
    {category:"铁路", name:"中国铁路 12306", url:"https://www.12306.cn/", checked:"2026-07-14", status:"verified", note:"车次、时刻、票价与查询时余票；余票随时变化"},
    {category:"航班", name:"Trip.com 航班查询", url:"https://www.trip.com/chinaflights/ShowFareFirst?dcity=hgh&acity=tao&ddate=2026-07-18&triptype=ow&class=y&quantity=2&locale=zh-CN&curr=CNY", checked:"2026-07-14", status:"verified", note:"页面展示价仍须支付页核对税费与行李"},
    {category:"天气", name:"中国天气网·青岛", url:"https://www.weather.com.cn/weather15d/101120201.shtml", checked:"2026-07-14", status:"refresh", note:"18—20 日短期趋势；21 日待补全"},
    {category:"地铁", name:"青岛地铁官网", url:"https://www.qdmetro.com/", checked:"2026-07-14", status:"verified", note:"线路结构已核对；末班车和临时运营调整需当天复核"},
    {category:"机场", name:"青岛胶东国际机场", url:"https://www.qdairport.com/", checked:"2026-07-14", status:"verified", note:"机场交通与出行提示入口"},
    {category:"景区", name:"青岛啤酒博物馆·参观信息", url:"https://www.tsingtaomuseum.com/articleTitleCus/1790371205849559041?viewName=newCanguanDetail", checked:"2026-07-14", status:"refresh", note:"暑期票型、放票和具体入馆时段以官方小程序为准"},
    {category:"景区", name:"崂山风景区官网", url:"https://qdlaoshan.cn/", checked:"2026-07-14", status:"refresh", note:"开放区域、接驳、票价和天气封闭需临近复核"},
    {category:"文旅", name:"青岛市文化和旅游公开信息", url:"https://www.qingdao.gov.cn/zwgk/xxgk/whly/", checked:"2026-07-14", status:"verified", note:"官方文旅与安全信息入口"},
    {category:"酒店", name:"Trip.com 青岛酒店列表", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY", checked:"2026-07-14", status:"verified", note:"3 晚 1 间房 2 成人页面含税显示价；支付页再确认"}
  ],
  transport: {
    recommendation: {
      primary:"高铁",
      reason:"低价航班为晚去早回，损失有效游玩时间；当前可买高铁的门到门成本更低、行李规则简单。",
      arrival:"7 月 18 日 16:04 抵达青岛站；若 D2160 候补成功则 15:01 抵达青岛北",
      departure:"7 月 21 日 15:38 从青岛北出发",
      purchase:"现在购买 G3006 与 D2125；同步候补 D2160，7 月 17 日中午前做最终取舍。",
      switchRule:"只有两人往返机票含税、含必要行李总价 ≤ ¥2,800，且去程中午前抵达、返程 18:00 后离开，才改选飞机。"
    },
    compare: [
      {type:"高铁 · 稳妥首选", status:"verified", schedule:"G3006 08:47 杭州西 → 16:04 青岛；D2125 15:38 青岛北 → 22:00 杭州东", doorTime:"去程约 10 小时；回程约 8.5 小时", oneWay:"¥582 去 / ¥385 回 · 每人", roundTrip:"两人 ¥1,934", luggage:"随身行李规则相对宽松，以 12306 规定为准", comfort:"可走动，市中心到达", delay:"中低；仍受天气和铁路调度影响", changes:"去程地面接驳 1 次；青岛站到酒店地铁换乘 1 次", firstDay:"约 17:00 入住，保留夜景", score:"9.2"},
      {type:"高铁 · 候补省钱", status:"refresh", schedule:"D2160 07:37 杭州东 → 15:01 青岛北；D2125 返程", doorTime:"去程约 9 小时；回程约 8.5 小时", oneWay:"¥385 / 程 · 每人", roundTrip:"两人 ¥1,540", luggage:"以 12306 规定为准", comfort:"杭州东更易接驳，但当前去程候补", delay:"中低", changes:"市区地铁 1—2 次换乘", firstDay:"约 16:15 入住，夜景更从容", score:"9.5（候补成功时）"},
      {type:"飞机 · 时间合适才切换", status:"estimated", schedule:"当前低价可见为 21:30 去、07:05/07:15 回；不推荐", doorTime:"合适航班约 6—7 小时/程；低价时刻会损失两天", oneWay:"可见低价约 ¥1,120 去 / ¥880 回 · 每人显示价", roundTrip:"仅票面约 ¥4,000 / 两人，另核行李与接驳", luggage:"廉价票常不含托运；必须在支付页逐段核对", comfort:"飞行短，但安检、候机及胶东机场进城较长", delay:"雷雨季延误风险较高", changes:"机场地铁 8 号线到青岛北，再换 3/2 号线", firstDay:"低价晚班 23:20 才到，第一天基本报废", score:"5.6"}
    ],
    trains: {
      outbound: [
        {code:"D2160", from:"杭州东 07:37", to:"青岛北 15:01", duration:"7:24", price:385, availability:"候补", status:"refresh"},
        {code:"G3006", from:"杭州西 08:47", to:"青岛 16:04", duration:"7:17", price:582, availability:"有票（查询时）", status:"verified"},
        {code:"D2912", from:"杭州西 09:52", to:"青岛北 17:52", duration:"8:00", price:411, availability:"候补", status:"refresh"},
        {code:"G688", from:"杭州西 14:12", to:"青岛北 20:50", duration:"6:38", price:432, availability:"有票（查询时）", status:"verified"}
      ],
      inbound: [
        {code:"D2128", from:"青岛 15:10", to:"杭州东 22:00", duration:"6:50", price:392, availability:"有票（查询时）", status:"verified"},
        {code:"D2125", from:"青岛北 15:38", to:"杭州东 22:00", duration:"6:22", price:385, availability:"有票（查询时）", status:"verified"},
        {code:"G3008", from:"青岛 16:22", to:"杭州西 23:09", duration:"6:47", price:547, availability:"有票（查询时）", status:"verified"},
        {code:"D181", from:"青岛北 20:30", to:"杭州 09:34+1", duration:"13:04", price:324, availability:"有票（查询时）", status:"verified"}
      ]
    },
    localSteps: [
      {title:"萧山区 → 杭州西站（默认去程）", detail:"06:20 出发。网约车约 55—75 分钟，建议按 ¥70/车估算；若路况或下雨，提前 15 分钟。07:30 前到站，预留实名安检与检票。", status:"estimated"},
      {title:"青岛站 → 浮山所酒店区", detail:"青岛站乘地铁 3 号线（青岛北站方向）至五四广场，换 2 号线（李村公园方向）1 站至浮山所；约 35—45 分钟，步行合计约 800 米。以现场导向为准。", status:"verified"},
      {title:"浮山所 → 青岛北站（返程）", detail:"13:10 前从酒店区域出发，乘 2 号线至五四广场换 3 号线到青岛北站；约 55—70 分钟。14:30 前进站，给 15:38 列车留足余量。", status:"estimated"},
      {title:"飞机备选 · 萧山区 → 萧山机场", detail:"网约车约 25—40 分钟，按 ¥45/车估算；国内航班建议起飞前 2 小时到航站楼，托运行李再多留 20 分钟。", status:"estimated"},
      {title:"胶东机场 → 浮山所", detail:"地铁 8 号线至青岛北站，换 3 号线至五四广场，再换 2 号线至浮山所；约 100—120 分钟。打车约 60—80 分钟，价格受路况和平台影响。", status:"estimated"}
    ]
  },
  areas: [
    {name:"五四广场 / 浮山所", score:"9.5", fit:"首选", transit:"2、3 号线组合，现代城区与老城均衡", food:"商场、早餐、便利店密集", drawback:"暑期周末价格较高"},
    {name:"台东", score:"8.6", fit:"夜宵与性价比", transit:"1、2 号线，去啤酒博物馆方便", food:"小吃多、晚间热闹", drawback:"夜间噪声和人流，去海岸部分点需换乘"},
    {name:"青岛站 / 栈桥", score:"8.4", fit:"老城优先", transit:"1、3 号线，第一天到达方便", food:"中山路周边选择多", drawback:"去小麦岛、石老人距离更远"},
    {name:"奥帆中心附近", score:"8.0", fit:"海景与夜景", transit:"多依赖步行到 2 号线", food:"餐饮整体偏贵", drawback:"同价位房间性价比通常不如浮山所"},
    {name:"会展中心 / 石老人", score:"7.2", fit:"价格上涨时备用", transit:"2 号线，海边方便", food:"商圈分散", drawback:"去老城与返程车站时间明显增加"}
  ],
  hotels: [
    {tag:"交通最方便", name:"青岛中心智选假日酒店", english:"Holiday Inn Express QINGDAO CITY CENTER by IHG", area:"浮山所 / 香港中路", metro:"浮山所站", walk:"约 5—8 分钟（以地图实测为准）", nightly:"约 ¥559", total:1676, window:"页面房型需支付页核对窗型", breakfast:"查询页所示房型含早餐", luggage:"通常可寄存；到店前电话确认", times:"五四广场约 10 分钟；老城约 30—40 分钟；青岛北约 60 分钟", rating:"9.3 / 10 · 3632 条（查询页）", pros:"连锁稳定、位置均衡、减少早餐决策", cons:"仅剩少量该价房；总价高于公寓", booking:"优先订可取消房；核对床型、窗型、税费和取消时间", status:"verified", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY"},
    {tag:"最省钱", name:"住美印象公寓", english:"Zhu Meiyinxiang Apartment", area:"五四广场 / 高雄路", metro:"高雄路站", walk:"约 5—10 分钟（待地图复核）", nightly:"约 ¥298", total:894, window:"必须逐房型确认真窗/内窗", breakfast:"通常不含，以订单为准", luggage:"查询页标注免费寄存", times:"五四广场约 15 分钟；老城约 35—45 分钟", rating:"8.8 / 10 · 710 条（查询页）", pros:"显著压低预算、洗衣和寄存信息友好", cons:"公寓前台、卫生、隔音和房型稳定性不如连锁", booking:"只选近期评价稳定且可取消房；联系确认前台时间和窗型", status:"verified", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY"},
    {tag:"性价比最高", name:"吕风印象酒店（五四广场万象城店）", english:"Lv Feng Hotel (Qingdao Wusi Square The MixC)", area:"五四广场 / 万象城", metro:"五四广场站", walk:"约 8—12 分钟（待地图复核）", nightly:"约 ¥638", total:1913, window:"逐房型确认", breakfast:"以订单为准", luggage:"查询页标注免费寄存", times:"老城约 25—35 分钟；奥帆中心约 15—20 分钟", rating:"9.2 / 10 · 2648 条（查询页）", pros:"交通、餐饮与商场避雨能力均衡", cons:"价格高于智选假日查询价；非国际连锁", booking:"比较含税总价，不只看首晚价格", status:"verified", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY"},
    {tag:"环境更舒适", name:"青岛台东步行街桔子水晶酒店", english:"Crystal Orange Qingdao Taidong Pedestrian Street", area:"台东", metro:"台东站", walk:"约 5—10 分钟（待地图复核）", nightly:"约 ¥663", total:1990, window:"逐房型确认", breakfast:"以订单为准", luggage:"连锁酒店通常可寄存，仍需确认", times:"啤酒博物馆约 10—15 分钟；五四广场约 20—30 分钟", rating:"9.7 / 10 · 3186 条（查询页）", pros:"评价高、去台东与啤酒博物馆方便", cons:"夜间可能热闹；去东部海岸线不如浮山所省时", booking:"要求安静楼层并核对临街情况", status:"verified", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY"},
    {tag:"涨价备用", name:"吕风雅阁度假公寓", english:"Lvfeng Yage Holiday Apartment", area:"会展中心 / 石老人", metro:"会展中心或苗岭路周边", walk:"需按具体楼栋复核", nightly:"约 ¥367", total:1100, window:"必须确认真窗与楼栋", breakfast:"通常不含，以订单为准", luggage:"需联系确认", times:"石老人较近；老城约 50—70 分钟", rating:"9.4 / 10 · 1896 条（查询页）", pros:"暑期价格备选、东部海岸方便", cons:"离老城和青岛北更远；公寓服务稳定性需复核", booking:"仅在市中心价格明显上涨时选；确认地铁步行和前台", status:"verified", url:"https://www.trip.com/hotels/list?city=7&checkin=2026-07-18&checkout=2026-07-21&adult=2&children=0&crn=1&locale=zh-CN&curr=CNY"}
  ],
  days: [
    {
      day:1, date:"2026-07-18", weekday:"周六", theme:"抵达 · 城市夜景 · 轻松进入青岛", color:"#ef7f64",
      summary:"高铁抵达后不赶景点，只安排酒店附近晚餐与海湾夜景。",
      steps:"约 9,000—12,000 步 / 6—8 公里",
      cost:{transport:"¥20—50/人", ticket:"¥0", food:"¥100—140/人"},
      mustBook:"G3006 或 D2160 候补、酒店；夜景免费无需预约。",
      cut:"若晚点或下雨，删除情人坝，只保留万象城晚餐与五四广场短走。",
      alternatives:{rain:"入住后在万象城晚餐、补给，雨势变小再到五四广场短走；雷电时不去海边。", heat:"17:00—19:00 酒店休息，19:30 后再出发。", coast:"万象城＋青岛市民中心周边室内活动，提前休息。", laoshan:"与默认相同；崂山安排在第 3 天。"},
      events:[
        {start:"06:20",end:"07:30",type:"transport",title:"萧山区出发 → 杭州西站",duration:"约 70 分钟",play:"网约车直达进站层，避免携行李换乘。",must:"07:30 前到站；身份证随身。",photo:"—",ticket:"车费约 ¥70/车，估算",reserve:"无需；建议提前预约网约车",open:"车站以当日公告为准",queue:"安检约 10—25 分钟，暑期留余量",walk:"约 300—600 米",energy:"低",restroom:"进站后先找洗手间并接水",next:"通过实名安检，按电子屏到检票口",route:"网约车；若改公共交通需重新核时",exit:"杭州西站进站层",ride:"55—75 分钟",walkTime:"5—10 分钟",taxi:"约 ¥70/车",rain:"提前 15 分钟，车门到进站口",closed:"若道路异常立即改杭州东可行车次并在 12306 改签",night:false,status:"verified"},
        {start:"08:47",end:"16:04",type:"transport",title:"G3006 杭州西 → 青岛",duration:"7 小时 17 分",play:"车上早餐、午餐、补水；每 2 小时活动腿部。",must:"开车前停止检票时间以车站公告为准。",photo:"靠窗不影响他人时拍沿途；勿依赖固定景观侧",ticket:"二等座 ¥582/人",reserve:"12306 实名购票；查询时有票",open:"固定车次，以 12306 当日状态为准",queue:"建议提前 60—75 分钟到站",walk:"站内约 500—900 米",energy:"低",restroom:"列车卫生间；用餐避开到站前拥挤",next:"青岛站下车后按地铁标识去 3 号线",route:"直达，无需换乘",exit:"青岛站出站口以站内导向为准",ride:"7:17",walkTime:"10—15 分钟",taxi:"不建议跨城打车",rain:"不受普通降雨影响；关注铁路调度",closed:"停运时在 12306 免费退改并联系酒店保留房",night:false,status:"verified"},
        {start:"16:15",end:"17:20",type:"transport",title:"青岛站 → 浮山所 → 入住",duration:"约 50—65 分钟",play:"3 号线到五四广场，换 2 号线 1 站到浮山所。",must:"先办入住、放行李、补水。",photo:"—",ticket:"地铁约 ¥4/人，估算",reserve:"无需",open:"地铁运营时段以官网与车站公告为准",queue:"进站安检约 5—15 分钟",walk:"约 800 米",energy:"低",restroom:"青岛站、地铁站、酒店",next:"入住后至少休息 30 分钟",route:"3 号线→五四广场换 2 号线→浮山所",exit:"按酒店实时地图选择浮山所出口",ride:"30—40 分钟",walkTime:"12—18 分钟",taxi:"约 25—35 分钟 / ¥25—40，拥堵浮动",rain:"大雨时青岛站直接打车到酒店",closed:"地铁异常时按官方公告改公交或网约车",night:false,status:"estimated"},
        {start:"18:00",end:"19:00",type:"meal",title:"酒店周边晚餐 · 排骨米饭 / 家常鲁菜",duration:"60 分钟",play:"先吃饱再看夜景；人均 ¥35—60，避开景区海鲜。",must:"同区域选择明码标价、近期仍营业的店。",photo:"靠窗自然光即可",ticket:"餐饮 ¥35—60/人",reserve:"通常无需；具体店铺营业状态地图复核",open:"待选餐厅实时页面为准",queue:"周六晚约 10—30 分钟",walk:"500—900 米",energy:"低",restroom:"商场内更稳定",next:"步行或地铁 1 站到五四广场",route:"浮山所周边步行；雨天选万象城",exit:"—",ride:"0—5 分钟",walkTime:"8—15 分钟",taxi:"不建议",rain:"万象城内解决",closed:"换同商圈备用餐厅",night:false,status:"pending"},
        {start:"19:10",end:"21:15",type:"sight",title:"五四广场 → 奥帆中心 → 情人坝",duration:"约 2 小时",play:"沿海湾单向散步，按体力随时折返；不下海、不翻越护栏。",must:"五月的风远景、浮山湾灯光、奥帆码头视角",photo:"蓝调时刻朝海湾拍城市天际线；夜景固定手机、适当降曝光",ticket:"免费",reserve:"无需",open:"公共空间；临时管制与灯光时间待当天核实",queue:"周六夜间人多，热门点 10—20 分钟",walk:"约 3—4.5 公里",energy:"中",restroom:"五四广场周边商场、奥帆中心公共设施",next:"从奥帆/燕儿岛路方向步行或打车回酒店",route:"步行为主；体力不足在奥帆中心结束",exit:"五四广场站/浮山所站按酒店方向",ride:"返程打车 8—15 分钟",walkTime:"全程 60—90 分钟",taxi:"约 ¥12—20/车",rain:"万象城室内＋雨小后五四广场 20 分钟",closed:"海边临时关闭则直接商场休息",night:true,status:"estimated"}
      ]
    },
    {
      day:2,date:"2026-07-19",weekday:"周日",theme:"老城 · 红瓦建筑 · 山海视角",color:"#2e82a5",
      summary:"从青岛站一带向北再向东单向推进，午间休息，不把小鱼山和信号山都塞入。",
      steps:"约 15,000—19,000 步 / 10—13 公里",
      cost:{transport:"¥12—30/人",ticket:"¥0—20/人",food:"¥100—150/人"},
      mustBook:"圣弥厄尔教堂内部若开放、信号山具体入园规则出发前复核。",
      cut:"来不及先删大学路拍照排队，其次删大鲍岛支线；信号山仅在天气允许时保留。",
      alternatives:{rain:"栈桥仅远观 15 分钟 → 邮电博物馆/德国总督楼旧址博物馆 → 中山路午餐 → 啤酒博物馆；以开放公告为准。",heat:"07:30 提前去栈桥；11:30—15:30 室内午餐和咖啡馆休息，取消爬山。",coast:"取消栈桥近海段，保留教堂外观、大鲍岛、室内博物馆。",laoshan:"与默认相同。"},
      events:[
        {start:"07:40",end:"08:20",type:"meal",title:"早餐与出发",duration:"40 分钟",play:"若住智选假日用酒店早餐；否则选便利店/早餐铺。",must:"水、雨具、防晒、纸巾。",photo:"—",ticket:"¥15—35/人",reserve:"无需",open:"以酒店或门店当日为准",queue:"约 5—15 分钟",walk:"约 300 米",energy:"低",restroom:"酒店",next:"浮山所站乘 2 号线到五四广场，换 3 号线到青岛站",route:"2 号线→五四广场→3 号线→青岛站",exit:"青岛站出口按栈桥导向",ride:"25—35 分钟",walkTime:"10—15 分钟",taxi:"约 25—35 分钟 / ¥25—40",rain:"带伞，地铁优先",closed:"—",night:false,status:"estimated"},
        {start:"08:40",end:"09:30",type:"sight",title:"栈桥 · 清晨看海",duration:"50 分钟",play:"从岸端向回澜阁方向走，拥挤或湿滑时不过度深入。",must:"回澜阁远景、海湾与老城同框",photo:"上午面向海面可能逆光，侧向取红瓦城景更稳；阴天拍线条与浪花",ticket:"公共区域免费；内部开放待核实",reserve:"公共区域无需",open:"开放与临时封闭以现场公告为准",queue:"周日 09:00 后约 15—30 分钟",walk:"1.5—2 公里",energy:"低—中",restroom:"青岛站、栈桥岸端公共设施",next:"步行约 15 分钟到圣弥厄尔教堂",route:"沿太平路/中山路方向步行",exit:"—",ride:"0",walkTime:"12—18 分钟",taxi:"短程不建议",rain:"岸边远观 15 分钟，雷电/大浪立即离开",closed:"改邮电博物馆或中山路室内空间",night:false,status:"estimated"},
        {start:"09:50",end:"10:30",type:"sight",title:"圣弥厄尔教堂外观",duration:"40 分钟",play:"以外部建筑和街巷为主；内部是否开放、票价与礼仪现场核实。",must:"浙江路街角立面、双塔对称构图",photo:"上午侧光拍立面；不阻碍礼拜和居民通行",ticket:"外观免费；内部待核实",reserve:"内部参观规则待官方渠道复核",open:"宗教活动期间可能暂停参观",queue:"外部约 10—20 分钟",walk:"约 800 米",energy:"低",restroom:"中山路商场/餐饮店",next:"步行去大鲍岛",route:"沿中山路向北",exit:"—",ride:"0",walkTime:"15—20 分钟",taxi:"不建议",rain:"带伞拍外观后缩短",closed:"只看街区外观，转大鲍岛室内店铺",night:false,status:"refresh"},
        {start:"10:50",end:"12:00",type:"sight",title:"大鲍岛文化休闲街区",duration:"70 分钟",play:"看里院建筑、街巷更新，找安静咖啡馆休息。",must:"里院天井与街角立面；尊重住户和经营空间",photo:"阴天适合建筑细节；避免闯入非开放院落",ticket:"街区免费；个别展馆另计",reserve:"公共街区无需",open:"商户各自营业，以现场为准",queue:"热门店周日约 10—30 分钟",walk:"1.5—2 公里",energy:"低",restroom:"游客服务点/商场/餐饮",next:"中山路附近午餐",route:"步行 5—15 分钟",exit:"—",ride:"0",walkTime:"5—15 分钟",taxi:"不建议",rain:"保留有廊檐街段，进咖啡馆避雨",closed:"转中山路商场",night:false,status:"estimated"},
        {start:"12:00",end:"14:30",type:"rest",title:"午餐＋室内休息",duration:"2.5 小时",play:"鲅鱼水饺或锅贴，人均 ¥35—65；之后咖啡馆坐满 60—90 分钟。",must:"不在最拥挤门店硬排队，地图查看实时营业后就近选。",photo:"—",ticket:"餐饮 ¥45—75/人",reserve:"通常无需",open:"餐厅待当日核实",queue:"约 15—40 分钟；超 20 分钟换店",walk:"500—1000 米",energy:"低",restroom:"商场/餐厅",next:"地铁或打车至信号山入口附近",route:"1 号线短程或打车；依据雨势和体力",exit:"按实时地图选入口",ride:"10—20 分钟",walkTime:"10—15 分钟",taxi:"约 ¥12—18/车",rain:"延长室内休息，取消信号山",closed:"换同区域餐厅",night:false,status:"pending"},
        {start:"15:00",end:"16:20",type:"sight",title:"信号山公园 · 红瓦绿树俯瞰",duration:"80 分钟",play:"慢速登高，优先观景平台；雨后、雷电或步道湿滑不登。",must:"老城红瓦、海湾与教堂方向全景",photo:"下午侧逆光，利用云层；不跨越栏杆抢机位",ticket:"票价/免费政策待官方临近核实，预算 ¥0—10/人",reserve:"规则待核实",open:"开放时间待官方临近复核",queue:"观景点约 10—30 分钟",walk:"约 1.5—2 公里，含坡道台阶",energy:"中—高",restroom:"入口附近与园内设施以现场为准",next:"步行或短途车去大学路/鱼山路",route:"下山后步行约 15—20 分钟",exit:"以现场开放入口为准",ride:"0—8 分钟",walkTime:"15—20 分钟",taxi:"约 ¥10—15/车",rain:"改德国总督楼旧址博物馆或其他官方开放室内馆",closed:"直接大学路短走或返酒店",night:false,status:"refresh"},
        {start:"16:40",end:"18:00",type:"sight",title:"大学路 / 鱼山路慢走",duration:"80 分钟",play:"不为网红墙长排队，沿安静街巷看建筑和梧桐。",must:"大学路与鱼山路街角、老建筑外观",photo:"傍晚柔光适合人像；避让车辆和居民出入口",ticket:"免费",reserve:"无需",open:"公共道路；遵守交通与社区秩序",queue:"网红墙可能 20—40 分钟，建议跳过",walk:"2—3 公里",energy:"中",restroom:"咖啡馆/附近公共设施",next:"就近晚餐后乘地铁返酒店",route:"步行至人民会堂站乘 3 号线，五四广场换 2 号线",exit:"人民会堂站入口以地图为准",ride:"25—35 分钟",walkTime:"15—25 分钟",taxi:"回酒店约 ¥25—40/车",rain:"缩短为 30 分钟或改室内馆",closed:"公共街区通常不涉及关闭；管制时绕行",night:false,status:"estimated"}
      ]
    },
    {
      day:3,date:"2026-07-20",weekday:"周一",theme:"八大关 · 海岸线 · 小麦岛日落",color:"#1b9a8a",
      summary:"早上海岸、午间回酒店避暑，傍晚再出发；默认不去崂山。",
      steps:"约 14,000—18,000 步 / 9—12 公里",
      cost:{transport:"¥25—50/人",ticket:"¥0—30/人",food:"¥100—150/人"},
      mustBook:"若进入八大关收费建筑需临近查票；小麦岛先看天气、海浪和开放公告。",
      cut:"时间不足删第二海水浴场停留；体力不足删小麦岛，改五四广场附近晚餐。",
      alternatives:{rain:"09:00 啤酒博物馆 → 台东午餐 → 酒店休息 → 万象城/官方开放室内博物馆。",heat:"07:30 八大关、第二浴场短走；10:30 回酒店，18:30 后仅去小麦岛或五四广场。",coast:"取消第二浴场与小麦岛，改啤酒博物馆＋台东＋万象城。",laoshan:"07:00 早餐；07:40 浮山所乘 2 号线，辽阳东路换 4 号线至大河东；09:30—16:00 崂山太清线（官方接驳为准）；17:30 返城。门票＋接驳暂按 ¥150/人估算。大雨、雷电、大风立即取消。"},
      events:[
        {start:"07:30",end:"08:20",type:"meal",title:"早餐＋前往八大关",duration:"50 分钟",play:"早餐后从浮山所/五四广场乘 3 号线至中山公园站。",must:"提前看雨势与雷电预警。",photo:"—",ticket:"早餐 ¥15—35/人；地铁约 ¥2—3",reserve:"无需",open:"地铁以当日运营为准",queue:"早高峰约 5—15 分钟",walk:"约 800 米",energy:"低",restroom:"酒店、地铁站",next:"中山公园站按八大关方向步行",route:"3 号线直达中山公园",exit:"出口编号以站内导向和地图为准",ride:"10—15 分钟",walkTime:"12—18 分钟",taxi:"约 ¥15—25/车",rain:"直接改啤酒博物馆",closed:"—",night:false,status:"estimated"},
        {start:"08:30",end:"10:20",type:"sight",title:"八大关 · 林荫建筑慢走",duration:"110 分钟",play:"选 3—4 条林荫路，不追求走全；收费建筑只选 1 个。",must:"居庸关路、山海关路周边林荫与建筑外观",photo:"上午树影柔和；用道路纵深，不进入私人院落",ticket:"街区免费；个别建筑票价待核实",reserve:"部分建筑可能需购票/预约，官方渠道复核",open:"公共街区；建筑各自公告",queue:"热门建筑约 15—40 分钟",walk:"3—4 公里",energy:"中",restroom:"游客服务点、附近咖啡店",next:"沿海边方向步行至第二海水浴场",route:"步行约 10—15 分钟",exit:"—",ride:"0",walkTime:"10—15 分钟",taxi:"不建议",rain:"树下不避雷；改室内场馆",closed:"跳过收费建筑，走开放街区；若管制则改中山公园周边",night:false,status:"refresh"},
        {start:"10:30",end:"11:20",type:"sight",title:"第二海水浴场 · 只看海不下水",duration:"50 分钟",play:"在开放岸段短走；是否可下水完全服从浴场旗语与公告。",must:"礁石海岸远景、八大关临海视角",photo:"上午海面较亮，侧向拍浪；绝不站湿礁石等浪",ticket:"岸线参观通常免费；更衣等服务另计",reserve:"无需",open:"浴场开放、禁泳和大浪状态以官方现场为准",queue:"暑期约 15—30 分钟",walk:"1.5 公里",energy:"低—中",restroom:"浴场公共设施，以现场开放为准",next:"乘公交/打车回酒店午餐休息",route:"建议打车回浮山所，节省体力",exit:"—",ride:"约 15—25 分钟",walkTime:"5—10 分钟",taxi:"约 ¥18—30/车",rain:"取消",closed:"改咖啡馆或提前回酒店",night:false,status:"refresh"},
        {start:"11:50",end:"15:30",type:"rest",title:"午餐＋酒店避暑休息",duration:"3 小时 40 分",play:"酒店周边吃鲅鱼水饺/家常菜，午睡 90 分钟，补水充电。",must:"15:00 再查小麦岛天气、雷达、风浪与关闭公告。",photo:"—",ticket:"午餐 ¥35—60/人",reserve:"无需",open:"餐厅实时核实",queue:"约 10—25 分钟",walk:"500—1000 米",energy:"低",restroom:"酒店",next:"天气允许才去小麦岛",route:"浮山所乘 2 号线至麦岛站附近，再短途打车",exit:"麦岛站按网约车上车点导向",ride:"地铁约 15 分钟＋车 10—15 分钟",walkTime:"10—20 分钟",taxi:"末段约 ¥12—20/车",rain:"改啤酒博物馆/万象城",closed:"选择酒店休息",night:false,status:"pending"},
        {start:"16:20",end:"19:20",type:"sight",title:"小麦岛 · 海风与日落候选",duration:"约 3 小时",play:"沿开放步道慢走，保留坐下休息时间；日落效果取决于云量和朝向。",must:"草坡、海岸弧线、远处城市天际线",photo:"傍晚侧逆光拍剪影；不要为机位踩草坡边缘或下礁石",ticket:"公共区域通常免费",reserve:"无需；开放状态当天复核",open:"临时封闭、维护或天气管制以现场公告为准",queue:"傍晚热门点约 20—40 分钟",walk:"3—4.5 公里",energy:"中",restroom:"入口/周边公共设施；进岛前先解决",next:"短途车到麦岛站，地铁 2 号线回浮山所",route:"网约车短接＋2 号线",exit:"麦岛站按返程方向",ride:"约 30—45 分钟",walkTime:"20—35 分钟",taxi:"全程回酒店约 ¥25—40/车",rain:"取消并切换室内路线",closed:"燕儿岛山公园也受海边天气影响，不硬换；直接万象城",night:false,status:"refresh"},
        {start:"20:00",end:"21:00",type:"meal",title:"清淡晚餐 · 辣炒蛤蜊可选",duration:"60 分钟",play:"若吃海鲜先确认计价单位、重量和加工费；啤酒适量。",must:"饮酒后绝不下海。",photo:"—",ticket:"¥45—80/人",reserve:"热门店可能排队，不等超过 20 分钟",open:"具体店铺地图实时核实",queue:"约 10—30 分钟",walk:"500 米",energy:"低",restroom:"餐厅",next:"回酒店休息，21:30 复核返程列车",route:"酒店周边",exit:"—",ride:"0",walkTime:"5—10 分钟",taxi:"不建议",rain:"同商场内用餐",closed:"换连锁/商场餐厅",night:true,status:"pending"}
      ]
    },
    {
      day:4,date:"2026-07-21",weekday:"周二",theme:"啤酒文化 · 台东午餐 · 从容返程",color:"#c8963e",
      summary:"室内半日游，午餐后立即取行李去青岛北，绝不把下午塞满。",
      steps:"约 8,000—11,000 步 / 5—7 公里",
      cost:{transport:"¥15—35/人",ticket:"约 ¥60/人（估算）",food:"¥80—120/人"},
      mustBook:"啤酒博物馆暑期票型与入馆时段须在官方小程序/公众号复核并预约。",
      cut:"列车或道路有风险时先删台东购物；最晚 13:10 从酒店区域去青岛北。",
      alternatives:{rain:"原计划大部分可执行；全程地铁，博物馆后在台东室内用餐。",heat:"原计划为室内低强度；减少台东步行。",coast:"不受影响。",laoshan:"与默认相同。"},
      events:[
        {start:"07:30",end:"08:30",type:"hotel",title:"早餐 · 退房 · 寄存行李",duration:"60 分钟",play:"核对身份证、充电器、车票；大件行李留酒店。",must:"取得寄存凭证，确认最晚取件时间。",photo:"—",ticket:"早餐 ¥15—35/人",reserve:"寄存最好前一晚确认",open:"酒店前台规则为准",queue:"退房约 5—15 分钟",walk:"约 300 米",energy:"低",restroom:"酒店",next:"浮山所乘 2 号线到台东，再步行/短途车至博物馆",route:"2 号线至台东站",exit:"按啤酒博物馆地图方向",ride:"约 15—20 分钟",walkTime:"15—20 分钟",taxi:"约 ¥18—28/车",rain:"地铁优先",closed:"—",night:false,status:"estimated"},
        {start:"09:00",end:"10:40",type:"sight",title:"青岛啤酒博物馆",duration:"100 分钟",play:"了解酿造史与老厂房；饮酒量按个人情况，返程前不空腹。",must:"老建筑、酿造流程展区；具体展项以现场为准",photo:"室内避免闪光，遵守展馆规定",ticket:"预算按 ¥60/人估算；实际票型支付前确认",reserve:"暑期建议官方小程序/公众号实名预约",open:"季节性开放时间以官方参观信息和预约页为准",queue:"暑期约 20—45 分钟；预约时段提前 15 分钟到",walk:"2—3 公里室内参观",energy:"低—中",restroom:"馆内",next:"步行或短途车到台东用餐",route:"步行约 15—20 分钟",exit:"博物馆出口以现场动线为准",ride:"0—8 分钟",walkTime:"15—20 分钟",taxi:"约 ¥10—15/车",rain:"原计划可执行",closed:"改台东早餐/午餐＋万象城，不临时跑远景点",night:false,status:"refresh"},
        {start:"10:55",end:"12:05",type:"meal",title:"台东午餐与伴手礼",duration:"70 分钟",play:"锅贴、排骨米饭或海菜凉粉；伴手礼只买易携带、明码标价产品。",must:"12:05 必须离开，不为排队耽误返程。",photo:"—",ticket:"午餐 ¥35—60/人；伴手礼可选",reserve:"无需",open:"具体商户营业状态实时核实",queue:"热门店约 15—40 分钟；超 15 分钟即换店",walk:"1—2 公里",energy:"低",restroom:"商场/地铁站",next:"2 号线回浮山所取行李",route:"台东站→浮山所站",exit:"按酒店方向",ride:"15—20 分钟",walkTime:"10—15 分钟",taxi:"约 ¥18—28/车",rain:"商场/室内餐厅",closed:"便利店简餐或连锁店",night:false,status:"pending"},
        {start:"12:10",end:"13:10",type:"hotel",title:"回酒店取行李 · 最终检查",duration:"60 分钟",play:"取行李、补水、确认 D2125 状态和青岛北站进站口。",must:"13:10 最晚离开；若暴雨提前到 12:45。",photo:"—",ticket:"地铁约 ¥3/人",reserve:"无需",open:"以酒店寄存规则为准",queue:"取件约 5—10 分钟",walk:"约 800 米",energy:"低",restroom:"酒店",next:"去青岛北站",route:"2 号线至五四广场，换 3 号线至青岛北站",exit:"青岛北站按铁路进站导向",ride:"约 50—60 分钟",walkTime:"10—15 分钟",taxi:"约 35—55 分钟 / ¥55—80，拥堵浮动",rain:"12:45 出发，必要时打车",closed:"—",night:false,status:"estimated"},
        {start:"13:10",end:"15:10",type:"transport",title:"浮山所 → 青岛北站 · 候车",duration:"约 2 小时含余量",play:"地铁 2 号线到五四广场换 3 号线；14:30 前进入候车区。",must:"不要临时绕路；看清青岛站与青岛北站。",photo:"—",ticket:"地铁约 ¥5/人，估算",reserve:"无需",open:"地铁运营以当天公告为准",queue:"安检 10—30 分钟",walk:"约 800—1200 米",energy:"低",restroom:"地铁站、青岛北站",next:"D2125 检票",route:"2 号线→五四广场→3 号线→青岛北站",exit:"铁路进站口",ride:"55—70 分钟",walkTime:"15—20 分钟",taxi:"约 ¥55—80/车",rain:"提前 25 分钟出发",closed:"地铁异常立即打车并联系 12306",night:false,status:"estimated"},
        {start:"15:38",end:"22:00",type:"transport",title:"D2125 青岛北 → 杭州东",duration:"6 小时 22 分",play:"车上晚餐，抵杭后网约车回萧山区。",must:"杭州东晚间接驳按约 ¥70/车估算。",photo:"—",ticket:"二等座 ¥385/人",reserve:"12306 实名购票；查询时有票",open:"车次以 12306 当日状态为准",queue:"提前 45—60 分钟到站",walk:"站内约 500—900 米",energy:"低",restroom:"列车卫生间",next:"杭州东站网约车回萧山区",route:"直达",exit:"杭州东站到达层按网约车导向",ride:"6:22＋约 40—60 分钟回程",walkTime:"10—15 分钟",taxi:"杭州东→萧山区约 ¥70/车，估算",rain:"铁路正常则原计划；暴雨关注停运",closed:"停运时 12306 退改，保留酒店/机场备选",night:true,status:"verified"}
      ]
    }
  ],
  food: [
    {day:"Day 1",meal:"晚餐",area:"浮山所 / 万象城",choice:"排骨米饭、家常鲁菜",price:"¥35—60/人",queue:"10—30 分钟",backup:"商场内连锁简餐",tip:"地图查看当日仍营业，周六不排超过 20 分钟"},
    {day:"Day 2",meal:"午餐",area:"中山路 / 大鲍岛",choice:"鲅鱼水饺、锅贴、海菜凉粉",price:"¥35—65/人",queue:"15—40 分钟",backup:"中山路商场简餐",tip:"不为单一网红店折返"},
    {day:"Day 2",meal:"晚餐",area:"人民会堂 / 酒店附近",choice:"鲁菜或清淡面食",price:"¥35—60/人",queue:"10—25 分钟",backup:"酒店商圈",tip:"老城走路多，晚餐不要再排长队"},
    {day:"Day 3",meal:"午餐",area:"浮山所",choice:"鲅鱼水饺或家常菜",price:"¥35—60/人",queue:"10—25 分钟",backup:"便利店＋水果",tip:"午餐后务必回酒店休息"},
    {day:"Day 3",meal:"晚餐",area:"麦岛 / 浮山所",choice:"辣炒蛤蜊、蔬菜、主食；青岛啤酒适量",price:"¥45—80/人",queue:"10—30 分钟",backup:"商场餐厅",tip:"先问单价单位、称重和加工费；饮酒后不下海"},
    {day:"Day 4",meal:"午餐",area:"台东",choice:"锅贴、排骨米饭、海菜凉粉",price:"¥35—60/人",queue:"15—40 分钟",backup:"连锁快餐",tip:"12:05 必须离开，返程优先"}
  ],
  seafoodSafety: [
    "下单前让商家写清：按斤、按 500 克、按份还是按只；确认是否另收加工费、餐位费。",
    "活海鲜称重时看清去袋、沥水和电子秤归零；对重量或价格有疑问先不加工。",
    "慎买来源不明、生食或国家明令禁止交易的海洋生物；孕妇、过敏体质与肠胃敏感者避免生腌。",
    "海鲜与冰饮、酒精不要一次过量；出现呼吸困难、全身风团等严重过敏立即拨打 120。",
    "饮酒后绝不下海；腹泻先补液、清淡饮食，持续加重或发热就医。"
  ],
  budgetPresets: {
    saver:{label:"极省版", outbound:1540, localHome:120, hotel:894, city:120, food:620, tickets:120, insurance:60, supplies:70, souvenir:0, taxi:false, laoshan:false, contingency:10},
    comfort:{label:"经济舒适版", outbound:1934, localHome:140, hotel:1676, city:184, food:800, tickets:160, insurance:80, supplies:100, souvenir:0, taxi:true, laoshan:false, contingency:10},
    easy:{label:"少走路版", outbound:1934, localHome:180, hotel:1913, city:360, food:960, tickets:180, insurance:100, supplies:120, souvenir:200, taxi:true, laoshan:false, contingency:12}
  },
  checklist: [
    {group:"证件与订单",items:["身份证","酒店确认单","车票或航班信息","景区预约码","旅行保险"]},
    {group:"电子设备",items:["手机和充电器","充电宝","防水手机袋","少量现金"]},
    {group:"穿着与防护",items:["雨伞","防晒霜","遮阳帽","舒适防滑鞋","薄外套","换洗衣物"]},
    {group:"健康",items:["肠胃药","晕车药","创可贴","常用处方药"]},
    {group:"出发前复核",items:["天气复核","台风、暴雨和海浪预警检查","浴场与海边开放状态","列车/航班状态","酒店窗型与寄存确认"]}
  ],
  prepSchedule: [
    {when:"出发前 30 天",task:"锁定可取消酒店；设置 12306 售票提醒；比较合适时段机票。"},
    {when:"出发前 15 天",task:"购买车票；机票只在满足价格和时段阈值时切换。"},
    {when:"出发前 7 天",task:"更新逐日天气；预约博物馆/景区；购买保险。"},
    {when:"出发前 3 天",task:"复核酒店、交通、窗型和寄存；准备雨具、防晒与药品。"},
    {when:"出发前 1 天",task:"20:00 后查天气、预警、海浪、景区关闭与列车状态；截图保存订单。"},
    {when:"出发当天",task:"身份证随身；06:20 出发；不把行李放后备箱后忘记。"},
    {when:"每天晚上",task:"21:00 复核第二天天气、预约、开放状态和地铁运营，按模式切换路线。"}
  ],
  risks: [
    {title:"暴雨全天",level:"高",plan:"取消海岸、山地与栈桥深入段；啤酒博物馆＋官方开放室内博物馆＋万象城。雷电时不在树下、海边和高点停留。"},
    {title:"台风 / 大风 / 大浪",level:"高",plan:"服从封闭，取消小麦岛、浴场、崂山与情人坝；不把另一个海边景点当替代。"},
    {title:"航班延误",level:"中",plan:"优先高铁已规避；若选飞机，保留可取消酒店并准备机场餐食，延误证明与保险理赔材料留存。"},
    {title:"高铁票未买到",level:"中",plan:"同时候补 D2160，保留 G3006；扩大到杭州东/西与青岛/青岛北组合，避免购买不明渠道加价票。"},
    {title:"酒店临时取消",level:"中",plan:"先让平台按原条件协调；备选同一地铁走廊，不临时跨区。保留订单截图与沟通记录。"},
    {title:"身体不舒服",level:"中",plan:"只保留万象城、酒店周边和室内馆；每天原计划已留 1.5—3 小时休息。症状严重拨打 120。"},
    {title:"误车风险",level:"高",plan:"7 月 21 日 13:10 最晚离开酒店区域，14:30 前进青岛北候车区；暴雨再提前 25 分钟。"}
  ]
};
