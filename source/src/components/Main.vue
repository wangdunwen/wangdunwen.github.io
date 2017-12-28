<template>
    <div class='main'>
        <top></top>
        <left></left>
        <right></right>
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
          
      }
  },
  components: {
      left,
      top,
      right
  },
  methods: {
      
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

</style>