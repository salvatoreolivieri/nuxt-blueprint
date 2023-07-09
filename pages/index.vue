<script setup lang="ts">
const { $hello } = useNuxtApp()
</script>

<template>
  <div>
    <h1>Index</h1>

    <!-- Icon -->
    <Icon name="uil:github" color="black" />

    <!-- Plugin -->
    <p>
      {{ $hello("custom message") }}
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
