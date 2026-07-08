<script setup lang="ts">
import { defineProps } from "vue";
import UiText from "./UiText.vue";
import lang from "./ui/en_editor.yml";

defineProps<{
  scope: string;
  text: string;
}>();
</script>

<template><UiText :lang :scope :text /></template>
