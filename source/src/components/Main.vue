<template>
    <div class='main'>
        我是王敦文，这是我的项目主页！
        <el-button type="info" round @click="turnToCesium">调至Cesium</el-button>
        <el-button type="info" round @click="turnToLeaflet">调至Leaflet</el-button>
    </div>
</template>

<script>
export default {
  name: 'main',
  data () {
      return {
        
      }
  },
  methods: {
      turnToCesium() {
          this.$router.replace('/cesium');
      },
      turnToLeaflet() {
          this.$router.replace('/leaflet');
      }
  },
  mounted() { 
      
  }
}
</script>

<style scoped>
    .main {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>