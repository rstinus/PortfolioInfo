<script setup lang="ts">
import { projects } from '~/assets/data/projects'
</script>

<template>
  <section id="projects" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <div class="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <h2 class="section-title uppercase">Mes différents projets</h2>
          <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>
        <NuxtLink to="/">Retour accueil</NuxtLink>
        <a
          href="https://github.com/rstinus/?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost shrink-0 w-fit"
        >
          <Icon name="mdi:github" class="w-4 h-4" />
          Tous les projets sur GitHub
          <Icon name="mdi:arrow-right" class="w-3.5 h-3.5" />
        </a>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <AllProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>