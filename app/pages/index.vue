<script setup lang="ts">
useHead({ title: 'Home | StudentHub' })

const { students } = useStudents()
const featured = students.slice(0, 3)

const highlights = [
  { icon: '🧩', title: 'Reusable Components', description: 'One StudentCard, many students. Write the markup once and feed it different props.' },
  { icon: '⚡', title: 'Built with Nuxt', description: 'File-based routing and auto-imported components keep the code short and tidy.' },
  { icon: '🎨', title: 'Clean Design', description: 'A consistent look across every page thanks to shared header, footer and cards.' }
]
</script>

<template>
  <div>
    <section class="hero">
      <h1>Welcome to StudentHub</h1>
      <p>A simple student information website that demonstrates component-based development with Nuxt and Vue.js.</p>
      <div class="hero__actions">
        <AppButton to="/students" variant="secondary" size="lg">View Students</AppButton>
        <AppButton to="/about" variant="outline" size="lg" class="hero__outline">Learn More</AppButton>
      </div>
    </section>

    <div class="grid">
      <InfoCard
        v-for="item in highlights"
        :key="item.title"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
      />
    </div>

    <div class="section-head">
      <h2>Featured Students</h2>
      <AppButton to="/students" variant="outline" size="sm">See all</AppButton>
    </div>

    <div class="grid">
      <StudentCard
        v-for="s in featured"
        :key="s.id"
        :name="s.name"
        :student-id="s.studentId"
        :course="s.course"
        :year-level="s.yearLevel"
      />
    </div>
  </div>
</template>

<style scoped>
.hero__outline { color: #fff; border-color: #fff; }
.hero__outline:hover { background: rgba(255, 255, 255, .15); }
</style>
