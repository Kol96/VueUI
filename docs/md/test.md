<script>
  export default {
    data() {
      return {
        message: 'test'
      }
    }
  }
</script>

## Test

### v-hello 组件

测试组件

::: demo 通过设置 message 显示不同信息

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

:::
