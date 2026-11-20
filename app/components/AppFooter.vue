<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__brand">🎓 StudentHub</p>
      <p>A Nuxt &amp; Vue.js demo of reusable, component-based development.</p>
      <p class="footer__copy">&copy; {{ year }} StudentHub. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--accent); color: var(--bg); text-align: center; margin-top: auto; }
.footer__inner { max-width: 1100px; margin: 0 auto; padding: 2rem 1.25rem; }
.footer p { margin: .2rem 0; font-size: .9rem; }
.footer__brand { color: #fff; font-weight: 700; font-size: 1.1rem !important; }
.footer__copy { opacity: .7; }
</style>
