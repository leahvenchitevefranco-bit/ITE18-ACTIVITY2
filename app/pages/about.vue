<script setup lang="ts">
useHead({ title: 'About | StudentHub' })

const sections = [
  { icon: '🎯', title: 'Purpose', description: 'This site shows how component-based development avoids repeating HTML across pages.' },
  { icon: '🧱', title: 'Components Used', description: 'AppHeader, AppFooter, StudentCard, InfoCard and AppButton, all stored in app/components.' },
  { icon: '📦', title: 'Props', description: 'Each component receives its content through props, so one definition can display many different items.' },
  { icon: '🗂️', title: 'Nuxt Features', description: 'Auto-imported components, file-based routing and composables keep the project clean.' }
]
</script>

<template>
  <div>
    <h1 class="page-title">About This Website</h1>
    <p class="page-subtitle">Learn how the project is organized and why reusable components matter.</p>

    <div class="grid">
      <InfoCard
        v-for="s in sections"
        :key="s.title"
        :icon="s.icon"
        :title="s.title"
        :description="s.description"
      />
    </div>

    <div class="section-head">
      <h2>Ready to explore?</h2>
      <AppButton to="/students">Browse Students</AppButton>
    </div>
  </div>
</template>
