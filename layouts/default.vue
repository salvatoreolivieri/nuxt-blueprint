<template>
  <div>
    <NuxtLoadingIndicator
      :height="2"
      :duration="2000"
      :throttle="0"
      color="#3FC891"
    />
    <AppHeader />
    <NuxtPage />
    <AppFooter />

    <UNotifications />
  </div>
</template>
