<template>
  <div class="page-title">
    <div class="weather-container">
      <znv-weather></znv-weather>
    </div>
    <div class="system-title">{{systemTitle}}</div>
    <div class="clock-container">
      <znv-clock></znv-clock>
    </div>
  </div>
</template>

<script>
import ZnvWeather from '@/components/ZnvWeather'
import ZnvClock from '@/components/ZnvClock'

export default {
  name: 'PageTitle',
  props: ['systemTitle'],
  components: {
    ZnvWeather,
    ZnvClock
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .page-title {
    z-index: 1;
    width: 100%;
    height: 100px;
    color: #fff;
    text-align: center;
    background: url("../assets/title.png") no-repeat;
    background-size: 100% 100%;
    .system-title{
      height: 100px;
      line-height: 100px;
      font-size:38px;
      font-weight:bold;
      background:linear-gradient(180deg,rgba(0,251,254,1) 0%, rgba(0,150,255,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
    .weather-container{
      position: absolute;
      left: 0;
      top: 0;
    }
    .clock-container{
      position: absolute;
      right: 100px;
      top: 40px;
      width: 430px;
    }
  }
</style>
