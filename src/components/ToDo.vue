<template>
  <section>

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
          <a v-bind:class="{ 'is-active': tab.allActive }" v-on:click="activateTab(1)">All ({{ allTasks.length }})</a>
          <a v-bind:class="{ 'is-active': tab.incompleteActive }" v-on:click="activateTab(2)">Incomplete ({{ incompleteTasks.length }})</a>
          <a v-bind:class="{ 'is-active': tab.completedActive }" v-on:click="activateTab(3)">Completed ({{ completedTasks.length }})</a>
          <a v-bind:class="{ 'is-active': tab.deletedActive }" v-on:click="activateTab(4)">Deleted ({{ deletedTasks.length }})</a>
        </div>
        
        <div class="panel-block" v-if="!allTasks.length">
          There are no tasks yet
        </div>

        <div class="panel-block incomplete-tasks" v-for="task in incompleteTasks" v-if="tab.allActive || tab.incompleteActive">
            <p class="control">
              <label class="checkbox">
                <input v-model="task.completed" type="checkbox">
                {{ task.description }}
              </label>
              <p class="icon is-small is-danger is-pulled-right" v-on:click="deleteTask(task.id)">
                  <i class="fa fa-remove"></i>
              </p>
            </p>
        </div>
        
        <div class="panel-block complete-tasks" v-for="task in completedTasks" v-if="tab.allActive || tab.completedActive">
            <p class="control">
              <label class="checkbox">
                <input v-model="task.completed" type="checkbox">
                {{ task.description }}
              </label>
              <p class="icon is-small is-danger is-pulled-right" v-on:click="deleteTask(task.id)">
                  <i class="fa fa-remove"></i>
              </p>
            </p>
        </div>
        
        <div class="panel-block trashed-tasks" v-for="task in deletedTasks" v-if="tab.deletedActive">
            <p class="control">
              <label class="checkbox disabled">
                <input :checked="task.completed" type="checkbox">
                {{ task.description }}
              </label>
            </p>
        </div>

      </nav>

    </section>

  </section>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      title: 'ToDo List',
      newTask: '',
      tasks: [],
      tab: {
        allActive: true,
        incompleteActive: false,
        completedActive: false,
        deletedActive: false
      },
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
        this.tasks.push({description: this.newTask, completed: false, deleted: false})
        this.newTask = '' // clear the text box
        this.buttons.addTask.disabled = true // once we're done adding the task, disable the button again
      }
    },
    activateTab: function (i) {
      this.tab = {
        allActive: i === 1,
        incompleteActive: i === 2,
        completedActive: i === 3,
        deletedActive: i === 4
      }
    }
  },
  computed: {
    allTasks: function () {
      return this.tasks.filter(task => !task.deleted)
    },
    completedTasks: function () {
      return this.allTasks.filter(task => task.completed)
    },
    incompleteTasks: function () {
      return this.allTasks.filter(task => !task.completed)
    },
    deletedTasks: function () {
      return this.tasks.filter(task => task.deleted)
    }
  }
}
</script>
