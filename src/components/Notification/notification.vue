<template>
  <transition name="fade" @after-leave="afterLeave"
    @after-enter="afterEnter">
    <div class="notification" :style="style"
      v-show="visible" @mouseenter="clearTimer"
      @mouseleave="createTimer">
      <div class="notification-bg" :style="{backgroundColor: bgColor}"></div>
      <span class="notification-text" :style="{color: textColor}">{{content}}</span>
      <a class="notification-btn" :style="{color: btnTextColor}"
        @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: "關閉"
    },
    btnTextColor: {
      type: String,
      default: "#ff4081"
    },
    bgColor: {
      type: String,
      default: "#303030"
    },
    textColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    style() {
      return {};
    }
  },
  methods: {
    handleClose(e) {
      e.preventDefault();
      this.$emit("close");
    },
    afterLeave() {
      this.$emit("closed");
    },
    afterEnter() {},
    createTimer() {},
    clearTimer() {}
  }
};
</script>

<style scoped>
.notification {
  display: inline-flex;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 20px;
  min-width: 280px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  flex-wrap: wrap;
  transition: all 0.3s;
  position: relative;
}

.notification-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.notification-text {
  padding: 0;
}

.notification-btn {
  padding-left: 24px;
  margin-left: auto;
  cursor: pointer;
}
</style>