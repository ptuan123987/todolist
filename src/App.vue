<template>
  <div class="">
    <ToDoList/>
    <CreateTask/>
  </div>

</template>

<script>
import ToDoList from './components/ToDoList.vue'
import CreateTask from './components/CreateTask.vue'
export default {
  name: 'App',
  components: {
    ToDoList,
    CreateTask
  },
  data() {
    return {
    }
  }

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
