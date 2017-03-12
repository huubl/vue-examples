<template>
    <li>{{ todo.task }}</li>
</template>

<style>
    li
    {
        font-size: 125%;;
    }
</style>

<script>
    export default
    {
        props: ['todo'],
    }
</script>
