<template>
  <div class="main-page-container">
    <div class="title-container">
      <page-title :systemTitle="systemTitle"></page-title>
    </div>
    <div class="left-container"></div>
    <div class="middle-container">
      <map-view></map-view>
    </div>
    <div class="right-container"></div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import MapView from '@/components/MapView'
export default {
  name: 'MainPage',
  components: {
    PageTitle,
    MapView
  },
  data () {
    return {
      // eslint-disable-next-line
      systemTitle: sysConfig.systemTitle
    }
  }
}
</script>

<style scoped lang="scss">
.main-page-container{
  .title-container{
    position: absolute;
    top: 0;
    width: 100%;
  }
  .left-container{
    position: absolute;
    width: 530px;
    height: 970px;
    left: 10px;
    top: 100px;
    background: url("../../assets/home_bg_left@2x.png") no-repeat;
  }
  .middle-container{
    position: absolute;
    left: 545px;
    top: 132px;
    width: calc( 100% - 1090px);
    height: 930px;
    border: 1px solid #05A4FF;
  }
  .right-container{
    position: absolute;
    width: 530px;
    height: 970px;
    right: 10px;
    top: 100px;
    background: url("../../assets/home_bg_right@2x.png") no-repeat;
  }
}
</style>
