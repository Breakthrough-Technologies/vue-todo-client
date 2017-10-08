<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <label>Add a new task <input v-model="newTask" /><button v-on:click="addTask()">Add</button></label>

    <h2>Tasks</h2>
    <div v-if="tasks.length">
      <p v-if="incompleteTasks.length">
        <ul v-for="task in incompleteTasks">
          <li><input type="checkbox" v-model="task.completed"> {{ task.description }}</li>
        </ul>
      </p>
      <p v-else>
        All tasks have been completed!
      </p>
      <hr>
      <p v-if="completedTasks.length">
        <ul v-for="task in completedTasks">
          <li><input type="checkbox" v-model="task.completed"> {{ task.description }}</li>
        </ul>
      </p>
    </div>
    <div v-else>
      There are no tasks yet
    </div>
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
  },
  computed: {
    completedTasks: function () {
      return this.tasks.filter(task => task.completed)
    },
    incompleteTasks: function () {
      return this.tasks.filter(task => !task.completed)
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
