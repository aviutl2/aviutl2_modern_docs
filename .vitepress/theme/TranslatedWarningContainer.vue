<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import TranslatedWarning from "./TranslatedWarning.vue";

const isTranslated = ref(false);
const dismissed = ref(false);
let observer: MutationObserver | null = null;
onMounted(() => {
  const rootElement = document.documentElement;
  observer = new MutationObserver(() => {
    const langAttribute = rootElement.getAttribute("lang");
    console.log("lang attribute changed:", langAttribute);
    isTranslated.value = langAttribute !== "ja";
  });
  observer.observe(rootElement, {
    attributes: true,
    attributeFilter: ["lang"],
  });

  dismissed.value =
    localStorage.getItem("translatedWarningDismissed") === "true";
});
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
watch(dismissed, (newValue) => {
  localStorage.setItem("translatedWarningDismissed", newValue.toString());
});
</script>
<template>
  <TranslatedWarning
    v-if="isTranslated && !dismissed"
    @dismiss="dismissed = true"
  />
</template>
