<template>
  <Block :msg="state.msg"/>
</template>

<script>
import Block from './components/Block.vue'
import { reactive } from 'vue'

export default {
  name: 'App',
  setup(){
    const state = reactive({
      msg: "Hash your text"
    })
    return {
      state
    }
  },
  components: {
    Block
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
button {
  border-style: none;
  background-color: purple;
  color: #fff;
  padding: .5rem;
  margin-top: .5rem;
  width: 100%;
}
.flexrow{
  width: 70%;
  display: flex;
  flex-direction: column;
}
.res {
  min-height: 50px;
  border: 3px solid purple;
  color: purple;
  margin-top: .5rem;
  font-size: 1.5rem;
  word-break: break-all;
}
h1{
  border: 3px solid purple
}
.area {
  border: 3px solid purple;
  font-size: 1.5rem;
}
</style>
