# Test

<input v-model="message"/>
<v-hello :message="message"></v-hello>

<script>
  export default {
    data() {
      return {
        message: 'test'
      }
    }
  }
</script>

### v-hello 组件

```html
<template>
  <input v-model="message"/>
  <v-hello :message="message"></v-hello>
</template>

<script>
  export default {
    data() {
      return {
        message: 'test'
      }
    }
  }
</script>
```
