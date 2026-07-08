<script setup lang="ts">
import { onMounted, ref } from "vue";

const versions = ref<
  {
    version: string;
    releasedAt: string;
    downloads: {
      exe: string;
      zip: string;
    };
  }[]
>([]);

onMounted(() => {
  fetch("https://api.aviutl2.jp/versions")
    .then((response) => response.json())
    .then((data) => {
      versions.value = data.versions.map((version: any) => ({
        version: version.version,
        releasedAt: new Date(version.released_at).toLocaleString(),
        downloads: {
          exe: version.downloads.exe,
          zip: version.downloads.zip,
        },
      }));
    });
});

const props = defineProps<{
  version: string;
  releasedAt: string;
  download: string;
  installer: string;
  portable: string;
}>();
</script>
<template>
  <div v-if="versions.length === 0">Loading...</div>
  <table tabindex="0" v-else>
    <thead>
      <tr>
        <th>{{ props.version }}</th>
        <th>{{ props.releasedAt }}</th>
        <th colspan="2">{{ props.download }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="version in versions" :key="version.version">
        <td>{{ version.version }}</td>
        <td>{{ version.releasedAt }}</td>
        <td>
          <a :href="version.downloads.exe" target="_blank">{{
            props.installer
          }}</a>
        </td>
        <td>
          <a :href="version.downloads.zip" target="_blank">{{
            props.portable
          }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
