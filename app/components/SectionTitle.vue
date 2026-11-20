<script setup lang="ts">
// "dark" = used on a brown background, "light" = used on butter / cream backgrounds
const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    tone?: 'dark' | 'light'
  }>(),
  { eyebrow: '', tone: 'dark' },
)

const eyebrowClass = computed(() => (props.tone === 'dark' ? 'text-butter' : 'text-ember'))
const titleClass = computed(() => (props.tone === 'dark' ? 'text-ember' : 'text-ink'))
</script>

<template>
  <div class="mb-8 md:mb-10">
    <p v-if="eyebrow" class="mb-2 text-xs font-bold uppercase tracking-[0.3em]" :class="eyebrowClass">
      {{ eyebrow }}
    </p>
    <h2
      class="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tighter"
      :class="titleClass"
    >
      {{ title }}
    </h2>
  </div>
</template>
