# Student Information Website (Nuxt 4 + Vue 3)

A small site demonstrating reusable components.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
├── app.vue                  # Layout: AppHeader + NuxtPage + AppFooter
├── assets/css/main.css      # Global styles / design tokens
├── components/
│   ├── AppHeader.vue        # Logo + navigation
│   ├── AppFooter.vue        # Copyright info
│   ├── StudentCard.vue      # Props: name, studentId, course, yearLevel
│   ├── InfoCard.vue         # Props: title, description, icon
│   └── AppButton.vue        # Props: label, to, variant, size, disabled, type
├── composables/useStudents.ts  # Shared student data
└── pages/
    ├── index.vue            # Home
    ├── students.vue         # Directory with search
    └── about.vue            # About
```

## Reusability

- `StudentCard` is rendered with `v-for` on Home (3 cards) and Students (6 cards); no student data lives inside the component. Student cards use initials instead of profile photos.
- `InfoCard` is reused on Home and About.
- `AppButton` is reused on every page and becomes a `NuxtLink` when given a `to` prop.
- Components are auto-imported by Nuxt, so no `import` statements are needed.
