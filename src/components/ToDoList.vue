<template>
    <div class="">
        <Task v-for="(task,index) in tasks" :key="index" :task="task" :index="index"/>
    </div>
</template>
<script>
import {  mapState } from 'vuex';
import Task from './TaskList.vue'

export default {
    components : {
        Task
    },
    
    computed : {
        ...mapState(['tasks'])
    }
}
</script>
<style></style>