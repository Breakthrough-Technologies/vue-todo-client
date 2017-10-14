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
  
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'ToDo List'
    }
  }
}
</script>
