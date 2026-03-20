<script setup lang="ts">
// MODIF: AboutSection — split layout: bio text (left) + abstract SVG code panel (right) (Traduit en FR)
const highlights = [
  { icon: 'mdi:school', label: 'BUT Informatique · Université Paris-Saclay (Orsay)', color: 'text-cyan-400' },
  { icon: 'mdi:shield-lock', label: 'Spécialité : Cybersécurité · Systèmes · Réseaux', color: 'text-emerald-400' },
  { icon: 'mdi:code-braces', label: 'Cœur : Java · C ·Python · React · Nuxt · SQL', color: 'text-blue-400' },
]
</script>

<template>
  <section id="about" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <div class="mb-16">
        <p class="section-label">
          <span class="text-emerald-400">//</span> 01. à_propos
        </p>
        <h2 class="section-title uppercase">un peu à propos de moi</h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
      </div>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="space-y-6">
          <p class="text-slate-300 text-base leading-relaxed">
            Je suis <span class="text-cyan-400 font-semibold">étudiant en 2ème année d'informatique</span> à l'Université Paris-Saclay
            (IUT d'Orsay), en préparation d'un <em>Bachelor Universitaire de Technologie</em>
            avec une spécialisation en <span class="text-emerald-400 font-semibold">Cybersécurité, Systèmes et Réseaux</span>.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            Je suis toujours intéressé par de la programmation dans une optique de sécurité que ce soit en interne ou via internet.
            Mes activités vont de l'écriture de services sécurisés à l'architecture de front-ends réactifs avec Nuxt et React.
            Je suis convaincu qu'un bon logiciel doit être : rapide, sécurisé et fiable en tout temps.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            En dehors des cours, j'aime faire de nombreux projets divers et varié de développement, que ce soit logiciel,
            web, ou jeux vidéo.
            J'ai aussi une forte présence du sport dans ma vie notament le roller hockey et la course à pied qui me permettent
            de me changer les idées pour toujours développer des outils nécessaire et performant.
          </p>

          <ul class="space-y-3 pt-2">
            <li
              v-for="h in highlights"
              :key="h.label"
              class="flex items-center gap-3 text-sm font-mono text-slate-300"
            >
              <Icon :name="h.icon" class="w-5 h-5 shrink-0" :class="h.color" />
              {{ h.label }}
            </li>
          </ul>

          <a href="#projects" class="btn-ghost group mt-2 w-fit">
            Voir mes projets
            <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-2xl" />

          <div class="relative glass-card rounded-2xl p-6 font-mono text-sm leading-7 overflow-hidden select-none">
            <div class="bg-fuchsia-700 flex items-center justify-between px-4 py-2 border-b border-black/20 rounded-lg">
              <div class="flex items-center gap-2">
                <Icon name="mdi:terminal" class="w-5 h-5 text-slate-300" />
                <span class="text-s text-slate-300 font-medium">remy@ubuntu: ~/remy/profil.java</span>
              </div>
              
              <div class="flex items-center gap-4">
                <button class="bg-purple-900 hover:bg-purple-700 text-white rounded-md w-6 h-6 transition-colors">
                  <Icon name="mdi:minus" class="w-4 h-4 text-slate-300" />
                </button>
                <button class="bg-purple-900 hover:bg-purple-700 text-white rounded-md w-6 h-6 transition-colors">
                  <Icon name="mdi:window-maximize" class="w-3.5 h-3.5 text-slate-300" />
                </button>
                <button class="bg-purple-900 hover:bg-red-700 text-white rounded-md w-6 h-6 transition-colors">
                  <Icon name="mdi:close" class="w-3.5 h-3.5 text-slate-300" />
                </button>
              </div>
            </div>

            <div class="overflow-x-auto">
              <pre class="text-left whitespace-pre"><code><span class="text-blue-400">package</span> <span class="text-slate-300">main;</span>

<span class="text-blue-400">type</span> <span class="text-cyan-400">Developpeur</span> <span class="text-blue-400">struct</span>
<span class="text-slate-400">{</span>
    <span class="text-emerald-400">string</span>   <span class="text-slate-300">Nom</span>
    <span class="text-emerald-400">string</span>   <span class="text-slate-300">Universite</span>
    <span class="text-emerald-400">int</span>      <span class="text-slate-300">Annee</span>
    <span class="text-emerald-400">string</span><span class="text-blue-400">[]</span> <span class="text-slate-300">Interets</span>
<span class="text-slate-400">}</span>

<span class="text-blue-400">var</span> <span class="text-slate-300">moi</span> = <span class="text-cyan-400">Developpeur</span>
<span class="text-slate-400">{</span>
    <span class="text-slate-300">Nom</span><span class="text-slate-400">:</span>        <span class="text-yellow-300">"Rémy STINUS"</span>,
    <span class="text-slate-300">Universite</span><span class="text-slate-400">:</span> <span class="text-yellow-300">"IUT d'Orsay"</span>,
    <span class="text-slate-300">Annee</span><span class="text-slate-400">:</span>      <span class="text-purple-400">2</span>,
    <span class="text-slate-300">Interets</span><span class="text-slate-400">:</span>  <span class="text-blue-400">[]</span><span class="text-emerald-400">string</span><span class="text-slate-400">{</span>
        <span class="text-yellow-300">"Cybersécurité"</span>,
        <span class="text-yellow-300">"Systèmes"</span>,
        <span class="text-yellow-300">"Open-Source"</span>,
    <span class="text-slate-400">},</span>
<span class="text-slate-400">}</span></code></pre>
            </div>

            <span class="inline-block w-2 h-4 bg-cyan-400 animate-typing-cursor ml-1 -mb-1" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>