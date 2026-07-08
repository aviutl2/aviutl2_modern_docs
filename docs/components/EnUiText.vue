<script setup lang="ts">
import { computed } from "vue";
import UiText from "./UiText.vue";
import enEditor from "./ui/en_editor.yml";
import enEffects from "./ui/en_effects.yml";

const lang = {
  ...enEditor,
  ...enEffects,
};

const props = defineProps<{
  scope?: string;
  text: string;
}>();
const scope = computed(() => props.scope || props.text);
</script>

<template><UiText :lang :scope :text /></template>
