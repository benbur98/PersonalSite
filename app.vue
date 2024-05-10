<template>
  <UContainer>
    <div class="fixed left-0 top-0 m-4">
      <InitialsIcon firstName="ben" secondName="burwood" />
    </div>

    <div class="flex flex-col items-center fixed top-1/2 right-0 transform -translate-y-1/2 mr-2 space-y-2 z-50">
      <ExternalLink icon="uil:github" link="https://www.github.com/benbur98" />
      <ExternalLink icon="uil:linkedin" link="https://www.linkedin.com/in/ben-burwood/" />
      <ExternalLink icon="uil:envelope" link="mailto: ben.burwood@outlook.com" />
    </div>

    <div class="flex justify-center mt-32 mb-12">
      <Profile name="ben burwood" subtitle="software engineer" image_src="https://avatars.githubusercontent.com/u/77846694?v=4" />
    </div>

    <UDivider label="Portfolio" class="my-10" />

    <div v-for="item in showcaseItems" class="my-4 p-2">
      <ShowcaseItem :image="item.image" :title="item.title" :link="item.link" :description="item.description" :technologies="item.technologies" />
    </div>

    <UDivider label="" class="my-10" />

    <UAccordion :items="sectionDetail" class="mx-auto w-full md:w-1/2 mb-24">
      <template #item="{ item }">
        {{ item.content }}
        <BadgeBox :items="item.technologies" class="mt-2 uppercase" />
      </template>
    </UAccordion>

    <CopyrightText year="2024" owner="Ben Burwood" />
    <LightDarkModeToggle />
  </UContainer>
</template>

<script setup>
import sectionDetail from '~/data/section_detail.json';
import showcaseItems from '~/data/showcase_items.json';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

body {
  font-family: 'JetBrains Mono', monospace;
}

.light {
  background: linear-gradient(to bottom, #317fc8 250px, rgb(245, 245, 245) 250px);
  color: #636362;
}

.dark {
  background: linear-gradient(to bottom, #181e22 250px, transparent 250px);
  color: #f7fafc;
}
</style>
