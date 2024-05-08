<template>
    <a :href="link">
        <Icon :name="icon" :color="iconColor" size="2.5em" />
    </a>
</template>

<script setup>
const colorMode = useColorMode();
const iconColor = computed(() => colorMode.value === 'dark' ? '#f8f8f8' : '#2e2e2e');

const props = defineProps({
    icon: String,
    link: String
});
</script>

<style scoped>
.icon {
    transition: transform 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
