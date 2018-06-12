<template>
  <div class="todo-list">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        msg: "this is the todo list demo."
      }
    }

  }
</script>

<style scoped>

</style>
