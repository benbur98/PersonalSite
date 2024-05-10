<template>
    <UCard>
        <div class="flex flex-col items-center space-y-2">
            <UAvatar
                :src=image_src
                :alt="`${props.name} Picture`"
                size="3xl" />
            <h1><strong>{{ name }}</strong></h1>
            <h3>{{ subtitle }}</h3>
        </div>
    </UCard>
</template>

<script setup>
const props = defineProps({
    name: String,
    subtitle: String,
    image_src: String,
});
</script>
