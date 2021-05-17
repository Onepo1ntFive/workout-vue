<template>
    <li>
        {{ allWorkouts }}
    </li>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: mapGetters(["allWorkouts"]),
    methods: mapActions(["fetchWorkouts"]),
    async mounted() {
        this.fetchWorkouts();
    },
};
</script>
