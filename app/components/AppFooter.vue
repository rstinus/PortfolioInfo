<script setup lang="ts">
// MODIF: AppFooter — minimal footer with social links (Traduit en FR)
const year = new Date().getFullYear()

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/remystinus',
    icon: 'mdi:linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/remystinus',
    icon: 'mdi:github',
  },
  {
    label: 'Email',
    href: 'mailto:remy.stinus@example.com',
    icon: 'mdi:email-outline',
  },
]
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

      <p class="text-sm text-slate-500 font-mono">
        &copy; {{ year }} Rémy STINUS — Tous droits réservés.
      </p>

      <div class="flex items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
        >
          <Icon :name="social.icon" class="w-5 h-5" />
        </a>
      </div>

    </div>
  </footer>
</template>