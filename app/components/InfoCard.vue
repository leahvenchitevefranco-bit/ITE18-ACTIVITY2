<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <section class="info">
    <div v-if="icon" class="info__icon">{{ icon }}</div>
    <h3 class="info__title">{{ title }}</h3>
    <p class="info__text">{{ description }}</p>
  </section>
</template>

<style scoped>
.info {
  background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow);
  padding: 1.5rem; border-top: 4px solid var(--primary);
}
.info__icon { font-size: 1.8rem; margin-bottom: .5rem; }
.info__title { margin: 0 0 .4rem; font-size: 1.1rem; }
.info__text { margin: 0; color: var(--muted); font-size: .95rem; }
</style>
