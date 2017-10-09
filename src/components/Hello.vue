<template>
  <section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container is-fullwidth">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            A Vue.js + Bulma app
          </h2>
        </div>
      </div>
    </section>
  
    <section class="section">

      <nav class="panel">
        <div class="panel-heading">
          Tasks
        </div>
        <div class="panel-block">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Add a new task" v-model="newTask" />
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="addTask()"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div class="panel-tabs">
          <a class="is-active">all</a>
          <a>completed</a>
        </div>
        <div v-if="tasks.length">
          <div v-if="incompleteTasks.length">
            <span class="panel-block" v-for="task in incompleteTasks">
              <input type="checkbox" v-model="task.completed"> {{ task.description }}
            </span>
          </div>
          <div v-if="completedTasks.length">
            <span class="panel-block"><strong>Completed tasks</strong></span>
            <span class="panel-block" v-for="task in completedTasks">
              <input type="checkbox" v-model="task.completed"> {{ task.description }}
            </span>
          </div>
        </div>
        <div v-else>
          <span class="panel-block">
            There are no tasks yet
          </span>
        </div>
      </nav>

    </section>

  </section>
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
