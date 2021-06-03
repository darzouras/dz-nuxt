<template>
    <component :is="data.liststyle == 'Bullet' ? 'ul' : 'ol'" :class="getStyles">
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
    },
    data() {
        return {
            styleClasses: 'list-inside mb-4'
        }
    },
    computed: {
        getStyles() {
            switch(this.data.liststyle) {
                case 'Bullet':
                    return 'list-disc ' + this.styleClasses
                default:
                    return 'list-decimal ' + this.styleClasses
            }
        }
    }
}
</script>