<template>
  <div class="flex min-h-screen flex-col bg-deep">
    <Navbar />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-butter/10 bg-deep px-5 py-8 md:px-8">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-cream/70 sm:flex-row sm:text-left"
      >
        <p>
          &copy; 2026 <span class="font-semibold text-butter">Leahvenchiteve M. Franco</span> &middot;
          BSIT, Caraga State University
        </p>
      </div>
    </footer>
  </div>
</template>
