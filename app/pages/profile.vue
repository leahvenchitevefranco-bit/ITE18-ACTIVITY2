<script setup lang="ts">
import type { GalleryItem } from '~/types/gallery'

useSeoMeta({
  title: 'Profile | Kuring',
  description:
    'Personal information, educational background, skills, interests and hobbies of Leahvenchiteve M. Franco (Kuring).',
})

const personalInfo = [
  { label: 'Full Name', value: 'Leahvenchiteve M. Franco' },
  { label: 'Nickname', value: 'Kuring' },
  { label: 'Course', value: 'Bachelor of Science in Information Technology' },
  { label: 'Age', value: '21' },
  { label: 'Hometown', value: 'Talacogon, Agusan del Sur' },
]

const schools = [
  { level: 'Elementary', school: 'Delton View College' },
  { level: 'High School & Senior High', school: 'Zillovia National High School' },
  { level: 'College', school: 'Caraga State University - Main Campus' },
]

const skills = [
  { name: 'Communication', icon: '💬' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Problem-solving', icon: '🧩' },
  { name: 'Active Listening', icon: '👂' },
  { name: 'Organization', icon: '🗂️' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Basic Programming (C++)', icon: '⌨️' },
  { name: 'Computer Literacy', icon: '💻' },
  { name: 'Basic Photo and Video Editing', icon: '🎬' },
]

const interests = [
  'Technology and Innovation',
  'Web Development',
  'Programming',
  'Learning New Skills',
  'Problem-solving',
]

type Hobby = {
  title: string
  text: string
  size: 'pair' | 'portrait' | 'landscape'
  photos: GalleryItem[]
}

const hobbies: Hobby[] = [
  {
    title: 'Beach and Traveling',
    text: 'Visiting beaches, exploring new places, and enjoying adventures are my favorite ways to recharge. Clear water, white sand, and a good view are all I need.',
    size: 'pair',
    photos: [
      { src: '/images/beach-1.jpg', alt: 'Smiling on the shore with turquoise water and a forested island behind', width: 1638, height: 2047, caption: 'Island shores and clear blue water' },
      { src: '/images/beach-2.jpg', alt: 'Posing in shallow water on a white sand beach under a bright blue sky', width: 1638, height: 2046, caption: 'Wherever the next adventure is' },
    ],
  },
  {
    title: 'Nature and Hiking',
    text: 'Climbing green hills and chasing waterfalls remind me how good it feels to be outdoors, to slow down, and to enjoy the view after the climb.',
    size: 'pair',
    photos: [
      { src: '/images/hiking.jpg', alt: 'Standing on a grassy hilltop with a walking stick, mountains and blue sky behind', width: 1536, height: 2048, caption: 'On top of the hills' },
      { src: '/images/waterfall.jpg', alt: 'Smiling in front of a tall waterfall and a rocky cliff', width: 1536, height: 2048, caption: 'At the waterfall' },
    ],
  },
  {
    title: 'Watching Sunsets',
    text: 'I love watching sunsets. Those few minutes when the sky turns orange, pink, and purple make the whole day feel complete.',
    size: 'portrait',
    photos: [
      { src: '/images/sunset.jpg', alt: 'Taking a photo of a colorful orange and purple sunset sky', width: 1536, height: 2048, caption: 'Golden hour, every time' },
    ],
  },
  {
    title: 'Reading',
    text: 'I enjoy reading Wattpad stories. A quiet night and a good story is my idea of a perfect break.',
    size: 'portrait',
    photos: [
      { src: '/images/reading.jpg', alt: 'Holding up an open book while sitting at night', width: 1080, height: 1440, caption: 'Lost in a good story' },
    ],
  },
  {
    title: 'Playing Volleyball',
    text: 'Volleyball keeps me active and lets me enjoy the game with teammates. It is all about focus, teamwork, and having fun on the court.',
    size: 'landscape',
    photos: [
      { src: '/images/volleyball.jpg', alt: 'Standing on the court in a blue jersey during a volleyball match with spectators behind', width: 2048, height: 1365, caption: 'Game face on' },
    ],
  },
  {
    title: 'Watching Crime Scene Movies and Series',
    text: 'I love the suspense of crime scene movies and series. Piecing the clues together and guessing the twist keeps me hooked.',
    size: 'portrait',
    photos: [
      { src: '/images/crime-series.jpg', alt: 'Laptop screen showing a crime drama series ready to play', width: 736, height: 981, caption: 'Another episode, please' },
    ],
  },
]

// Static class map so Tailwind can see every class name.
const galleryWidth = {
  pair: 'max-w-lg',
  portrait: 'max-w-[15rem] sm:max-w-xs',
  landscape: 'max-w-xl',
}
</script>

<template>
  <div>
    <!-- PAGE HERO -------------------------------------------------------- -->
    <section class="overflow-hidden bg-deep px-5 pb-10 pt-10 md:px-8 md:pb-14 md:pt-14">
      <div class="mx-auto max-w-6xl">
        <p class="font-display text-[clamp(1.25rem,3vw,2rem)] font-extrabold leading-none tracking-tighter text-butter">
          get to know me
        </p>
        <div class="relative">
          <h1
            class="font-display text-[clamp(3rem,12vw,8rem)] font-black leading-[0.9] tracking-tighter text-ember"
          >
            profile
          </h1>
          <p
            class="pointer-events-none absolute bottom-[4%] right-[2%] -rotate-6 font-script text-[clamp(2.25rem,7vw,5rem)] leading-none text-butter drop-shadow-[0_2px_0_rgba(50,26,21,0.35)]"
          >
            Kuring
          </p>
        </div>
      </div>
    </section>

    <!-- A + B. PERSONAL INFORMATION and EDUCATIONAL BACKGROUND (one section) -->
    <section class="bg-butter px-5 py-14 text-ink md:px-8 md:py-20" aria-labelledby="about-heading">
      <div class="mx-auto max-w-6xl">
        <SectionTitle id="about-heading" eyebrow="Personal information and education" title="about me" tone="light" />

        <div class="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <!-- Personal information -->
          <div>
            <h3 class="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-ember">Personal information</h3>
            <dl class="border-t-2 border-ink/80">
              <div
                v-for="info in personalInfo"
                :key="info.label"
                class="flex flex-col gap-1 border-b border-ink/25 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt class="text-xs font-bold uppercase tracking-[0.25em] text-ember">{{ info.label }}</dt>
                <dd class="font-display text-lg font-extrabold leading-tight tracking-tight sm:text-right md:text-xl">
                  {{ info.value }}
                </dd>
              </div>
            </dl>
          </div>

          <!-- Educational background -->
          <div>
            <h3 class="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-ember">Educational background</h3>
            <div class="space-y-6">
              <article class="relative rounded-[1.75rem] bg-deep p-6 text-cream">
                <span class="absolute -bottom-2 left-10 h-4 w-4 rotate-45 bg-deep" aria-hidden="true"></span>
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-ember">Currently pursuing</p>
                <p class="mt-2 font-display text-lg font-extrabold leading-tight text-butter md:text-xl">
                  Bachelor of Science in Information Technology
                </p>
                <p class="mt-1 text-sm font-semibold">Caraga State University</p>
              </article>

              <article class="rounded-[1.75rem] bg-deep p-6 text-cream">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-ember">School history</p>
                <ul class="mt-3 divide-y divide-cream/15">
                  <li v-for="item in schools" :key="item.level" class="py-3 first:pt-0 last:pb-0">
                    <p class="text-xs font-semibold uppercase tracking-[0.15em] text-cream/60">{{ item.level }}</p>
                    <p class="mt-0.5 font-display text-base font-extrabold leading-tight text-butter md:text-lg">
                      {{ item.school }}
                    </p>
                  </li>
                </ul>
              </article>

              <article class="relative rounded-[1.75rem] bg-deep p-6 text-cream">
                <span class="absolute -bottom-2 right-10 h-4 w-4 rotate-45 bg-deep" aria-hidden="true"></span>
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-ember">What drives me</p>
                <p class="mt-2 text-sm leading-relaxed md:text-base">
                  I am interested in improving my technical knowledge and skills, particularly in programming,
                  troubleshooting, and other areas of Information Technology.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- C + D. SKILLS and INTERESTS (one section) -------------------------- -->
    <section class="bg-cream px-5 py-14 text-ink md:px-8 md:py-20" aria-labelledby="skills-heading">
      <div class="mx-auto max-w-6xl">
        <SectionTitle id="skills-heading" eyebrow="Skills and interests" title="what I bring" tone="light" />

        <div class="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <!-- Skills -->
          <div>
            <h3 class="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ember">Skills</h3>
            <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li
                v-for="skill in skills"
                :key="skill.name"
                class="flex items-center gap-3 rounded-2xl bg-deep p-3 text-butter transition duration-300 hover:-translate-y-1 hover:bg-ember hover:text-deep"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-butter text-xl"
                  aria-hidden="true"
                >
                  {{ skill.icon }}
                </span>
                <span class="font-display text-sm font-extrabold leading-tight">{{ skill.name }}</span>
              </li>
            </ul>
          </div>

          <!-- Interests -->
          <div>
            <h3 class="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ember">Interests</h3>
            <ol class="border-t-2 border-ink/80">
              <li
                v-for="(interest, i) in interests"
                :key="interest"
                class="group flex items-baseline gap-4 border-b border-ink/25 py-3 transition-all duration-300 hover:bg-ember hover:px-3"
              >
                <span class="font-display text-sm font-extrabold text-ember transition-colors group-hover:text-deep">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <span class="font-display text-lg font-black leading-tight tracking-tight md:text-xl">
                  {{ interest }}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- E. HOBBIES AND PERSONAL PHOTO GALLERY (unchanged content) ---------- -->
    <section class="bg-deep px-5 py-14 md:px-8 md:py-20" aria-labelledby="hobbies-heading">
      <div class="mx-auto max-w-6xl">
        <SectionTitle id="hobbies-heading" eyebrow="Hobbies and photo gallery" title="what I love doing" />

        <div class="space-y-14 md:space-y-20">
          <article
            v-for="(hobby, i) in hobbies"
            :key="hobby.title"
            class="grid items-center gap-6 md:grid-cols-12 md:gap-10"
          >
            <div class="md:col-span-5" :class="i % 2 ? 'md:order-2' : 'md:order-1'">
              <p class="font-display text-5xl font-black leading-none text-butter/25 md:text-6xl" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </p>
              <h3 class="mt-2 font-display text-2xl font-black leading-[1] tracking-tight text-ember md:text-3xl">
                {{ hobby.title }}
              </h3>
              <p class="mt-3 max-w-md text-base leading-relaxed text-cream/85">{{ hobby.text }}</p>
            </div>

            <div
              class="md:col-span-7"
              :class="[i % 2 ? 'md:order-1' : 'md:order-2', i % 2 ? 'md:justify-self-start' : 'md:justify-self-end', 'w-full', galleryWidth[hobby.size]]"
            >
              <PhotoGallery :items="hobby.photos" layout="grid" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BACK TO HOMEPAGE ------------------------------------------------------ -->
    <section class="bg-choc px-5 py-12 text-center md:px-8 md:py-16">
      <p class="font-script text-4xl leading-none text-butter md:text-5xl">That's me!</p>
      <p class="mx-auto mt-3 max-w-md text-cream/80">Thanks for getting to know Kuring.</p>
      <NuxtLink to="/" class="btn-pill btn-butter mt-7">
        <span aria-hidden="true">&larr;</span>
        Back to Homepage
      </NuxtLink>
    </section>
  </div>
</template>
