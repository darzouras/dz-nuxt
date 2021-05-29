<template>
    <nav class="border-2 border-purple-100 p-1 md:mr-4">
        {{ pages }}
        <ul>
            <li v-for="page in pages" :key="page.slug">
                <NuxtLink :to="page.slug">{{ page.title }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        pages: {
            Array
        }
    }
};
</script>