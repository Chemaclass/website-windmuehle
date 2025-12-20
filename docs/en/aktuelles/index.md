---
layout: home
title: News
---

<script setup>
import { useT } from '../../.vitepress/i18n'
const t = useT()
const posts = t('newsPosts')
</script>

<div class="news-page">
  <!-- Hero Section with Parallax -->
  <div class="news-hero">
    <div class="news-hero-content">
      <h1>{{ t('blog.indexTitle') }}</h1>
      <p>{{ t('blog.indexSubtitle') }}</p>
    </div>
  </div>

  <div class="news-wrapper">
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
</div>

<style>
.news-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.news-hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: url('/imgs/flugel-abgebaut/windmill-1.jpeg') center 8% / cover no-repeat fixed;
  padding: 6rem 1rem;
  position: relative;
  text-align: center;
}

.news-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
}

.news-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.news-hero h1 {
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.news-hero-content p {
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 0 1px 5px rgba(0,0,0,0.3);
  line-height: 1.6;
}

/* Content Wrapper */
.news-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
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
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.news-list-item * {
  text-decoration: none !important;
}

.news-list-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.news-list-item:hover .news-list-link {
  text-decoration: underline !important;
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
  .news-hero {
    padding: 4rem 1rem;
  }

  .news-hero h1 {
    font-size: 2rem;
  }

  .news-hero-content p {
    font-size: 1rem;
  }

  .news-wrapper {
    padding: 2rem 1rem 3rem;
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

@media (max-width: 480px) {
  .news-hero h1 {
    font-size: 1.75rem;
  }
}
</style>
