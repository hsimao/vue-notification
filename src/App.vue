<template>
  <div id="app">

    <button @click="addNotify">新增通知組件</button>
    <input type="text" v-model="content">
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      content: "你已成功註冊"
    };
  },
  methods: {
    addNotify() {
      this.$notify({
        content: this.content,
        btn: "close",
        btnTextColor: "green", // default: #ff4081
        textColor: "yellow", // default: #fff
        bgColor: "blue" // default: #303030
      });
    }
  }
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
}

button {
  padding: 8px 20px;
  background: #ff4081;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}

button:hover {
  box-shadow: none;
}
button:active {
  box-shadow: none;
  transform: translateY(1px);
}

input {
  margin-top: 20px;
  padding: 8px 20px;
  outline: none;
  font-size: 16px;
  border: solid 2px #ff4081;
  color: #777;
}
</style>
