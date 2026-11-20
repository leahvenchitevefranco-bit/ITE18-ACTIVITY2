<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-butter/10 bg-deep/90 backdrop-blur">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8" aria-label="Main navigation">
      <NuxtLink to="/" class="flex items-baseline gap-3" aria-label="Leahvenchiteve M. Franco, go to homepage">
        <span class="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-butter sm:text-base">
          Leahvenchiteve M. Franco
        </span>
      </NuxtLink>

      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-full px-4 py-2 font-display text-sm font-bold text-butter transition hover:bg-butter/10 sm:px-5"
            exact-active-class="!bg-ember !text-deep"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
