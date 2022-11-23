<template>
    <div class="">
        <form action="#" @submit.prevent="createTask">
            <input type="text" ref="nameTask" class="form-control" v-model="newTask.name" >
            <input type="time" class="form-control" v-model="newTask.time">
            <button class="btn btn-primary btn-sm">Add</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

    export default {
        data() {
            return {  
                newTask : {
                    name : '',
                    status:'',
                    time : ''
                }
            }
        },
        methods : {
            ...mapActions(['addTask']),
            createTask() {
                this.addTask({...this.newTask})
                this.newTask = {},
                this.$refs.nameTask.focus(); 
            }
            
        }
    }
</script>
<style></style>