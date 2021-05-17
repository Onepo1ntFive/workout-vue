import Vue from 'vue'
import Vuex from 'vuex'
import workoutItems from './modules/workoutItem'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        workoutItems
    }
})