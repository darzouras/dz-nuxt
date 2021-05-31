<template>
  <div>
    <Header :data="{ level: '1', text: post.title }" />

    <ImageBlock v-if="post.header" :data="{ image: post.header }" />

    <component v-for="(block, index) in post.blocks" :key="index" :is="block.type" v-bind:data="block" />
  
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import * as components from '/components'

export default {
  components,
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("posts", params.slug).fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }

    return {
      post,
    };
  },
};
</script>