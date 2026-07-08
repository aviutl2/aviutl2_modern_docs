<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  lang: Record<string, Record<string, string>>;
  scope: string;
  text: string;
}>();
</script>

<template>{{ props.lang[props.scope][props.text].trim() }}</template>
