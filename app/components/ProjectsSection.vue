<script setup lang="ts">
import { projects } from '~/assets/data/recentProjects'
</script>

<template>
  <section id="projects" class="py-24 bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-sm font-mono tracking-wider text-slate-500 mb-2">
          <span class="text-emerald-400">//</span> 03. projets
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Projets <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Mis en Avant</span>
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        
        <div class="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="https://github.com/rstinus/?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-cyber group text-xs sm:text-sm px-4 py-2"
          >
            <Icon name="mdi:github" class="w-4 h-4" />
            GitHub
            <Icon name="mdi:arrow-top-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <NuxtLink
            to="/project"
            class="btn-ghost group text-xs sm:text-sm px-4 py-2"
          >
            <Icon name="mdi:view-grid" class="w-4 h-4 text-cyan-400" />
            Voir tous mes projets
            <Icon name="mdi:arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[300px] flex"
        >
          <ProjectCard
            :project="project"
            class="w-full flex-1"
          />
        </div>
      </div>

    </div>
  </section>
</template>