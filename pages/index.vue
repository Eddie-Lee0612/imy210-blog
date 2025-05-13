<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-blue-600">Blog Posts</h1>
    <select v-model="selectedCategory" class="border p-2 mb-4 rounded">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <div v-if="posts.length">
      <div v-for="post in filteredPosts" :key="post.id" class="mb-4">
        <h2 class="text-xl font-semibold">{{ post.attributes.title }}</h2>
        <p class="text-gray-600">{{ post.attributes.snippet }}</p>
      </div>
    </div>
    <p v-else class="text-gray-600">No posts yet. Add some in Strapi!</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      posts: [],
      selectedCategory: '',
      categories: ['Tech', 'Lifestyle', 'News']
    }
  },
  computed: {
    filteredPosts() {
      if (!this.selectedCategory) return this.posts
      return this.posts.filter(post => post.attributes.category === this.selectedCategory)
    }
  },
  async created() {
    try {
      const response = await fetch('http://localhost:1337/api/blog-posts')
      const { data } = await response.json()
      this.posts = data
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
}
</script>
