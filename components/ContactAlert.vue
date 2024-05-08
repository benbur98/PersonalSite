<template>
    <div class="alert-container">
        <UAlert
            title="Reach out!"
            description="Why not get in touch?"
            :avatar="{ src: image_src }"
            :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
            :actions="[{ variant: 'outline', color: 'blue', label: 'Email' }]" />
    </div>
</template>

<script setup>
const props = defineProps({
    image_src: String,
    email: String,
});
</script>

<style scoped>
.alert-container {
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
}
</style>
