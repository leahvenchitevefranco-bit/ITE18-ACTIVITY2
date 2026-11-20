<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  to?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  label: '',
  to: '',
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button'
})

// Render a <NuxtLink> when `to` is given, otherwise a real <button>.
const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="to || undefined"
    :type="to ? undefined : type"
    :disabled="to ? undefined : disabled"
    :class="['btn', `btn--${variant}`, `btn--${size}`, { 'btn--disabled': disabled }]"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 999px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
}
.btn:hover:not(.btn--disabled) { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0, 0, 0, .15); }
.btn--sm { padding: .35rem .9rem; font-size: .85rem; }
.btn--md { padding: .6rem 1.4rem; font-size: .95rem; }
.btn--lg { padding: .85rem 2rem; font-size: 1.05rem; }

.btn--primary { background: var(--primary); color: #fff; }
.btn--primary:hover:not(.btn--disabled) { background: var(--primary-dark); }
.btn--secondary { background: #fff; color: var(--primary); }
.btn--outline { background: transparent; color: var(--primary); border-color: var(--primary); }

.btn--disabled { opacity: .5; cursor: not-allowed; pointer-events: none; }
</style>
