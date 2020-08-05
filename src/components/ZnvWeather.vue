<template>
    <div class="znv-weather">
      <div class="weather-left fl">
        <img :src="weatherImg" alt="天气图标" class="weather-img">
        <span class="tem-num"><span>{{temNum}}</span>℃</span>
        <span class="weather-text">{{weatherText}}</span>
      </div>
      <div class="weather-right fl">
        <span class="pm-num">PM2.5: <span>{{pmNum}}</span></span>
        <span class="wind-text">风力: <span>{{windText}}</span></span>
      </div>
    </div>
</template>

<script>
// import { getWeather } from '../api/weather'
export default {
  name: 'ZnvWeather',
  data () {
    return {
      temNum: '25',
      weatherText: '轻雾',
      pmNum: '12',
      windText: '东南风3-6级',
      weatherImg: ''
    }
  },
  created () {
    this.initWeather()
  },
  methods: {
    initWeather () {
      // eslint-disable-next-line
      $.ajax({
        type: 'POST',
        url: 'https://free-api.heweather.net/s6/weather/now',
        data: { location: 'CN101020100', key: 'da97f9b1033b43578cf9fab74af46df5' },
        dataType: 'json',
        success: (data) => {
          let tempinfo = data
          if (tempinfo.HeWeather6[0].status === 'ok') {
            // 显示选择的城市
            let weather = tempinfo.HeWeather6[0].now.cond_txt + ' '
            let windText = tempinfo.HeWeather6[0].now.wind_dir + ' ' + tempinfo.HeWeather6[0].now.wind_sc + '级'
            let temNum = tempinfo.HeWeather6[0].now.tmp
            let weatherIcon = data.HeWeather6[0].now.cond_code
            this.temNum = temNum
            this.weatherText = weather
            this.windText = windText
            this.weatherImg = require('../assets/cond_icon_heweather/' + weatherIcon + '.png')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.znv-weather{
  .weather-left{
    position: relative;
    top: 15px;
    left: 10px;
  }
  .weather-right{
    position: relative;
    left: 240px;
    top: 40px;
  }
  .weather-img{
    width: 50px;
  }
  .tem-num{
    font-size: 18px;
    font-family:Adobe Heiti Std;
    margin: 0 10px;
    span{
      font-size:29px;
      font-family:Diebel;
    }
  }
  .pm-num, .wind-text{
    margin-right: 20px;
    span{
      color: #FFD200;
    }
  }
}
</style>
