<template>
    <div id="app">
        <workoutItems />
    </div>
</template>

<script>
import workoutItems from "@/components/workoutItems";
export default {
    name: "App",
    components: {
        workoutItems,
    },
};
</script>
