<template>
  <div class="banner">
    <div class="banner-content">
      <span v-for="i in 10">{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>

<style scoped>
.banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  overflow: hidden;
}

.banner-content {
  white-space: nowrap;
  animation: scroll 25s linear infinite;
}

span {
  font-size: 2rem;
  margin-right: 50px;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
