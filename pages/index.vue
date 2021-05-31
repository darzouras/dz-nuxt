<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import * as components from '../components'

export default {
  components,
  async asyncData({ $content, error }) {
    let page;
    try {
      page = await $content("home").fetch();
    } catch (e) {
      error({ message: "Page not found" });
    }

    return {
      page,
    };
  },
};
</script>