// eslint-disable-next-line
const sysConfig = {
  systemTitle: '综合能源服务平台', // 系统名称
  cityCode: 'CN101190101', // 和风天气城市code，默认南京，可在 https://dev.heweather.com/docs/refer/city上搜索
  map: {
    mapType: 'gaodeMap', // gaodeMap openlayerMap baiduMap
    key: '2dfcc9a2e5eab40d2dfd5b248ff824ff', // 高德地图开发key
    apiUrl: 'http://webapi.amap.com/maps?v=1.4.6&key=2dfcc9a2e5eab40d2dfd5b248ff824ff&&plugin=AMap.MapType,AMap.Scale,AMap.OverView,AMap.ToolBar,AMap.MouseTool',
    mapServeUrl: 'http://10.45.157.179:8008', // 离线地图服务器地址
    mapCsysType: 4, // 地图坐标系 csysType 坐标系类型，1表示WGS84,4表示GCJ02,3表示BD09(百度坐标系）
    superMapUrl: 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China_4326'
  }
}
