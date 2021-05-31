<template>
    <nav class="border-2 border-purple-50 p-4 mb-10 fixed w-11/12 bg-purple-25 md:mr-4 md:sticky md:top-10">
        <ul class="flex flex-wrap justify-around md:block text-white">
            <li>
                <NuxtLink to="/" :class="linkStyles">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog" :class="linkStyles">Blog</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/now" :class="linkStyles">Now</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact" :class="linkStyles">Contact</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blocks-test" :class="linkStyles">Test</NuxtLink>
            </li>
            <!-- li v-for="page in navlist" :key="page.slug">
                <NuxtLink :to="page.slug" class="hover:bg-purple-100">{{ page.title }}</NuxtLink>
            </li -->
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            // navlist: [],
            linkStyles: 'hover:bg-purple-100'
        }
    },
    /* async fetch() {
        this.navlist = await this.$content("pages")
            .only(['title', 'slug'])
            .sortBy('createdAt', 'ASC')
            .fetch()
    } */
};
</script>