<template>
    <a :href="link">
        <Icon :name="icon" color="black" />
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
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
