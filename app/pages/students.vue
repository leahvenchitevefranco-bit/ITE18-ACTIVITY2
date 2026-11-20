<script setup lang="ts">
useHead({ title: 'Students | StudentHub' })

const { students } = useStudents()
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return students
  return students.filter(s =>
    [s.name, s.studentId, s.course, s.yearLevel].some(v => v.toLowerCase().includes(q))
  )
})
</script>

<template>
  <div>
    <h1 class="page-title">Student Directory</h1>
    <p class="page-subtitle">{{ filtered.length }} of {{ students.length }} students shown</p>

    <div class="search">
      <input v-model="query" type="search" placeholder="Search by name, ID, course or year…" aria-label="Search students" />
      <AppButton v-if="query" variant="outline" size="sm" @click="query = ''">Clear</AppButton>
    </div>

    <div v-if="filtered.length" class="grid">
      <StudentCard
        v-for="s in filtered"
        :key="s.id"
        :name="s.name"
        :student-id="s.studentId"
        :course="s.course"
        :year-level="s.yearLevel"
      />
    </div>
    <p v-else class="empty">No students match “{{ query }}”.</p>
  </div>
</template>

<style scoped>
.search { display: flex; gap: .75rem; align-items: center; margin-bottom: 1.5rem; }
.search input {
  flex: 1; padding: .7rem 1rem; border: 1px solid var(--border); border-radius: 999px;
  font: inherit; background: var(--surface);
}
.search input:focus { outline: 2px solid var(--primary); border-color: transparent; }
.empty { text-align: center; color: var(--muted); padding: 3rem 0; }
</style>
