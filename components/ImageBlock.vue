<template>
    <div>
        <img :src="data.image">
    </div>
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