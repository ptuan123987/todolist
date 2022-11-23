<template>
    <div class="">
        <span :class="{completed : task.status =='Đã hoàn thành'}">{{task.name}} </span>
        <button class="btn btn-info btn-sm" @click="completedTask(index)">Completed</button>
        <button class="btn btn-dark btn-sm">Edit</button>
        <button class="btn btn-danger btn-sm" @click="deleteTask(index)">Delete</button>

    </div>
</template>
<script>
import { mapActions } from 'vuex';


    export default {
        props : ['task','index'],
        methods : {
            ...mapActions(['completedTask','deleteTask'])
        }
    }

</script>
<style scoped>
.completed {
    text-decoration:  line-through;
}

</style>