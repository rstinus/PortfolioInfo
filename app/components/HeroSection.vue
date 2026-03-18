<script setup lang="ts">
// MODIF: HeroSection — full viewport hero with typing effect, headline, and tech icons row
const stackIcons = [
  { name: 'Java',    icon: 'devicon:java' },
  { name: 'C',       icon: 'devicon:c' },
  { name: 'Go',      icon: 'devicon:go' },
  { name: 'React',   icon: 'devicon:react' },
  { name: 'Nuxt',    icon: 'devicon:nuxtjs' },
  { name: 'SQL',     icon: 'devicon:postgresql' },
]

// Typing effect composable (inline for simplicity)
const phrases = [
  'Software Engineering Student.',
  'Cybersecurity Enthusiast.',
  'Systems & Networks Explorer.',
  'Open-Source Builder.',
]

const displayText = ref('')
const cursorVisible = ref(true)
let phraseIndex = 0
let charIndex = 0
let deleting = false
let timer: ReturnType<typeof setTimeout>

function tick() {
  const current = phrases[phraseIndex]
  if (!deleting) {
    displayText.value = current.substring(0, ++charIndex)
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(tick, 2000)
      return
    }
  } else {
    displayText.value = current.substring(0, --charIndex)
    if (charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }
  }
  timer = setTimeout(tick, deleting ? 45 : 80)
}

onMounted(() => {
  timer = setTimeout(tick, 500)
  // Blinking cursor
  setInterval(() => { cursorVisible.value = !cursorVisible.value }, 530)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section
    id="hero"
    class="relative flex items-center justify-center min-h-screen overflow-hidden pt-16"
  >
    <!-- Ambient gradient blobs -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
               bg-cyan-500/10 blur-[120px] animate-float"
      />
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full
               bg-blue-600/10 blur-[100px] animate-float"
        style="animation-delay: 3s"
      />
      <!-- Grid overlay -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
               linear-gradient(to right, rgba(6,182,212,1) 1px, transparent 1px);
               background-size: 60px 60px;"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">

      <!-- Pre-label -->
      <p class="section-label mb-6 animate-fade-in">
        <span class="text-emerald-400">&gt;&gt;</span> Hello World, I'm
      </p>

      <!-- Main name -->
      <h1 class="font-mono font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-50 mb-4 leading-tight">
        Rémy
        <span class="text-glow-cyan text-cyan-400">STINUS</span>
      </h1>

      <!-- Typing effect -->
      <div class="h-10 mb-8 flex items-center justify-center">
        <p class="text-lg sm:text-xl md:text-2xl text-slate-400 font-mono">
          {{ displayText }}<span
            class="text-cyan-400 font-bold transition-opacity"
            :class="cursorVisible ? 'opacity-100' : 'opacity-0'"
          >|</span>
        </p>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a href="#projects" class="btn-cyber px-7 py-3 text-base">
          <Icon name="mdi:folder-eye" class="w-5 h-5" />
          View Projects
        </a>
        <a href="#about" class="btn-ghost px-7 py-3 text-base">
          <Icon name="mdi:account-circle" class="w-5 h-5" />
          About Me
        </a>
      </div>

      <!-- Tech Stack Icons -->
      <div class="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
        <div
          v-for="tech in stackIcons"
          :key="tech.name"
          class="group flex flex-col items-center gap-1.5"
          :title="tech.name"
        >
          <div
            class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-800/80 border border-slate-700/60
                   flex items-center justify-center transition-all duration-300
                   group-hover:border-cyan-500/60 group-hover:bg-slate-800 group-hover:shadow-cyan-glow
                   group-hover:-translate-y-1"
          >
            <Icon :name="tech.icon" class="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <span class="text-[10px] sm:text-xs text-slate-500 font-mono group-hover:text-cyan-400 transition-colors">
            {{ tech.name }}
          </span>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
      <span class="text-xs font-mono">scroll</span>
      <Icon name="mdi:chevron-down" class="w-5 h-5 animate-bounce" />
    </div>
  </section>
</template>
