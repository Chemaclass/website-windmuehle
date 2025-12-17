<script setup lang="ts">
defineProps<{
  title: string
  date: string
  image?: string
}>()
</script>

<template>
  <div class="blog-post">
    <div class="blog-header">
      <a href="/aktuelles/" class="blog-back">← Zurück zu Aktuelles</a>
      <span class="blog-date">{{ date }}</span>
    </div>

    <h1 class="blog-title">{{ title }}</h1>

    <img v-if="image" :src="image" :alt="title" class="blog-hero-image" />

    <div class="blog-content">
      <slot />
    </div>

    <div class="blog-footer">
      <a href="/spenden" class="blog-cta">Jetzt unterstützen →</a>
      <a href="/aktuelles/" class="blog-back-bottom">← Alle Neuigkeiten</a>
    </div>
  </div>
</template>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 6rem auto 0;
  padding: 2rem 1rem 3rem;
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.blog-back {
  color: #2563a8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.blog-back:hover {
  color: #1a4a7a;
}

.blog-date {
  color: #888;
  font-size: 0.9rem;
}

.blog-title {
  font-size: 2.2rem;
  color: #2563a8;
  margin: 0 0 1.5rem;
  line-height: 1.3;
  font-weight: 700;
}

.blog-hero-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.blog-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.blog-content :deep(p) {
  margin-bottom: 1.5rem;
}

.blog-content :deep(h2) {
  font-size: 1.5rem;
  color: #2563a8;
  margin: 2rem 0 1rem;
}

.blog-content :deep(h3) {
  font-size: 1.25rem;
  color: #2563a8;
  margin: 1.5rem 0 0.75rem;
}

.blog-content :deep(ul) {
  margin: 1rem 0 1.5rem;
  padding-left: 1.5rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
}

.blog-content :deep(img) {
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
}

.blog-content :deep(.post-images) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

.blog-content :deep(.post-images img) {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0;
}

.blog-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.blog-cta {
  display: inline-block;
  background: linear-gradient(135deg, #e8a838 0%, #d4922a 100%);
  color: #1a1a1a;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(232, 168, 56, 0.3);
}

.blog-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 168, 56, 0.4);
}

.blog-back-bottom {
  color: #2563a8;
  text-decoration: none;
  font-weight: 500;
}

.blog-back-bottom:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 1.5rem 1rem 2rem;
  }

  .blog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .blog-title {
    font-size: 1.75rem;
  }

  
  .blog-content {
    font-size: 1rem;
  }

  .blog-content :deep(.post-images) {
    grid-template-columns: 1fr;
  }

  .blog-footer {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
}
</style>
