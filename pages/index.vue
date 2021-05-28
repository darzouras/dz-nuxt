<template>
  <div class="bg-green-25 text-purple-100 dark:bg-purple-100 dark:text-green-25">
    <h1>Hello world</h1>
    <p>test</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>