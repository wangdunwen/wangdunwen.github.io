<template>
    <div class='main'>
        <top></top>
        <div class="arrowLeft" @click="expand" v-show='arrowLeftShow'>
            <i class="el-icon-caret-left" style="color:#009688;"></i>
        </div>
        <div class="arrowRight" @click="resize" v-show='arrowRightShow'>
            <i class="el-icon-caret-right" style="color:white;"></i>
        </div>
        <left v-show='leftShow'></left>
        <right :style="rightStyle"></right>
    </div>
</template>

<script>
import left from './main/Left';
import top from './main/Top';
import right from './main/Right';

export default {
  name: 'main',
  data () {
      return {
          leftShow: true,
          arrowLeftShow: true,
          arrowRightShow: false,
          rightStyle: {}
      }
  },
  components: {
      left,
      top,
      right
  },
  methods: {
      expand() {
          this.leftShow = false;
          this.arrowLeftShow = false;
          this.arrowRightShow = true;
          this.rightStyle = {
              left: '3%'
          };
      },
      resize() {
          this.leftShow = true;
          this.arrowLeftShow = true;
          this.arrowRightShow = false;
          this.rightStyle = {
              left: '25%'
          };
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
        background: white;
    }

    .arrowLeft {
        position:absolute;
        top: 15%;
        left: 19%;
        padding: 1%;
        z-index: 111000;
        cursor:pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }

    .arrowRight {
        position:absolute;
        top: 15%;
        height: 10%;
        width: 2.4%;
        left: 0%;
        z-index: 111000;
        cursor:pointer;
        background: #009688;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }

</style>