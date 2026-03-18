<script setup lang="ts">
// MODIF: AboutSection — split layout: bio text (left) + abstract SVG code panel (right)
const highlights = [
  { icon: 'mdi:school', label: 'BUT Informatique · Université Paris-Saclay (Orsay)', color: 'text-cyan-400' },
  { icon: 'mdi:shield-lock', label: 'Specialty: Cybersecurity · Systems · Networks', color: 'text-emerald-400' },
  { icon: 'mdi:code-braces', label: 'Core: Java · C · Go · React · Nuxt · SQL', color: 'text-blue-400' },
]
</script>

<template>
  <section id="about" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Section label -->
      <div class="mb-16">
        <p class="section-label">
          <span class="text-emerald-400">//</span> 01. about_me
        </p>
        <h2 class="section-title">A Bit About Me</h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
      </div>

      <!-- Split grid -->
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Left — Text content -->
        <div class="space-y-6">
          <p class="text-slate-300 text-base leading-relaxed">
            I'm a <span class="text-cyan-400 font-semibold">2nd-year IT student</span> at Université Paris-Saclay
            (IUT d'Orsay), pursuing a <em>Bachelor Universitaire de Technologie en Informatique</em>
            with a focus on <span class="text-emerald-400 font-semibold">Cybersecurity, Systems, and Networks</span>.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            I thrive at the intersection of low-level systems programming and modern web development —
            from writing memory-safe Go services to architecting reactive front-ends with Nuxt and React.
            I believe that great software is invisible: fast, secure, and reliable.
          </p>
          <p class="text-slate-400 text-base leading-relaxed">
            Outside of coursework I enjoy CTF competitions, contributing to open-source, and exploring
            network protocols at packet level.
          </p>

          <!-- Highlights -->
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

          <!-- CTA -->
          <a href="#projects" class="btn-ghost group mt-2 w-fit">
            See my projects
            <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <!-- Right — Abstract code-snippet SVG panel -->
        <div class="relative">
          <!-- Glow behind panel -->
          <div class="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-2xl" />

          <div class="relative glass-card rounded-2xl p-6 font-mono text-sm leading-7 overflow-hidden select-none">
            <!-- Terminal chrome -->
            <div class="flex items-center gap-1.5 mb-4">
              <span class="w-3 h-3 rounded-full bg-red-500/70" />
              <span class="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span class="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span class="ml-3 text-xs text-slate-500">~/remy/profile.go</span>
            </div>

            <!-- Fake code snippet -->
            <div class="overflow-x-auto">
              <pre class="text-left whitespace-pre"><code><span class="text-blue-400">package</span> <span class="text-slate-300">main</span>

<span class="text-blue-400">type</span> <span class="text-cyan-400">Developer</span> <span class="text-blue-400">struct</span> <span class="text-slate-400">{</span>
  <span class="text-slate-300">Name</span>       <span class="text-emerald-400">string</span>
  <span class="text-slate-300">University</span> <span class="text-emerald-400">string</span>
  <span class="text-slate-300">Year</span>       <span class="text-emerald-400">int</span>
  <span class="text-slate-300">Interests</span>  <span class="text-blue-400">[]</span><span class="text-emerald-400">string</span>
<span class="text-slate-400">}</span>

<span class="text-blue-400">var</span> <span class="text-slate-300">me</span> = <span class="text-cyan-400">Developer</span><span class="text-slate-400">{</span>
  <span class="text-slate-300">Name</span><span class="text-slate-400">:</span>       <span class="text-yellow-300">"Rémy STINUS"</span>,
  <span class="text-slate-300">University</span><span class="text-slate-400">:</span> <span class="text-yellow-300">"IUT d'Orsay"</span>,
  <span class="text-slate-300">Year</span><span class="text-slate-400">:</span>       <span class="text-purple-400">2</span>,
  <span class="text-slate-300">Interests</span><span class="text-slate-400">:</span> <span class="text-blue-400">[]</span><span class="text-emerald-400">string</span><span class="text-slate-400">{</span>
    <span class="text-yellow-300">"Cybersecurity"</span>,
    <span class="text-yellow-300">"Systems"</span>,
    <span class="text-yellow-300">"Open-Source"</span>,
  <span class="text-slate-400">},</span>
<span class="text-slate-400">}</span></code></pre>
            </div>

            <!-- Cursor blink -->
            <span class="inline-block w-2 h-4 bg-cyan-400 animate-typing-cursor ml-1 -mb-1" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
