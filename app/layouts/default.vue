<!-- MODIF: Default layout — wraps every page with sticky header + footer -->
<template>
  <div class="min-h-screen flex flex-col bg-cyber-bg">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
