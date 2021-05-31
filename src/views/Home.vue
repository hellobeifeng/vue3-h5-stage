<template>
  <div class="demo">== Home Page ==</div>
  <p class="count">State: {{ state.count }}</p>
  <van-button class="add" type="primary" block @click="add">加</van-button>
  <van-button class="min" type="primary" block @click="min">减</van-button>
  <van-button class="min" type="primary" block @click="update">加100</van-button>
</template>

<script>
import { defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const store = useStore()
    const state = store.state

    const add = () => {
      store.commit("add", {
        count: 1
      });
    }
    const min = () => {
      store.commit("min", {
        count: 1
      });
    }
    const update = () => {
      store.dispatch('add100')
    }

    return {
      state,
      add,
      min,
      update
    }
  }
})
</script>

<style scoped>
  .demo {
    text-align: center;
    font-size: 40PX; /* PX 大写，编译时不会将其转化为 rem */
  }
  .norem-demo {
    text-align: center;
    font-size: 40px; /* norem 开头的 class 类名，编译时不会将其转化为 rem */
  }
  .count {
    text-align: center;
    font-size: 30px;
    color: chartreuse;
  }
  .add {
    margin-bottom: 20px;
  }
</style>