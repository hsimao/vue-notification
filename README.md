# Vue Notification 組件

# [Live Demo](https://hsimao.github.io/vue-tabs-component/)

# Install

```bash
npm install mars-vue-component-tabs --save
```

# Mount

#### mount with global

```js
//in your main.js
import Tabs from '@/components/Tabs'
Vue.use(Tabs)
```

#### mount with component

```js
import Tabs from '@/components/Tabs'

export default {
  components: {
    Tabs,
  },
}
```

# Use

#### html

```html
<Tabs :value="currentTag" @change="handleTagChange">
  <Tab label="Tab1" index="1">
    <div>content......</div>
  </Tab>
  <Tab label="Tab2" index="2">
    <div>content2......</div>
  </Tab>
</Tabs>
```

#### data

```js
data() {
  return {
    currentTag: 1,
  };
}
```

#### methods

```js
  methods: {
    handleTagChange(value) {
      this.currentTag = value
    },
  }
```

# Use v-for render

#### html

```html
<Tabs :value="currentTag" @change="handleTagChange">
  <Tab v-for="item in tags" :key="item.id" :label="item.tab" :index="item.id">
    <div v-html="item.content"></div>
  </Tab>
</Tabs>
```

#### data

```js
data() {
  return {
    currentTag: 1,
    tags: [
      {
        id: 1,
        tab: "tab1",
        content: "<h1>Tab1 Content</h1><br><p>Lorem ...</p>"
      },
      {
        id: 2,
        tab: "tab2",
        content: "<h1>Tab2 Content</h1><br><p>Lorem ...</p>"
      },
      {
        id: 3,
        tab: "tab3",
        content: "<h1>Tab2 Content</h1><br><p>Lorem ...</p>"
      }
    ]
  };
}

```

# [Source code Demo](https://github.com/hsimao/vue-tabs-component/blob/master/src/App.vue)
