<script setup lang="ts">
const props = defineProps<{
  name: string
  studentId: string
  course: string
  yearLevel: string
}>()

const initials = computed(() =>
  props.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
)
</script>

<template>
  <article class="card">
    <div class="card__avatar card__avatar--fallback">{{ initials }}</div>

    <h3 class="card__name">{{ name }}</h3>
    <p class="card__id">ID: {{ studentId }}</p>

    <dl class="card__details">
      <div><dt>Course</dt><dd>{{ course }}</dd></div>
      <div><dt>Year Level</dt><dd>{{ yearLevel }}</dd></div>
    </dl>
  </article>
</template>

<style scoped>
.card {
  background: var(--surface); border-radius: var(--radius); box-shadow: var(--shadow);
  padding: 1.5rem; text-align: center; transition: transform .2s ease;
}
.card:hover { transform: translateY(-4px); }
.card__avatar {
  width: 96px; height: 96px; border-radius: 50%; object-fit: cover;
  border: 4px solid var(--bg); margin: 0 auto .75rem; display: block;
}
.card__avatar--fallback {
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #fff; font-size: 1.8rem; font-weight: 700;
}
.card__name { margin: 0; font-size: 1.15rem; }
.card__id { margin: .1rem 0 1rem; color: var(--muted); font-size: .85rem; }
.card__details { margin: 0; display: grid; gap: .5rem; text-align: left; }
.card__details div { display: flex; justify-content: space-between; gap: 1rem; padding-top: .5rem; border-top: 1px solid var(--border); font-size: .9rem; }
.card__details dt { color: var(--muted); }
.card__details dd { margin: 0; font-weight: 600; text-align: right; }
</style>
