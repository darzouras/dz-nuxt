<template>
    <div class="image-wrapper w-full my-8 md:my-16">
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

<style scoped>
.image-wrapper {
    background-color: #44ddae;
    position: relative;
}

.image-wrapper img {
    filter: grayscale(100%) contrast(.75) brightness(1.25);
    position: relative;
    mix-blend-mode: multiply
}

.image-wrapper::before {
    content:'';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #44355b;
    mix-blend-mode: lighten;
    z-index: 1;
}
</style>