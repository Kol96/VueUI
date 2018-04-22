import Hello from './src/main'

Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello
