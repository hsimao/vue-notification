# Vue Notification 組件

# [Live Demo](https://hsimao.github.io/vue-notification/)

# Install

```bash
npm install mars-vue-notification --save
```

# Mount

#### mount with global

```js
//in your main.js
import Notification from 'mars-vue-notification'
Vue.use(Notification)
```

# Use

#### this.\$notify()

```js
export default {
  ...
  mounted() {
    setTimeout(() => {
      this.$notify({
        content: "test message...",
        btn: "close"
      });
    }, 1000)
  }
};
```
