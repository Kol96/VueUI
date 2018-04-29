<template>
  <div class="v-nav">
    <ul>
      <li class="nav-item" v-for="(nav, navIndex) in data" :key="navIndex">
        <h2>{{nav.name}}</h2>
        <ul v-if="nav.children">
          <li v-for="(subNav, subNavIndex) in nav.children" :key="subNavIndex">
            <router-link :to="subNav.path">{{subNav.name}}</router-link>
          </li>
        </ul>
        <template v-if="nav.groups">
          <div class="nav-group" v-for="(group, groupIndex) in nav.groups" :key="groupIndex">
            <ul>
              <h3 class="nav-group-name">{{group.groupName}}</h3>
              <li v-for="(subNav, subNavIndex) in group.list" :key="subNavIndex">
                <router-link :to="subNav.path">{{subNav.title}}</router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
.v-nav {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 260px;
  padding: 30px 20px 30px 60px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .nav-item {
    margin-bottom: 1.3em;
    h2 {
      margin: 0 0 0.5em;
      color: #666;
      font-size: 1.2em;
    }
    ul {
      padding-left: 1em;
    }
    li > a {
      text-decoration: none;
      color: #535353;
      line-height: 2em;
      &:hover {
        color: #2086d7;
      }
    }
    .nav-group {
      h3 {
        margin: 0;
        color: #999;
        font-size: 12px;
        line-height: 1.5em;
      }
    }
  }
}
</style>
