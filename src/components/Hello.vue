<template>
  <div class="hello">
    <h1>{{ title }}</h1>

    <label>Add a new task <input v-model="newTask" /></label>

    <h2>Tasks</h2>
    <ul v-for="task in tasks">
      <li>{{ task.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'ToDo List',
      newTask: '',
      tasks: [
        { description: 'A task to do', completed: false },
        { description: 'Do another thing', completed: false },
        { description: 'Do some more stuff', completed: false }
      ]
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
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
