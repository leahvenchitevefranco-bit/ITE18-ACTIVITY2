<script setup lang="ts">
defineProps<{ title?: string }>()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo">
        <span class="header__mark">🎓</span>
        {{ title || 'StudentHub' }}
      </NuxtLink>
      <nav class="header__nav" aria-label="Main navigation">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="header__link">
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header { background: var(--surface); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 10; }
.header__inner {
  max-width: 1100px; margin: 0 auto; padding: .9rem 1.25rem;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: .5rem;
}
.header__logo { font-weight: 800; font-size: 1.3rem; color: var(--primary); text-decoration: none; }
.header__mark { margin-right: .25rem; }
.header__nav { display: flex; gap: .4rem; }
.header__link {
  padding: .4rem .9rem; border-radius: 999px; color: var(--text);
  text-decoration: none; font-weight: 500; transition: background .15s;
}
.header__link:hover { background: var(--bg); }
.header__link.router-link-exact-active { background: var(--primary); color: #fff; }
</style>
