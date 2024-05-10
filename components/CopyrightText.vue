<template>
    <div :class="['copyright-container', $colorMode.value]">
        <p>&copy; {{ year }} | {{ owner }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    year: String, owner: String
});
</script>

<style scoped>
.copyright-container {
    width: fit-content;
    bottom: 0;
    padding: 10px;
    font-size: 10px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: none;
    background-color: #d1dbe6;
    color: #636362;
}

.copyright-container.light {
    background-color: #d1dbe6;
    color: #636362;
}

.copyright-container.dark {
    background-color: #2d3748;
    color: #f7fafc;
}
</style>
1/
