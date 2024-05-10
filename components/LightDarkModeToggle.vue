<template>
    <UButton
        class="toggle-icon"
        :class="{ 'dark': isDark, 'light': !isDark }"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        size="md"
        color="gray"
        variant="link"
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
.toggle-icon {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
    z-index: 100;
    background: none;
}

.toggle-icon:hover {
    animation: spin 1s ease-in-out;
}
.toggle-icon.light:hover {
    color: #b1a500;
}
.toggle-icon.dark:hover {
    color: #e9e9e7;
}

@keyframes spin {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
</style>
