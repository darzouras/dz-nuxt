<template>
    <p class="mb-4 md:mb-8">
        {{ data.text }}
    </p>
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