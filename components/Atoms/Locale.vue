<script setup lang="ts">
const { locale, setLocale } = useI18n()

const changeLanguage = () => {
  locale.value === "it" ? setLocale("en") : setLocale("it")
}
</script>

<template>
  <span>
    Current Language:
    <span @click.prevent="changeLanguage" class="cursor-pointer">
      {{ locale }}
    </span>
  </span>
</template>

<style scoped lang="scss"></style>
