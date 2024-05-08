<template>
    <UButton
        class="light-dark-toggle"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        size="md"
        color="gray"
        variant="ghost"
        @click="isDark = !isDark" />
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
});
</script>

<style scoped>
.light-dark-toggle {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
}
</style>
