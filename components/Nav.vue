<template>
    <nav class="border-2 border-purple-100 p-1 md:mr-4">
        <ul>
            <li v-for="page in navlist" :key="page.slug">
                <NuxtLink :to="page.slug">{{ page.title }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navlist: []
        }
    },
    async fetch() {
        this.navlist = await this.$content("pages").fetch()
    }
};
</script>