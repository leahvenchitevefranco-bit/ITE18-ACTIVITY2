<script setup lang="ts">
import type { GalleryItem } from '~/types/gallery'

// masonry: editorial collage with varied heights (photos keep their natural ratio)
// grid:    simple side-by-side layout, used for hobby photo groups
const props = withDefaults(
  defineProps<{
    items: GalleryItem[]
    layout?: 'masonry' | 'grid'
  }>(),
  { layout: 'masonry' },
)

const containerClass = computed(() => {
  if (props.layout === 'masonry') return 'columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4'
  return props.items.length > 1 ? 'grid grid-cols-2 items-start gap-3 md:gap-4' : 'grid grid-cols-1'
})
</script>

<template>
  <div :class="containerClass">
    <figure
      v-for="item in items"
      :key="item.src"
      class="group break-inside-avoid"
      :class="layout === 'masonry' ? 'mb-3 md:mb-4' : ''"
    >
      <div class="overflow-hidden rounded-2xl bg-choc md:rounded-3xl">
        <img
          :src="item.src"
          :alt="item.alt"
          :width="item.width"
          :height="item.height"
          loading="lazy"
          class="h-auto w-full transition duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption v-if="item.title || item.caption" class="mt-3 px-1">
        <p v-if="item.title" class="font-display text-sm font-extrabold text-butter">{{ item.title }}</p>
        <p v-if="item.caption" class="mt-0.5 text-sm leading-snug text-cream/75">{{ item.caption }}</p>
      </figcaption>
    </figure>
  </div>
</template>
