<template>
    <ul>
        <workoutItem v-for="workout in allWorkouts" :key="workout.id" />
    </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import workoutItem from "@/components/workoutItem";
export default {
    computed: mapGetters(["allWorkouts"]),
    methods: mapActions(["fetchWorkouts"]),
    async mounted() {
        this.fetchWorkouts();
    },
    components: {
        workoutItem,
    },
};
</script>
