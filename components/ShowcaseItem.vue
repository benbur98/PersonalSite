<template>
    <a :href="link">
        <div class="card">
            <!-- <img :src="image" alt="Showcase Image" class="card-image" /> -->
            <div class="card-bottom">
                <h2 class="card-title">{{ title }}</h2>
                <div class="card-description">{{ description }}</div>
                <BadgeBox :badges="technologies" />
            </div>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String,
    link: String,
    technologies: Array,
});
</script>

<style scoped>
.card {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: cadetblue;
}

.card-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    margin: 0;
    padding: 10px;
}

.card-title {
    font-size: large;
}

.card-description {
    margin-top: 10px;
    margin-bottom: 10px;
}

.card-bottom {
    transform: translateY(70%);
    transition: transform 0.5s ease-in-out;
}

.card:hover .card-bottom {
    transform: translateY(0);
}
</style>
