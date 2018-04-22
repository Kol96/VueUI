<template>
  <div class="th-hello">
      <h2 class="th-hello__title">ThinkHome Components Library</h2>
      <p class="th-hello__message">Hello {{ message }}!</p>
  </div>
</template>

<script>
export default {
  name: 'ThHello',

  props: {
    message: {
      type: String,
      default: 'ThinkHome'
    }
  }
}
</script>
