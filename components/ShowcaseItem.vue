<template>
    <a :href="link">
        <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-gray-50 dark:bg-gray-900">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48"
                        :src=image alt="Project Demo Image" />
                </div>
                <div class="p-8">
                    <p class="block text-lg leading-tight font-medium text-black dark:text-white hover:underline">
                        {{ title }}
                    </p>
                    <p class="mt-2 text-slate-500">
                        {{ description }}
                    </p>
                    <div class="mt-2 uppercase tracking-wide text-sm font-semibold">
                        <BadgeBox :badges="technologies" />
                    </div>
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
