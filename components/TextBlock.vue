<template>
    <p>
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