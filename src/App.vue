<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent, } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang='less' scoped>
.test {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  font-size: 20PX;
}
</style>