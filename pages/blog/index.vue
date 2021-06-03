<template>
    <div>
        <nuxt-content :document="page" />

        <ul>
            <li v-for="post of posts" :key="post.slug">
                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
import * as components from '../../components'

export default {
  components,
  async asyncData({ $content, error }) {
    let page;
    try {
      page = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }

    let posts = await $content("posts")
      .only(['title', 'date', 'summary', 'slug'])
      .sortBy('date', 'desc')
      .fetch();

    return {
      page,
      posts
    };
  },
};
</script>