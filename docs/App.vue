<template>
  <div id="app">
    <v-header></v-header>
    <div id="container">
      <v-nav :data="nav"></v-nav>
      <div id="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header.vue'
import VNav from './components/v-nav.vue'
import navConfig from './nav.config.json'

export default {
  name: 'App',
  data() {
    return {
      nav: navConfig.nav
    }
  },
  components: {
    VHeader,
    VNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  padding-top: 61px;
  font-size: 15px;
}
#container {
  padding: 0 60px;
}
#main {
  margin: 0 auto;
  margin-left: 290px;
  max-width: 600px;
  padding: 30px;
}
#main h2 {
  margin-top: 0;
}
</style>
