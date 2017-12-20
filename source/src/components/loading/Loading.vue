<template>
    <div>
        <mu-circular-progress :size='60' :strokeWidth='5' style='margin-top: 50%;left: 42%;'/>
        <br/>
        <div style='text-align: center'>正在加载数据...</div>
    </div>
</template>

<<script>
export default {
  name: 'loading',
  data () {
    return {
      
    }
  },
  mounted() { 
      let _this = this;
      setTimeout(() => {
          _this.$router.replace('/map');
      }, 2000);
  }
}
</script>

<style scoped>

</style>