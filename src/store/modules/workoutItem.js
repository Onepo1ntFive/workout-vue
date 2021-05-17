export default {
    actions: {
        async fetchWorkouts(context) {
            // const result = await fetch('./data.json')
            // const workouts = await result.json();
            
            const workouts = [
                {
                    "id": 1,
                    "name": "Подтягивания",
                    "iterations": 5,
                    "count": 5,
                    "pause": 60
                },
                {
                    "id": 2,
                    "name": "Отжимания",
                    "iterations": 4,
                    "count": 4,
                    "pause": 40
                },
                {
                    "id": 3,
                    "name": "Скручивания",
                    "iterations": 5,
                    "count": 5,
                    "pause": 30
                },
                {
                    "id": 4,
                    "name": "Приседания",
                    "iterations": 5,
                    "count": 5,
                    "pause": 35
                }
                ,
                {
                    "id": 5,
                    "name": "Планка",
                    "iterations": 2,
                    "count": 3,
                    "pause": 60
                }
            ]
            context.commit('updateWorkouts', workouts)
        }
    },
    mutations: {
        updateWorkouts(state, workouts) {
            state.workouts = workouts
        }
    },
    state: {
        workouts: []
    },
    getters: {
        allWorkouts(state) {
            return state.workouts
        }
    }
}