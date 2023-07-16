<script setup lang="ts">
import { useMouse } from "@vueuse/core"

const { x, y } = useMouse()
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

    <!-- I18n -->
    <AtomsLocale />

    <!-- VueUse -->
    <p>{{ x }} {{ y }}</p>

    <!-- Nuxt image -->
    <NuxtImg src="./images/salvatore-olivieri.jpg" />
  </div>
</template>

<style scoped lang="scss"></style>
