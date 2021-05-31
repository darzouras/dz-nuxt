<template>
    <p class="mb-4">
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