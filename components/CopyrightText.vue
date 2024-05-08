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
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.copyright-container.light {
  background-color: #edf2f7;
  color: #636362;
}

.copyright-container.dark {
  background-color: #2d3748;
  color: #f7fafc;
}

p {
    font-size: 10px;
}
</style>
1/
