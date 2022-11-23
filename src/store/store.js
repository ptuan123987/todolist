import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            tasks: [{
                    name: "Học Vue",
                    status: "Đã hoàn thành",
                    time: "09:09",
                },
                {
                    name: "Học Javascript",
                    status: "Đã hoàn thành",
                    time: "11:15",
                },
                {
                    name: "Học PHP",
                    status: "Chưa hoàn thành",
                    time: "12:01",
                },
                {
                    name: "Học Laravel",
                    status: "Chưa hoàn thành",
                    time: "19:07",
                },
                {
                    name: "Học MySQL",
                    status: "Chưa hoàn thành",
                    time: "18:05",
                }
            ]
        }
    },
    getters: {
        taskName: (state) => state.tasks.name,
        taskStatus: (state) => state.tasks.status,
        taskTime: (state) => state.tasks.time

    },
    mutations: {
        addTask(state, newTask) {
            state.tasks.push(newTask)
        },
        completedTask(state, index) {
            state.tasks[index].status = 'Đã hoàn thành'
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1)
        },

    },
    actions: {
        addTask({ commit }, newTask) {
            commit('addTask', newTask)
        },
        completedTask({ commit }, index) {
            commit('completedTask', index)
        },
        deleteTask({ commit }, index) {
            commit('deleteTask', index)
        }
    }

})