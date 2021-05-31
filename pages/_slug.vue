<template>
  <div>
    <Header :data="{ level: '1', text: page.title }" />

    <component v-for="(block, index) in page.blocks" :key="index" :is="block.type" v-bind:data="block" />

    <nuxt-content :document="page" />
  </div>
</template>

<script>
import * as components from '../components'

export default {
  components,
  async asyncData({ $content, params, error }) {
    let page;
    try {
      page = await $content("pages", params.slug).fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }

    return {
      page,
    };
  },
};
</script>