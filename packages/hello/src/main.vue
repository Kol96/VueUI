<template>
  <div class="v-hello">
      <h2 class="v-hello__title">Vue Components Library</h2>
      <p class="v-hello__message">Hello {{ message }}!</p>
  </div>
</template>

<script>
export default {
  name: 'VHello',

  props: {
    message: {
      type: String,
      default: 'VueUI'
    }
  }
}
</script>
