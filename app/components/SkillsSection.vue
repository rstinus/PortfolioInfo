<script setup lang="ts">
// MODIF: SkillsSection — animated skill bars per category, triggered by IntersectionObserver (Traduit en FR)
import { skillCategories } from '~/assets/data/skills'

const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        animated.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
})
</script>

<template>
  <section id="competences" class="py-24 bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)]"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Mes <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Compétences</span>
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        <p class="text-slate-400 text-lg">
          Aperçu des technologies et outils que j'utilise au quotidien pour mener à bien mes projets.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.label"
          class="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] min-w-[280px] bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300 group"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-slate-800 text-cyan-400 group-hover:text-emerald-400 group-hover:bg-slate-800/80 transition-colors duration-300">
              <Icon :name="category.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-semibold text-white tracking-wide">
              {{ category.label }}
            </h3>
          </div>

          <div class="space-y-4">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="space-y-1.5"
            >
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-2 text-slate-300 font-medium">
                  <Icon :name="skill.icon" class="w-4 h-4" />
                  <span>{{ skill.name }}</span>
                </div>
                <span class="text-xs font-mono text-slate-500">{{ skill.level }}%</span>
              </div>
              
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full origin-left transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>