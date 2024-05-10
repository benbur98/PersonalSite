<template>
    <a :href="link">
        <div class="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-lg dark:hover:shadow-gray-800">
            <div class="md:flex">
                <div class="p-8">
                    <p class="block text-lg leading-tight font-medium text-black dark:text-white hover:underline">
                        {{ title }}
                    </p>
                    <p class="mt-2 text-slate-500">
                        {{ description }}
                    </p>
                    <BadgeBox :items="technologies" class="mt-2 uppercase tracking-wide" />
                </div>
                <div class="md:shrink-0">
                    <img v-if="image" class="h-48 w-full md:h-100 md:w-48 object-contain"
                        :src=image alt="Project Demo Image" />
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    technologies: Array,
});
</script>
