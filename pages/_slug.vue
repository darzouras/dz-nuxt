<template>
  <div>
    <h2>{{ page.title }}</h2>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let page;
    try {
      page = await $content("pages", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Page not found" });
    }

    return {
      page,
    };
  },
};
</script>