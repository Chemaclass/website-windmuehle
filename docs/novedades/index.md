---
layout: page
title: Noticias
---

<script setup>
import { useT } from '../.vitepress/i18n'
const t = useT()
const posts = t('newsPosts')
</script>

<div class="news-index">
  <div class="news-index-header">
    <h1>{{ t('blog.indexTitle') }}</h1>
    <p>{{ t('blog.indexSubtitle') }}</p>
  </div>

  <div class="news-list">
    <a v-for="post in posts" :key="post.link" :href="post.link" class="news-list-item">
      <img :src="post.image" :alt="post.title" />
      <div class="news-list-content">
        <span class="news-list-date">{{ post.date }}</span>
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <span class="news-list-link">{{ t('blog.readMore') }}</span>
      </div>
    </a>
  </div>
</div>

<style>
.news-index {
  max-width: 900px;
  margin: 6rem auto 0;
  padding: 2rem 1rem 3rem;
}

.news-index-header {
  text-align: center;
  margin-bottom: 3rem;
}

.news-index-header h1 {
  font-size: 2.5rem;
  color: #2563a8;
  margin: 0 0 1rem;
}

.news-index-header p {
  font-size: 1.15rem;
  color: #666;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-list-item {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  transition: all 0.3s ease;
}

.news-list-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.news-list-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
  border-radius: 0;
}

.news-list-content {
  padding: 1.5rem 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-list-date {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.news-list-content h2 {
  font-size: 1.4rem;
  color: #2563a8;
  margin: 0 0 0.75rem;
  line-height: 1.3;
  border: none;
  padding: 0;
}

.news-list-content p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1rem;
}

.news-list-link {
  color: #e8a838;
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .news-index {
    padding: 1.5rem 1rem 2rem;
  }

  .news-index-header h1 {
    font-size: 2rem;
  }

  .news-list-item {
    grid-template-columns: 1fr;
  }

  .news-list-item img {
    height: 180px;
  }

  .news-list-content {
    padding: 1.25rem;
  }

  .news-list-content h2 {
    font-size: 1.2rem;
  }
}
</style>
