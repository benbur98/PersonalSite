<template>
    <a :href="`mailto: ${email}`">
        <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-envelope" />
            <p>Email</p>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    email: String
});
</script>
