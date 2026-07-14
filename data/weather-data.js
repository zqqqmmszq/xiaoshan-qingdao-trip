window.WEATHER_DATA = {
  timezone: "Asia/Shanghai",
  updatedAt: "2026-07-14 10:30",
  status: "临近出发更新",
  headline: "18—20 日官方短期预报均提示有雨，21 日尚待官方短期预报补全",
  notice: "当前已进入临近预报期，但不同来源仍有分歧。7 月 17 日晚及每天 21:00 必须复核中国天气网、预警信息与浴场开放状态。",
  source: {
    name: "中国天气网·青岛",
    url: "https://www.weather.com.cn/weather15d/101120201.shtml",
    checked: "2026-07-14"
  },
  secondarySource: {
    name: "WeatherWorld 青岛 14 天",
    url: "https://www.weatherworld.com/14day-weather/cn/qingdao.html",
    checked: "2026-07-14",
    note: "二级来源倾向多云到晴间多云、局地雷雨；与中国天气网有分歧，仅用于提示不确定性。"
  },
  climateReference: {
    status: "气候参考",
    temperature: "常见约 25—30℃，雨后或夜间略低",
    humidity: "沿海湿度通常较高，体感可能比气温更闷热",
    rainfall: "7 月为多雨季，短时雷雨、暴雨需防范",
    uv: "晴间多云时紫外线仍可能强",
    wind: "海边风力和阵风常高于城区；大风时远离礁石、栈道边缘",
    risks: "台风外围、暴雨、雷电、大浪与临时封闭均可能改变行程",
    clothing: "速干短袖＋薄外套，防滑鞋；随身折叠伞、防晒霜、帽子与防水袋"
  },
  days: [
    {
      date: "2026-07-18", label: "周六", state: "临近出发更新",
      morning: "小雨可能", afternoon: "小雨", evening: "小雨/阴，需复核",
      low: 24, high: 27, rain: null, humidity: null, uv: "待核实", wind: "东风 3—4 级",
      feels: "湿热、路面可能湿滑", outdoor: "谨慎",
      advice: "带伞、防滑鞋；夜景按降雨强度缩短，优先万象城室内备选。"
    },
    {
      date: "2026-07-19", label: "周日", state: "临近出发更新",
      morning: "小雨可能", afternoon: "小雨", evening: "小雨/阴，需复核",
      low: 25, high: 26, rain: null, humidity: null, uv: "待核实", wind: "东风 3—4 级",
      feels: "高湿，体感黏腻", outdoor: "谨慎",
      advice: "老城石板路防滑；信号山若雷雨或步道关闭，改室内博物馆。"
    },
    {
      date: "2026-07-20", label: "周一", state: "临近出发更新",
      morning: "小雨", afternoon: "小雨转阴", evening: "阴，需复核",
      low: 25, high: 27, rain: null, humidity: null, uv: "待核实", wind: "南风 3—4 级",
      feels: "湿热、海边风更明显", outdoor: "谨慎",
      advice: "出发前看海浪和浴场公告；大风、大浪或雷电时取消海边路线。"
    },
    {
      date: "2026-07-21", label: "周二", state: "待官方短期预报补全",
      morning: "待核实", afternoon: "待核实", evening: "返程途中",
      low: null, high: null, rain: null, humidity: null, uv: "待核实", wind: "待核实",
      feels: "待核实", outdoor: "待核实",
      advice: "7 月 17 日晚补全；返程日优先室内景点，预留去青岛北站时间。"
    }
  ]
};
