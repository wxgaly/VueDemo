<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{msg}}</div>
</template>

<style scoped>
.wrap{
  position: fixed;
  width: 200px;
  height: 100px;
  font-size: x-large;
  color: white;
  left: 50%;
  top:50%;
  text-align: center;
  vertical-align: center;
  line-height: 100px; /*设置line-height与父级元素的height相等*/
  background: rgba(0,0,0,.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
