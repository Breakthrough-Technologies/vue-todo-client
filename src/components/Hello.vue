<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <label>Add a new task <input v-model="newTask" /><button v-on:click="addTask()">Add</button></label>

    <h2>Tasks</h2>
    <p v-if="tasks.length">
      <ul v-for="task in tasks">
        <li>{{ task.description }}</li>
      </ul>
    </p>
    <p v-else>
      There are no tasks yet
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'ToDo List',
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({description: this.newTask, completed: false})
      this.newTask = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
