<template>
    <a :href="link">
        <Icon :name="icon" color="#2e2e2e" size="3em" />
    </a>
</template>

<script setup>
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
