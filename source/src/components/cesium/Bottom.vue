<template>
    <div class="bottom">
        <mu-avatar icon="home" color="black" backgroundColor="white" :size="50" 
        :iconSize="32" v-show="!appbarShow" @click="back" style="cursor:pointer;"/> 
    </div>    
</template>

<script>
export default {
  name: 'bottom',
  data () {
      return {
          activeIndex: '1',
          appbarShow: false
      }
  },
  methods: {
      back() {
          this.$router.replace('/main');
      }
  },
  mounted() { 
      
  }
}
</script>

<style lang='less' scoped>
    .bottom {
        position: absolute;
        top: 90%;
    }
</style>