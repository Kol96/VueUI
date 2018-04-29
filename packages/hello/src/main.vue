<template>
  <div class="v-hello">
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
