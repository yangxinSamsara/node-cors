<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getData">获取数据</button>
    <p>{{name || 'null'}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getData () {
      this.$http.get('/api/list').then((res)=>{
        this.name = res.data.data.name
      })
    }
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
  margin-top: 60px;
}
</style>
