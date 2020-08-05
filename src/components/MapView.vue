<template>
    <div class="map-view">
      <div id="all-map"></div>
    </div>
</template>

<script>
import ZnvMap from '../common/map/znvMap'
export default {
  name: 'MapView',
  data () {
    return {
      resizeValue: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  watch: {
    '$store.getters.resizeValue': {
      handler (v) {
        this.mapResize(v)
        this.resizeValue = v
      },
      immediate: true
    }
  },
  methods: {
    mapResize (v) {
      if (v) {
        let mapDom = document.querySelector('#all-map')
        mapDom.style.transform = 'scale(' + 1 / v[0] + ',' + 1 / v[1] + ')'
      }
    },
    initMap () {
      // 初始化地图
      ZnvMap.start('all-map', {
        resizeEnable: true,
        zoom: 18,
        mapStyle: 'amap://styles/0484966a6fbd876d2cd0153361caf817',
        // viewMode: '3D',
        // pitch: 50
      })
      // 地图加载完之后的一系列操作
      // ZnvMap.mapComplete(() => {
        this.mapResize(this.resizeValue)
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.map-view{
  width: 100%;
  height: 100%;
  overflow: hidden;
  #all-map{
    width: 100%;
    height: 100%;
  }
}
</style>
