<script setup lang="ts">
// MODIF: ProjectCard sub-component — single project card with hover glow
import type { Project } from '~/assets/data/projects'

defineProps<{ project: Project }>()

// Tag color mapping
const tagColor = (tag: string): string => {
  const map: Record<string, string> = {
    Go:    'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    Java:  'bg-orange-500/15 text-orange-300 border-orange-500/30',
    React: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    SQL:   'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    Nuxt:  'bg-green-500/15 text-green-300 border-green-500/30',
    C:     'bg-purple-500/15 text-purple-300 border-purple-500/30',
  }
  return map[tag] ?? 'bg-slate-700/50 text-slate-300 border-slate-600'
}
</script>

<template>
  <article
    class="group relative glass-card rounded-2xl overflow-hidden flex flex-col
           transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-glow hover:border-slate-700"
  >
    <!-- Card header gradient -->
    <div
      class="h-40 w-full relative overflow-hidden"
      :style="`background: linear-gradient(135deg, ${project.gradient[0]}22, ${project.gradient[1]}44);`"
    >
      <!-- Decorative lines -->
      <div class="absolute inset-0 opacity-20"
           style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                  linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px);
                  background-size: 24px 24px;" />
      <!-- Floating icon -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="w-16 h-16 rounded-xl flex items-center justify-center
                 bg-slate-900/60 backdrop-blur-sm border border-white/10
                 group-hover:scale-110 transition-transform duration-300"
          :style="`box-shadow: 0 0 30px ${project.gradient[0]}55`"
        >
          <Icon name="mdi:code-brackets" class="w-8 h-8 text-white/80" />
        </div>
      </div>
    </div>

    <!-- Card body -->
    <div class="flex flex-col flex-1 p-5 gap-3">
      <h3 class="font-semibold text-slate-100 text-base group-hover:text-cyan-400 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-sm text-slate-400 leading-relaxed flex-1">
        {{ project.description }}
      </p>

      <!-- Bottom row: tags + github -->
      <div class="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-800">
        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-[11px] font-mono px-2 py-0.5 rounded-md border"
            :class="tagColor(tag)"
          >
            {{ tag }}
          </span>
        </div>

        <!-- GitHub link -->
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="`GitHub — ${project.title}`"
          class="text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <Icon name="mdi:github" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </article>
</template>
