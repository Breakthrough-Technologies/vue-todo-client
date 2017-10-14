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
              <input class="input" type="text" placeholder="Add a new task" v-model="newTask" v-on:keyup="whileTyping" />
            </div>
            <div class="control">
              <button class="button is-primary" v-on:click="addTask" v-html="buttons.addTask.icon" v-bind:title="buttons.addTask.title" v-bind:disabled="buttons.addTask.disabled"></button>
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
      tasks: [],
      buttons: {
        addTask: {
          title: 'Click to add a new task',
          icon: `<i class="fa fa-plus" aria-hidden="true"></i>`,
          disabled: true
        }
      }
    }
  },
  methods: {
    whileTyping: function (e) { // when the user types in the text box...
      if (this.newTask.length) {
        this.buttons.addTask.disabled = false // enable the button since we have some text in the box
        if (e.key === 'Enter') { // if the Enter key was pressed
          this.addTask() // add the task
        }
      } else { // disable the button if there's no text
        this.buttons.addTask.disabled = true
      }
    },
    addTask: function () {
      if (this.newTask.length) {
        this.tasks.push({description: this.newTask, completed: false})
        this.newTask = '' // clear the text box
        this.buttons.addTask.disabled = true // once we're done adding the task, disable the button again
      }
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
