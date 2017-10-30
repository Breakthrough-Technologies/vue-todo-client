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
      <div class="container">
        <h1 class="title">Welcome</h1>
        <h2 class="subtitle">
          Would you like to <a href="/#/ToDo">create a task</a>?
        </h2>
      </div>
    </section>

    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Tasks</p>
                <p class="subtitle">{{ allTasksCount }}</p>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-danger">
                <p class="title">Incomplete</p>
                <p class="subtitle">{{ incompleteTasksCount }}</p>
              </article>
              <article class="tile is-child notification is-success">
                <p class="title">Completed</p>
                <p class="subtitle">{{ completedTasksCount }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
import store from '../store'

export default {
  name: 'hello',
  data () {
    return {
      title: 'ToDo List'
    }
  },
  computed: {
    allTasksCount: function () {
      return store.getters.allTasks('').length
    },
    completedTasksCount: function () {
      return store.getters.completedTasks('').length
    },
    incompleteTasksCount: function () {
      return store.getters.incompleteTasks('').length
    }
  }
}
</script>
