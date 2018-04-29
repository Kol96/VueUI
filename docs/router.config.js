import Vue from 'vue'
import Router from 'vue-router'
import navConfig from './nav.config.json'

Vue.use(Router)

const registerRoute = navConfig => {
  let route = []
  route.push({
    path: '/',
    redirect: '/test'
  })
  navConfig.nav.forEach((nav, index) => {
    if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    }
  })
  function addRoute(nav) {
    route.push({
      path: nav.path,
      name: nav.title || nav.name,
      component: r => r(require(`./md${nav.path}.md`))
    })
  }
  return route
}

let routes = registerRoute(navConfig)

export default new Router({
  routes: routes
})
