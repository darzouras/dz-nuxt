<template>
    <component :is="data.liststyle == 'Bullet' ? 'ul' : 'ol'">
        <li v-for="(item, index) in data.list" :key="`list${index}`">
            {{ item }}
        </li>
    </component>
</template>

<script>
export default {
    props: {
        data: {
            type: Object
        }
    }
}
</script>