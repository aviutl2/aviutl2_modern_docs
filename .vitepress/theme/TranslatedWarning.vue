<script setup lang="ts">
import { VPLink } from "vitepress/theme";
import {onMounted, onUnmounted} from "vue";

const emit = defineEmits<{
  dismiss: [];
}>();

onMounted(() => {
  const rootElement = document.documentElement;
  rootElement.dataset.translatedWarningVisible = "true";
});
onUnmounted(() => {
  const rootElement = document.documentElement;
  delete rootElement.dataset.translatedWarningVisible;
});
</script>

<template>
  <header class="translation-header">
    <p>
      The translation is not well reviewed. Please check
      <VPLink href="/en/about">About</VPLink> for more information.
    </p>

    <button class="dismiss" @click="emit('dismiss')">×</button>
  </header>
</template>

<style scoped lang="css">
.translation-header {
  position: fixed;
  top: 0;
  background: #c10015;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  height: 3rem;
  gap: 0.5rem;

  & a {
    color: white;
    text-decoration: underline;
  }

  z-index: 999;
}
</style>

<style>
:root[data-translated-warning-visible] {
  --vp-layout-top-height: 3rem;
}

@media (max-width: 768px) {
  :root[data-translated-warning-visible] {
    --vp-layout-top-height: 0;
    .translation-header {
      display: none;
    }
  }
}
</style>
