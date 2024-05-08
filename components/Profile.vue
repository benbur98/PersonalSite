<template>
    <UCard class="profile">
        <UAvatar
            :src=image_src
            :alt="`${props.name} Picture`"
            size="3xl" />
        <h1 class="profile-name">{{ name }}</h1>
    </UCard>
</template>

<script setup>
const props = defineProps({
    name: String,
    image_src: String,
});
</script>

<style scoped>
.profile {
    text-align: center;
}

.profile-name {
    margin-top: 10px;
}
</style>
