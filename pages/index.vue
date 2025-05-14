<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-blue-600">Blog Posts</h1>
    <nav class="mb-4">
      <nuxt-link to="/search" class="text-blue-500 hover:underline">Go to Search</nuxt-link>
    </nav>
    <select v-model="selectedCategory" class="border p-2 mb-4 rounded">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <div v-if="posts.length">
      <div v-for="post in filteredPosts" :key="post.id" class="mb-4">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-500 italic">By {{ post.author }}</p>
        <div class="text-gray-600">
          <!-- Display content preview -->
          <p v-if="post.content && post.content[0] && post.content[0].children">
            {{ post.content[0].children[0].text.slice(0, 100) }}...
          </p>
        </div>
        <p class="text-gray-600">{{ post.snippet }}</p>
      </div>
    </div>
    <p v-else class="text-gray-600">No posts available. Check Strapi backend.</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      posts: [],
      selectedCategory: '',
      categories: ['Tech', 'Lifestyle', 'News', 'Health']
    }
  },
  computed: {
    filteredPosts() {
      if (!this.selectedCategory) return this.posts
      return this.posts.filter(post => post.category === this.selectedCategory)
    }
  },
  async created() {
    try {
      const response = await fetch('http://127.0.0.1:1337/api/blog-posts')
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const result = await response.json()
      console.log('API Response:', result)
      this.posts = result.data || []
    } catch (error) {
      console.error('Error fetching posts:', error)
      this.posts = []
    }
  }
}
</script>
