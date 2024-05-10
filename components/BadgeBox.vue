<template>
    <div class="badge-box">
        <div class="badge-item" v-for="badge in items">
            <UBadge variant="soft">
                {{ badge }}
            </UBadge>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: Array
});
</script>

<style scoped>
.badge-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.badge-item {
    padding-right: 5px;
    padding-bottom: 5px;
}
</style>
