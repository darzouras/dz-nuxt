<template>
    <component
    :is="`h${data.level}`"
    :class="getStyles">
        {{ data.text }}
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
            styleClasses: "text-purple-50 mb-4"
        }
    },
    computed: {
        getStyles() {
            switch(this.data.level) {
                case '1':
                    return 'text-5xl font-bold ' + this.styleClasses
                case '2':
                    return 'text-3xl font-bold ' + this.styleClasses
                case '3':
                    return 'text-2xl underline ' + this.styleClasses
                case '4':
                    return 'text-xl underline ' + this.styleClasses
                default:
                    return this.styleClasses
            }
        }
    }
}
</script>