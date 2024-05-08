<template>
    <div class="copyright-container">
        <p class="copyright-text">&copy; {{ year }} | {{ owner }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    year: String, owner: String
});
</script>

<style scoped>
.copyright-text {
    color: #636362;
    font-size: 10px;
}

.copyright-container {
    width: fit-content;
    bottom: 0;
    padding: 10px;
    background-color: #edf2f7;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
</style>
