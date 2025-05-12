<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-blue-600">
      Blog Posts
    </h1>
    <select class="border p-2 mb-4 rounded">
      <option value="">
        All Categories
      </option>
      <option>
        Tech
      </option>
      <option>
        Lifestyle
      </option>
      <option>
        News
      </option>
    </select>
    <p class="text-gray-600">
      No posts yet. Add some in Strapi!
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
