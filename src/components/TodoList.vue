<template>
  <div class="todo-list">
    <p>{{ msg }}</p>
    <input v-model="inputString" placeholder="请输入要添加的内容:"/>
    <button @click="confirm" class="btn-create">添加</button>

    <div class="item-bar">
      <form>
        <input type="checkbox"><label>全选</label>
      </form>

      <form>
        <input type="radio" name="answer"/><label>A</label>
        <input type="radio" name="answer"/><label>B</label>
      </form>

    </div>

    <div class="todo-ul">
      <ul>
        <li class="todo-item" v-for="(item, index) in items" v-bind:key="index">
          <input type="checkbox">
          {{item}}
          <button class="btn-item" @click="deleteItem(index)">删除</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      msg: 'this is the todo list demo.',
      items: [],
      inputString: ''
    }
  },
  methods: {
    confirm () {
      if (this.inputString) {
        this.items.push(this.inputString)
        this.inputString = ''
      } else {
        // alert('输入不能为空!')
        this.$Message.warning('输入不能为空!')
      }
    },
    deleteItem (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.btn-create {
  width: 100px;
  color: darkviolet;
}

.btn-item {
  margin-left: 20px;
}

.todo-ul {
  text-align: center;
}

.todo-ul ul {
  text-align: center;
  list-style: none;
}

.todo-ul li {
  padding: 10px;
  /*border-bottom: 1px outset chartreuse;*/
}

</style>
