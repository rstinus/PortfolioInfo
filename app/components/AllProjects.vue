<script setup lang="ts">
import { projects } from '~/assets/data/projects'
</script>

<template>
  <!-- MODIF: Application du fond et de la hauteur minimale pour couvrir tout l'écran -->
  <section id="all-projects" class="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
    <!-- MODIF: Ajout du dégradé radial lumineux identique aux autres sections -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- MODIF: En-tête de section entièrement centré -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-sm font-mono tracking-wider text-slate-500 mb-2">
          <span class="text-emerald-400">//</span> archives_projets
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight uppercase">
          Mes <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">différents projets</span>
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        
        <!-- MODIF: Boutons d'actions alignés et stylisés sous le titre -->
        <div class="flex flex-wrap items-center justify-center gap-4 mt-4">
          <!-- Bouton Retour Accueil / Projet mis en avant -->
          <NuxtLink 
            to="/#projects"
            class="btn-cyber group text-xs sm:text-sm px-4 py-2"
          >
            <Icon name="mdi:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Retour projet mis en avant
          </NuxtLink>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/rstinus/?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-ghost group text-xs sm:text-sm px-4 py-2"
          >
            <Icon name="mdi:github" class="w-4 h-4" />
            Tous les projets sur GitHub
            <Icon name="mdi:arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <!-- MODIF: Grille adaptative sur plusieurs colonnes pour une meilleure lisibilité visuelle -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AllProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>