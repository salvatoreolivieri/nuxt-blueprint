<script setup lang="ts">
import { useMouse } from "@vueuse/core"
import { useSampleStore } from "@/stores/sampleStore"
import { storeToRefs } from "pinia"

const { x, y } = useMouse()
const { $hello } = useNuxtApp()
const { locale, setLocale } = useI18n()

const store = useSampleStore()
const { count } = storeToRefs(store)
const { increment } = store

const changeLanguage = () => {
  locale.value === "it" ? setLocale("en") : setLocale("it")
}

const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <div>
    <h1>HomePage (index)</h1>

    <!-- Markdown -->
    <AtomsMarkdown content="This is a **markdown** *text*" />

    <!-- Dark Mode -->
    <UButton
      label="Toogle Dark Mode"
      @click="
        setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
      "
      class="mr-4"
    />

    <!-- Locale -->
    <UButton label="Toogle site language" @click.prevent="changeLanguage" />
    <span> current locale is: {{ locale }} </span>

    <!-- Store -->
    <p>This come from a store:</p>
    <p>
      {{ count }}
      <UButton label="Increment" @click.prevent="increment" />
    </p>

    <!-- Icon -->
    <Icon name="uil:github" color="black" />

    <!-- VueUse Utils -->
    <p>{{ x }} {{ y }}</p>

    <!-- Custom Plugin -->
    <p>
      {{ $hello("custom message") }}
    </p>

    <!-- Nuxt image -->
    <NuxtImg src="./images/sample.jpg" />
  </div>
</template>
