<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-blue-600">Search Posts</h1>
      <nav class="mb-4">
        <nuxt-link to="/" class="text-blue-500 hover:underline">Back to Home</nuxt-link>
      </nav>
      <input
        v-model="searchQuery"
        class="border p-2 mb-4 rounded w-full"
        placeholder="Search by title or author"
      />
      <div v-if="filteredPosts.length">
        <div v-for="post in filteredPosts" :key="post.id" class="mb-4">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-gray-600">{{ post.snippet }}</p>
        </div>
      </div>
      <p v-else class="text-gray-600">No posts match your search.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    data() {
      return {
        posts: [],
        searchQuery: ''
      }
    },
    computed: {
      filteredPosts() {
        if (!this.searchQuery) return this.posts
        const query = this.searchQuery.toLowerCase()
        return this.posts.filter(post =>
          (post.title.toLowerCase().includes(query) ||
           post.author.toLowerCase().includes(query))
        )
      }
    },
    async created() {
      try {
        const response = await fetch('http://127.0.0.1:1337/api/blog-posts')
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
        const result = await response.json()
        console.log('Search API Response:', result)
        this.posts = result.data || []
      } catch (error) {
        console.error('Error fetching posts:', error)
        this.posts = []
      }
    }
  }
  </script>