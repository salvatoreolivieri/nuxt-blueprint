<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <footer>
    {{ $t("app.footer") }}

    <p>
      This is a Nuxt UI component:
    </p>
    <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
  </footer>
</template>

<style scoped lang="scss"></style>
