<template>
  <el-switch v-model="value1" />
  <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"/>
</template>

<script>

import { ref } from 'vue'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const value1 = ref(true)
    const value2 = ref(false)
    return {
      value1,
      value2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
