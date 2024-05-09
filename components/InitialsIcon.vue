<template>
    <div class="container">
        <div class="name-container">
            <span class="initial">{{ firstInitial }}</span>
            <span class="name">{{ firstName }}</span>
        </div>
        <div class="name-container second-name">
            <span class="initial">{{ secondInitial }}</span>
            <span class="name">{{ secondName }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    firstName: String,
    secondName: String
});

const firstInitial = computed(() => props.firstName.charAt(0));
const secondInitial = computed(() => props.secondName.charAt(0));
const firstName = computed(() => props.firstName.slice(1));
const secondName = computed(() => props.secondName.slice(1));
</script>

<style scoped>
span {
    font-size: 2em;
    font-weight: bold;
    color: rgba(168, 152, 9, 0.784);
}

.container {
    display: flex;
}

.second-name {
    margin-left: 0;
    transition: margin-left 0.5s ease-in-out;
}

.container:hover .second-name {
    margin-left: 2.5em;
}

.name {
    position: absolute;
    transform: translateX(-100%);
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    transition: transform 0.5s ease-in-out, clip-path 0.5s ease-in-out;
}

.container:hover .name {
    transform: translateX(0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
