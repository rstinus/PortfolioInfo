<script setup lang="ts">
const highlights = [
  { icon: 'mdi:school', label: 'BUT Informatique · Université Paris-Saclay (Orsay)', color: 'text-cyan-400' },
  { icon: 'mdi:shield-lock', label: 'Spécialité : Cybersécurité · Systèmes · Réseaux', color: 'text-emerald-400' },
  { icon: 'mdi:code-braces', label: 'Cœur : Java · C ·Python · React · Nuxt · SQL', color: 'text-blue-400' },
]
</script>

<template>
  <!-- MODIF: Couleur de fond et style identique à SkillsSection -->
  <section id="about" class="py-24 bg-slate-950 relative overflow-hidden">
    <!-- MODIF: Effet radial lumineux hérité de SkillsSection -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)]"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-sm font-mono tracking-wider text-slate-500 mb-2">
          <span class="text-emerald-400">//</span> 01. à_propos
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Un peu <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">à propos de moi</span>
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
      </div>

      <!-- MODIF: Retour à la disposition côte à côte (grid) avec alignement centré verticalement (items-center) -->
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Colonne de Gauche : Textes et points clés -->
        <div class="space-y-6">
          <p class="text-slate-300 text-base leading-relaxed">
            Je suis <span class="text-cyan-400 font-semibold">étudiant en 2ème année d'informatique</span> à l'Université Paris-Saclay
            (IUT d'Orsay), en préparation d'un <em>Bachelor Universitaire de Technologie</em>
            avec une spécialisation en <span class="text-emerald-400 font-semibold">Cybersécurité, Systèmes et Réseaux</span>.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            Je suis toujours intéressé par la programmation dans une optique de sécurité que ce soit en interne ou via internet.
            Mes activités vont de l'écriture de services sécurisés à l'architecture de front-ends réactifs avec Nuxt et React.
            Je suis convaincu qu'un bon logiciel doit être : rapide, sécurisé et fiable en tout temps.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            En dehors des cours, j'aime faire de nombreux projets divers et <span class="text-cyan-400">variés</span> de développement, que ce soit logiciel,
            web, ou jeux vidéo.
            J'ai aussi une forte présence du sport dans ma vie notamment le roller hockey et la course à pied qui me permettent
            de me changer les idées pour toujours développer des outils nécessaires et performants.
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

          <a href="#projects" class="btn-ghost group text-xs sm:text-sm px-4 py-2">
            <Icon name="mdi:view-grid" class="w-4 h-4 text-cyan-400" />
            Voir mes projets
            <Icon name="mdi:arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <!-- Colonne de Droite : Faux terminal avec le style exact des cartes Skills -->
        <div class="relative">
          <div class="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-2xl" />

          <!-- MODIF: Bordures, ombres et fond flouté calqués sur SkillsSection -->
          <div class="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 font-mono text-sm leading-7 overflow-hidden select-none shadow-xl">
            
            <!-- MODIF: Entête du terminal harmonisé en ardoise sombre (bg-slate-800) -->
            <div class="bg-slate-800 flex items-center justify-between px-4 py-2 border-b border-slate-700/50 rounded-xl mb-4">
              <div class="flex items-center gap-2">
                <Icon name="mdi:terminal" class="w-5 h-5 text-cyan-400" />
                <span class="text-xs text-slate-300 font-medium">remy@ubuntu: ~/remy/profil.java</span>
              </div>
              
              <!-- Boutons système discrets -->
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                <div class="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
            </div>

            <!-- Code source Java -->
            <div class="overflow-x-auto">
              <pre class="text-left whitespace-pre"><code><span class="text-blue-400">package</span> <span class="text-slate-300">main;</span>

<span class="text-blue-400">public</span> <span class="text-cyan-400">class</span> <span class="text-blue-400">Developpeur</span>
<span class="text-slate-400">{</span>
    <span class="text-emerald-400">String</span>   <span class="text-slate-300">nom;</span>
    <span class="text-emerald-400">String</span>   <span class="text-slate-300">ecole;</span>
    <span class="text-emerald-400">int</span>      <span class="text-slate-300">annee;</span>
    <span class="text-emerald-400">String</span><span class="text-blue-400">[]</span> <span class="text-slate-300">interets;</span>

  <span class="text-blue-400">public</span> <span class="text-cyan-400">Developpeur()</span> <span class="text-slate-400">{</span>
    <span class="text-slate-300">this.nom</span>      <span class="text-slate-400">=</span> <span class="text-yellow-300">"Rémy STINUS"</span>;
    <span class="text-slate-300">this.ecole</span>    <span class="text-slate-400">=</span> <span class="text-yellow-300">"IUT d'Orsay"</span>;
    <span class="text-slate-300">this.annee</span>    <span class="text-slate-400">=</span> <span class="text-purple-400">2</span>;
    <span class="text-slate-300">this.interets</span> <span class="text-slate-300">=</span> <span class="text-slate-300">new</span> <span class="text-emerald-400">String</span><span class="text-blue-400">[]</span> <span class="text-slate-400">{</span>
        <span class="text-yellow-300">"Cybersécurité"</span>,
        <span class="text-yellow-300">"Système"</span>,
        <span class="text-yellow-300">"Développement"</span>,
    <span class="text-slate-400">};</span>
  <span class="text-slate-400">}</span>
<span class="text-slate-400">}</span></code></pre>
            </div>

            <span class="inline-block w-2 h-4 bg-cyan-400 animate-typing-cursor ml-1 -mb-1" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>