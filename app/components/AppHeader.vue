<script setup lang="ts">
// MODIF: AppHeader — sticky glassmorphism navbar with logo, nav links, and CV download button (Traduit en FR)
const navLinks = [
  { label: 'À Propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
]

const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'backdrop-blur-md bg-slate-900/80 border-b border-slate-800/80 shadow-lg shadow-black/20'
      : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <a
          href="#hero"
          class="font-mono font-bold text-lg text-cyan-400 hover:text-cyan-300 transition-colors tracking-wider"
          aria-label="Retour en haut"
        >
          Rémy STINUS<span class="text-slate-500">_</span>
        </a>

        <nav class="flex items-center gap-1 sm:gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-slate-400
                   hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800/50"
          >
            {{ link.label }}
          </a>

          <a
            href="/CV.pdf"
            download
            class="btn-cyber ml-2 sm:ml-4 text-xs sm:text-sm"
            aria-label="Télécharger le CV"
          >
            <Icon name="mdi:download" class="w-4 h-4" />
            <span class="hidden sm:inline">Télécharger CV</span>
            <span class="sm:hidden">CV</span>
          </a>
        </nav>

      </div>
    </div>
  </header>
</template>