import _ from 'lodash'

const state = {
  tasks: []
}

const mutations = {
  ADD_TASK (state, task) {
    if (task) {
      state.tasks.push(task)
    }
  },
  DELETE_TASK (state, itemIndex) {
    state.tasks[itemIndex].deleted = true
  },
  TOGGLE_COMPLETED_FLAG (state, id) {
    const itemIndex = _.findIndex(state.tasks, task => task.id === id)
    state.tasks[itemIndex].completed = !state.tasks[itemIndex].completed
  }
}

const actions = {
  addTask ({ commit }, task) {
    // async
    commit('ADD_TASK', task)
  },
  deleteTask ({ commit }, itemIndex) {
    // async
    commit('DELETE_TASK', itemIndex)
  },
  toggleCompletedFlag ({ commit }, id) {
    // async
    commit('TOGGLE_COMPLETED_FLAG', id)
  }
}

const getters = {
  allTasks: (state, getters) => (filterStr, matchCase) => {
    const allTasks = state.tasks.filter(task => !task.deleted)
    if (filterStr.length) {
      // Regex case sensitive/insensitive depending on the Match Case checkbox
      const params = matchCase ? 'g' : 'ig'
      const re = new RegExp(filterStr, params)
      return allTasks.filter(task => task.description.match(re))
    }
    return allTasks
  },
  completedTasks: (state, getters) => (filterStr, matchCase) => {
    const completedTasks = state.tasks.filter(task => !task.deleted && task.completed)
    if (filterStr.length) {
      // Regex case sensitive/insensitive depending on the Match Case checkbox
      const params = matchCase ? 'g' : 'ig'
      const re = new RegExp(filterStr, params)
      return completedTasks.filter(task => task.description.match(re))
    }
    return completedTasks
  },
  incompleteTasks: (state, getters) => (filterStr, matchCase) => {
    const incompleteTasks = state.tasks.filter(task => !task.deleted && !task.completed)
    if (filterStr.length) {
      // Regex case sensitive/insensitive depending on the Match Case checkbox
      const params = matchCase ? 'g' : 'ig'
      const re = new RegExp(filterStr, params)
      return incompleteTasks.filter(task => task.description.match(re))
    }
    return incompleteTasks
  },
  deletedTasks: (state, getters) => (filterStr, matchCase) => {
    const deletedTasks = state.tasks.filter(task => task.deleted)
    if (filterStr.length) {
      // Regex case sensitive/insensitive depending on the Match Case checkbox
      const params = matchCase ? 'g' : 'ig'
      const re = new RegExp(filterStr, params)
      return deletedTasks.filter(task => task.description.match(re))
    }
    return deletedTasks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
