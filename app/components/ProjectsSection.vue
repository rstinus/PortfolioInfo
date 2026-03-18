<script setup lang="ts">
// MODIF: ProjectsSection — responsive project grid using ProjectCard sub-component
import { projects } from '~/assets/data/projects'
</script>

<template>
  <section id="projects" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Section header -->
      <div class="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p class="section-label">
            <span class="text-emerald-400">//</span> 03. projects
          </p>
          <h2 class="section-title">Featured Projects</h2>
          <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>
        <a
          href="https://github.com/remystinus"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost shrink-0 w-fit"
        >
          <Icon name="mdi:github" class="w-4 h-4" />
          All projects on GitHub
          <Icon name="mdi:arrow-right" class="w-3.5 h-3.5" />
        </a>
      </div>

      <!-- Projects grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>
