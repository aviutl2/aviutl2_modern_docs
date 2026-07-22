<script setup lang="ts">
import { computed } from "vue";
import UiText from "./UiText.vue";
import lang from "./ui/en.json"

const props = defineProps<{
  scope?: string;
  text: string;
}>();
const scope = computed(() => props.scope || props.text);
</script>

<template><UiText :lang :scope :text /></template>
