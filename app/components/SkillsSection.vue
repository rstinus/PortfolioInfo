<script setup lang="ts">
// MODIF: SkillsSection — animated skill bars per category, triggered by IntersectionObserver
import { skillCategories } from '~/assets/data/skills'

const sectionRef = ref<HTMLElement | null>(null)
const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animated.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="skills" ref="sectionRef" class="py-24 px-4 bg-slate-900/30">
    <div class="max-w-6xl mx-auto">

      <!-- Section header -->
      <div class="mb-16">
        <p class="section-label">
          <span class="text-emerald-400">//</span> 02. skill_matrix
        </p>
        <h2 class="section-title">Technical Skills</h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
      </div>

      <!-- Category grid -->
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.label"
          class="glass-card rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300"
        >
          <!-- Category header -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Icon :name="category.icon" class="w-5 h-5 text-cyan-400" />
            </div>
            <h3 class="text-sm font-semibold text-slate-200 leading-tight">{{ category.label }}</h3>
          </div>

          <!-- Skills list -->
          <ul class="space-y-4">
            <li v-for="skill in category.skills" :key="skill.name">
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                  <Icon :name="skill.icon" class="w-4 h-4 shrink-0" />
                  <span class="text-sm font-mono text-slate-300">{{ skill.name }}</span>
                </div>
                <span class="text-xs font-mono text-slate-500">{{ skill.level }}%</span>
              </div>
              <!-- Progress bar -->
              <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
                  :style="{ width: animated ? `${skill.level}%` : '0%' }"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
