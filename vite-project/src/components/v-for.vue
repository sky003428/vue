<script>
import { uuid } from "vue-uuid";
export default {
    data() {
        return {
            todos: [
                [
                    { text: "Learn JavaScript" },
                    { text: "Learn Vue" },
                    { text: "Build something awesome" },
                ],
                [
                    { text: "2Learn JavaScript" },
                    { text: "2Learn Vue" },
                ],
                [
                    { text: "3Learn JavaScript" }
                ],
            ],
        };
    },
};
</script>

<template>
    <div>
        <ol v-for="v in todos" :key="v">
            <li v-for="todo in v" :key="todo">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>

<style scoped>
</style>


