<template>
    <div class="znv-clock">
      <div class="title-date fl">
        <span>{{nowDay}}</span>{{nowWeek}}
      </div>
      <div class="title-time fr">{{nowTimeArr[0]}}:{{nowTimeArr[1]}}:{{nowTimeArr[2]}}</div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ZnvClock',
  data () {
    return {
      nowTimeArr: ['00', '00', '00'],
      nowDay: '2018-01-01',
      nowWeek: '星期一',
      timeInterval: null,
      timeInterval2: null,
      allWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  created () {
    this.initTime()
  },
  destroyed () {
    if (this.timeInterval) {
      clearInterval(this.timeInterval)
      this.timeInterval = null
    }
    if (this.timeInterval2) {
      clearInterval(this.timeInterval2)
      this.timeInterval2 = null
    }
  },
  methods: {
    initTime () {
      this.nowDay = moment().format('YYYY-MM-DD')
      this.nowWeek = this.allWeek[moment().day()]
      this.$nextTick(() => {
        this.timeInterval = setInterval(() => {
          let timeStr = moment().format('HH:mm:ss')
          this.nowTimeArr = timeStr.split(':')
        }, 1000)
        this.timeInterval2 = setInterval(() => {
          this.nowDay = moment().format('YYYY-MM-DD')
          this.nowWeek = this.allWeek[moment().day()]
          this.initWeather()
        }, 1000 * 60 * 15)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.znv-clock{
  .title-text {
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
  }
  .title-date{
    span{
      margin-right: 15px;
    }
  }
  .title-time {
    font-size: 24px;
    font-family: Arial-Black;
    font-weight: bold;
  }
}
</style>
