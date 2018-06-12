<template>
  <div class="todo-list">
    <p>{{ msg }}</p>
    <input v-model="" placeholder="edit me">
    <button @click="confirm"></button>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        msg: "this is the todo list demo.",

      }
    },
    methods() {
      confirm: function () {

      }
    }

  }
</script>

<style scoped>

</style>
